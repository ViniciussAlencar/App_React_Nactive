import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  View
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.entradas}>
        <TextInput placeholder="Altura" keyboardType="numeric" style={styles.input}></TextInput>
        <TextInput placeholder="Massa" keyboardType="numeric" style={styles.input}></TextInput>
      </View>  
      <TouchableOpacity style={styles.button} onPress={()=>{}} style={styles.buttonText}><Text>Calcular</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  entradas: {
    flexDirection: "row",
  },
  input: {
    height: 80,
    textAlign: "center",
    width: "50%",
    fontSize: 50,
    marginTop: 24,
  },
  buttonText: {
    alignSelf: "center",
  },
  button: {
    backgroundColor: "tomato",
    padding: 20,

  },
});
