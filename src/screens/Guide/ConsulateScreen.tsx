import React from 'react';
import { View, Text } from 'react-native';

const ConsulateScreen: React.FC = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#020314', padding: 24 }}>
      <Text style={{ color: '#fff', fontSize: 24, marginBottom: 16 }}>Consulado mais próximo</Text>
      <Text style={{ color: '#9ca3af' }}>
        Aqui você verá o consulado mais próximo com base na sua localização,
        usando dados do Supabase. Essa tela é um placeholder para o MVP.
      </Text>
    </View>
  );
};

export default ConsulateScreen;
