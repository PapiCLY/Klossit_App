import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


//screens
import Login from '../Daniel-App/App/Screens/Login';

export default function App() {
    return <Login />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignITems: 'center',
    justifyContent: "center",
  },
});
