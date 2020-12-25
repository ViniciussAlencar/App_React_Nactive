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
      <TouchableOpacity style={styles.buttonText} onPress={()=>{}}><Text style={styles.content}>Calcular</Text></TouchableOpacity>
      <Text style={styles.resultado}>30</Text>
      <Text style={[styles.resultado, {fontSize:24}]}>Obesidade Morbída</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
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
    marginBottom: 25,
  },
  resultado: {
    color: "#000",
    alignSelf: "center",
    color: "#232323",
    fontSize: 65,
    padding: 15,

  },
  buttonText: {
    alignSelf: "center",
    padding: 30,
    backgroundColor: "rgb(100,240,245)",
    fontSize: 20,
    borderRadius: 20,
  },
  content: {
    color: "#fff",
    fontWeight: "bold",
  }
});
