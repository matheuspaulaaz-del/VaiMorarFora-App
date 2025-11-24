import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { useOnboarding } from '../../context/OnboardingContext';
import ButtonPrimary from '../../components/ButtonPrimary';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<any, 'Profile'>;

const ProfileScreen: React.FC<Props> = ({ navigation }) => {
  const { state, setState } = useOnboarding();
  const [age, setAge] = useState(state.age ? String(state.age) : '');
  const [education, setEducation] = useState(state.education ?? '');
  const [profession, setProfession] = useState(state.profession ?? '');
  const [income, setIncome] = useState(state.income ? String(state.income) : '');

  const handleContinue = () => {
    setState({
      age: age ? Number(age) : null,
      education,
      profession,
      income: income ? Number(income) : null,
    });
    navigation.navigate('Suggestions');
  };

  const inputStyle = {
    backgroundColor: '#070818',
    color: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#020314', padding: 24 }}>
      <Text style={{ color: '#fff', fontSize: 24, marginBottom: 16 }}>
        Seu perfil profissional
      </Text>

      <Text style={{ color: '#9ca3af', marginBottom: 4 }}>Idade</Text>
      <TextInput
        placeholder="Ex: 28"
        placeholderTextColor="#6b7280"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
        style={inputStyle}
      />

      <Text style={{ color: '#9ca3af', marginBottom: 4 }}>Escolaridade</Text>
      <TextInput
        placeholder="Ex: Superior completo"
        placeholderTextColor="#6b7280"
        value={education}
        onChangeText={setEducation}
        style={inputStyle}
      />

      <Text style={{ color: '#9ca3af', marginBottom: 4 }}>Profissão / Área</Text>
      <TextInput
        placeholder="Ex: Engenheiro de Software"
        placeholderTextColor="#6b7280"
        value={profession}
        onChangeText={setProfession}
        style={inputStyle}
      />

      <Text style={{ color: '#9ca3af', marginBottom: 4 }}>Renda mensal em R$</Text>
      <TextInput
        placeholder="Ex: 8000"
        placeholderTextColor="#6b7280"
        keyboardType="numeric"
        value={income}
        onChangeText={setIncome}
        style={inputStyle}
      />

      <ButtonPrimary title="Continuar" onPress={handleContinue} />
    </View>
  );
};

export default ProfileScreen;
