import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useOnboarding } from '../../context/OnboardingContext';
import ButtonPrimary from '../../components/ButtonPrimary';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<any, 'Suggestions'>;

const SuggestionsScreen: React.FC<Props> = ({ navigation }) => {
  const { state } = useOnboarding();

  const suggestions = [
    { code: 'EB2', title: 'EB-2 NIW', country: 'EUA', match: 'Alta compatibilidade' },
    { code: 'F1', title: 'Visto F-1 (estudos)', country: 'EUA', match: 'Média compatibilidade' },
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#020314', padding: 24 }}>
      <Text style={{ color: '#fff', fontSize: 24, marginBottom: 16 }}>
        Sugestões para você
      </Text>

      {suggestions.map(s => (
        <View
          key={s.code}
          style={{
            backgroundColor: '#070818',
            padding: 16,
            borderRadius: 16,
            marginBottom: 12,
          }}
        >
          <Text style={{ color: '#fff', fontSize: 18 }}>{s.title}</Text>
          <Text style={{ color: '#9ca3af', marginTop: 4 }}>
            {s.country} • {s.match}
          </Text>
        </View>
      ))}

      <View style={{ marginTop: 24 }}>
        <Text style={{ color: '#fff', fontSize: 18, marginBottom: 8 }}>
          Desbloqueie seu guia completo
        </Text>
        <ButtonPrimary title="Ver planos" onPress={() => navigation.navigate('Paywall')} />
      </View>
    </ScrollView>
  );
};

export default SuggestionsScreen;
