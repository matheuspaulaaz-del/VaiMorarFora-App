import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/Onboarding/WelcomeScreen';
import CountryScreen from '../screens/Onboarding/CountryScreen';
import EnglishLevelScreen from '../screens/Onboarding/EnglishLevelScreen';
import ProfileScreen from '../screens/Onboarding/ProfileScreen';
import SuggestionsScreen from '../screens/Onboarding/SuggestionsScreen';
import PaywallScreen from '../screens/Onboarding/PaywallScreen';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Country" component={CountryScreen} />
      <Stack.Screen name="EnglishLevel" component={EnglishLevelScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Suggestions" component={SuggestionsScreen} />
      <Stack.Screen name="Paywall" component={PaywallScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
