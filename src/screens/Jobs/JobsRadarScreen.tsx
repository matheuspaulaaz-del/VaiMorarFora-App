import React from 'react';
import { View, Text } from 'react-native';

const JobsRadarScreen: React.FC = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#020314', padding: 24 }}>
      <Text style={{ color: '#fff', fontSize: 24, marginBottom: 16 }}>Radar de empregos</Text>
      <Text style={{ color: '#9ca3af' }}>
        Aqui você verá as vagas recomendadas por país, com filtros e integração futura
        com LinkedIn/Indeed através do seu backend.
      </Text>
    </View>
  );
};

export default JobsRadarScreen;
