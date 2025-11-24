import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useOnboarding } from '../../context/OnboardingContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<any, 'Country'>;

const CountryScreen: React.FC<Props> = ({ navigation }) => {
  const { state, setState } = useOnboarding();

  const selectCountry = (value: any) => {
    setState({ country: value });
    navigation.navigate('EnglishLevel');
  };

  const items = [
    { label: 'Estados Unidos', value: 'EUA' },
    { label: 'Canadá', value: 'Canada' },
    { label: 'Portugal', value: 'Portugal' },
    { label: 'Irlanda', value: 'Irlanda' },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#020314', padding: 24 }}>
      <Text style={{ color: '#fff', fontSize: 24, marginBottom: 24 }}>
        Para qual país você quer se mudar?
      </Text>
      {items.map(item => (
        <TouchableOpacity
          key={item.value}
          onPress={() => selectCountry(item.value)}
          style={{
            backgroundColor: '#070818',
            padding: 16,
            borderRadius: 16,
            marginBottom: 12,
            borderWidth: state.country === item.value ? 1 : 0,
            borderColor: '#a855f7',
          }}
        >
          <Text style={{ color: '#fff', fontSize: 16 }}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CountryScreen;
