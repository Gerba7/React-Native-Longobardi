import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InputBar from './components/Input';
import Home from './components/Home';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import AppLoading from 'expo-app-loading';
import TabNavigator from './navigation/TabNavigator';

export default function App() {

  <View>
    <TabNavigator />
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
})
