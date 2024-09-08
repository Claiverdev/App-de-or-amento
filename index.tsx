import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const App = () => {
  // Estados para armazenar os valores dos inputs
  const [comprimento, setComprimento] = useState('');
  const [largura, setLargura] = useState('');
  const [espessura, setEspessura] = useState('');
  const [resultado, setResultado] = useState(null); // Estado para armazenar o resultado

  // Função para converter string com vírgula para número com ponto
  const converterParaNumero = (valor) => {
    if (valor) {
      return parseFloat(valor.replace(',', '.'));
    }
    return NaN;
  };

  // Função para salvar os dados e calcular o valor
  const calcularDados = () => {
    // Converter os valores dos inputs para números
    const comprimentoNum = converterParaNumero(comprimento);
    const larguraNum = converterParaNumero(largura);
    const espessuraNum = converterParaNumero(espessura);

    // Verificar se os valores são números válidos
    if (isNaN(comprimentoNum) || isNaN(larguraNum) || isNaN(espessuraNum)) {
      Alert.alert('Erro', 'Por favor, insira valores numéricos válidos com ponto ou vírgula.');
      return;
    }

    // Cálculos conforme as fórmulas fornecidas
    const x = comprimentoNum * larguraNum * (espessuraNum / 100);
    const ct = x * 235;
    const p = ct * 1.7;
    
    setResultado({ x, ct, p });
  };

  return (
    
    <View style={styles.container}>
       {resultado && (
        <View style={styles.resultadoContainer}>
          <Text style={styles.resultadoTexto}>R$ {resultado.p.toFixed(2)}</Text>
        </View>
        )}

      <Text style={styles.label}>Comprimento (metros):</Text>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        value={comprimento}
        onChangeText={setComprimento}
      />

      <Text style={styles.label}>Largura (metros):</Text>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        value={largura}
        onChangeText={setLargura}
      />

      <Text style={styles.label}>Espessura (centímetros):</Text>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        value={espessura}
        onChangeText={setEspessura}
      />

      <Button title="Calcular" onPress={calcularDados} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  label: {
    fontSize: 18,
    marginVertical: 8,
  },

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    marginBottom: 16,
    paddingHorizontal: 8,
  },

  resultadoContainer: {
    marginTop: 0,
    padding: 20,
    borderColor: 'gray',
    borderWidth: 3,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },

  resultadoTexto: {
    fontSize: 25,
  },
});

export default App;
