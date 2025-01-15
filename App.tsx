import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Basics from './components/Basic';
import TextInputComponent from './components/TextInput';

function App() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Basics />
      <TextInputComponent />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  scrollViewContent: {
    padding: 10,
  },
});

export default App;