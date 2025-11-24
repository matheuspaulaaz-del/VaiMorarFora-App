import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useOnboarding } from '../../context/OnboardingContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<any, 'EnglishLevel'>;

const EnglishLevelScreen: React.FC<Props> = ({ navigation }) => {
  const { state, setState } = useOnboarding();

  const options = [
    { label: 'Nenhum', value: 'nenhum' },
    { label: 'Básico', value: 'basico' },
    { label: 'Intermediário', value: 'intermediario' },
    { label: 'Avançado', value: 'avancado' },
  ];

  const select = (value: any) => {
    setState({ english: value });
    navigation.navigate('Profile');
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#020314', padding: 24 }}>
      <Text style={{ color: '#fff', fontSize: 24, marginBottom: 24 }}>
        Qual o seu nível de inglês?
      </Text>
      {options.map(o => (
        <TouchableOpacity
          key={o.value}
          onPress={() => select(o.value)}
          style={{
            backgroundColor: '#070818',
            padding: 16,
            borderRadius: 16,
            marginBottom: 12,
            borderWidth: state.english === o.value ? 1 : 0,
            borderColor: '#a855f7',
          }}
        >
          <Text style={{ color: '#fff', fontSize: 16 }}>{o.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default EnglishLevelScreen;
