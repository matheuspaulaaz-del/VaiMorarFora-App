import React from 'react';
import { View, Text } from 'react-native';
import ButtonPrimary from '../../components/ButtonPrimary';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<any, 'Paywall'>;

// Para MVP: ainda não integra Stripe, só simula sucesso.
const PaywallScreen: React.FC<Props> = ({ navigation }) => {
  const handleComplete = () => {
    navigation.replace('MainTabs');
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#020314', padding: 24 }}>
      <Text style={{ color: '#fff', fontSize: 24, marginBottom: 16 }}>
        Desbloqueie seu guia completo por R$49,90
      </Text>

      <View
        style={{
          backgroundColor: '#070818',
          padding: 16,
          borderRadius: 16,
          marginBottom: 16,
          borderWidth: 1,
          borderColor: '#22c55e',
        }}
      >
        <Text style={{ color: '#fff', fontSize: 18 }}>Premium</Text>
        <Text style={{ color: '#22c55e', fontSize: 22, marginTop: 4 }}>R$49,90 (único)</Text>
        <Text style={{ color: '#9ca3af', marginTop: 8 }}>
          • Acesso vitalício{'
'}
          • Todos os países incluídos{'
'}
          • Checklists, modelos, calculadora
        </Text>
      </View>

      <View
        style={{
          backgroundColor: '#070818',
          padding: 16,
          borderRadius: 16,
          marginBottom: 16,
          borderWidth: 1,
          borderColor: '#a855f7',
        }}
      >
        <Text style={{ color: '#fff', fontSize: 18 }}>Pro Mensal</Text>
        <Text style={{ color: '#a855f7', fontSize: 22, marginTop: 4 }}>R$19,90 / mês</Text>
        <Text style={{ color: '#9ca3af', marginTop: 8 }}>
          • Inclui tudo do Premium{'
'}
          • Radar de vagas no LinkedIn{'
'}
          • Alertas diários de empregos
        </Text>
      </View>

      <ButtonPrimary title="Escolher Premium" onPress={handleComplete} />
    </View>
  );
};

export default PaywallScreen;
