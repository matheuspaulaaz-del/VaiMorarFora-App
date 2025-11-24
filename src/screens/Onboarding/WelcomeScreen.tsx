import React from 'react';
import { View, Text } from 'react-native';
import ButtonPrimary from '../../components/ButtonPrimary';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAuth } from '../../context/AuthContext';

type Props = NativeStackScreenProps<any, 'Welcome'>;

const WelcomeScreen: React.FC<Props> = ({ navigation }) => {
  const { signInAnonymously } = useAuth();

  const handleStart = async () => {
    await signInAnonymously();
    navigation.replace('Country');
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#020314', padding: 24, justifyContent: 'center' }}>
      <Text style={{ color: '#fff', fontSize: 32, fontWeight: '700', marginBottom: 12 }}>
        VaiMorarFora
      </Text>
      <Text style={{ color: '#9ca3af', fontSize: 16, marginBottom: 32 }}>
        Seu caminho para morar fora, explicado de verdade.
      </Text>
      <ButtonPrimary title="Começar" onPress={handleStart} />
    </View>
  );
};

export default WelcomeScreen;
