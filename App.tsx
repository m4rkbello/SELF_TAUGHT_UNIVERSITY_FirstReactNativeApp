import React, { useState } from 'react';
import Basics from './components/Basic';
import {
  StyleSheet,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
    <Basics />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
});

export default App;
