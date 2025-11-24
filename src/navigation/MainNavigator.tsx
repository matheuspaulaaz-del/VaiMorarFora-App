import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DocumentsScreen from '../screens/Guide/DocumentsScreen';
import ConsulateScreen from '../screens/Guide/ConsulateScreen';
import JobsRadarScreen from '../screens/Jobs/JobsRadarScreen';
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();

const Placeholder: React.FC = () => (
  <View style={{ flex: 1, backgroundColor: '#020314', alignItems: 'center', justifyContent: 'center' }}>
    <Text style={{ color: '#fff' }}>Em breve</Text>
  </View>
);

const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#020314', borderTopColor: '#111827' },
        tabBarActiveTintColor: '#a855f7',
        tabBarInactiveTintColor: '#9ca3af',
      }}
    >
      <Tab.Screen name="Guia" component={DocumentsScreen} />
      <Tab.Screen name="Consulado" component={ConsulateScreen} />
      <Tab.Screen name="Empregos" component={JobsRadarScreen} />
      <Tab.Screen name="Mais" component={Placeholder} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
