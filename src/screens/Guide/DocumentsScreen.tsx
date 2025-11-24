import React from 'react';
import { View, Text } from 'react-native';

const DocumentsScreen: React.FC = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#020314', padding: 24 }}>
      <Text style={{ color: '#fff', fontSize: 24, marginBottom: 16 }}>Seus documentos</Text>
      <Text style={{ color: '#9ca3af' }}>
        Aqui você poderá listar todos os documentos pessoais, financeiros e específicos
        para o seu visto. Essa tela é apenas um esqueleto inicial.
      </Text>
    </View>
  );
};

export default DocumentsScreen;
