import React from 'react';
import { YellowBox, StyleSheet, Text, View } from 'react-native';
import Colors from './src/constants';

console.disableYellowBox = true;
console.warn('YellowBox is disabled.');
YellowBox.ignoreWarnings(['Warning: ...']);
console.ignoredYellowBox = ['Setting a timer'];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.text
  }
});
