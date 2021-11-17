import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InputBar from './components/Input';
import Home from './components/Home';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import AppLoading from 'expo-app-loading';

export default function App() {

  const [home, setStart] = useState(false)

  const start = () => {
    setStart(true)
  }

  const back = () => {
    setStart(false)
  }

  return (
    <View style={styles.container}>
      { home ? <InputBar back={back} /> : <Home start={start} /> }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
})
