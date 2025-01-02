import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>

      <View style={styles.boxContainer} >

      <View style={styles.redBoxContainer} />
      <View style={styles.blueBoxContainer} />
      <View style={styles.greenBoxContainer} />
      </View>
      <Text style={styles.nestedText}>
        MY FIRST REACT NATIVE COURSE 
        <Text style={styles.innerText}>
          SIGE PADAYON
        </Text>
      </Text>
      <Image style={styles.image} source={{uri: 'https://i.ibb.co/F7df0bb/pic-removebg-preview.png'}} />

      <Image/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      marginBottom: 20,
    },

    boxContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },

    redBoxContainer: {
      width: 50,
      height: 50,
      backgroundColor: 'red',
    },
    blueBoxContainer: {
      width: 50,
      height: 50,
      backgroundColor: 'blue',
    },
    greenBoxContainer: {
      width: 50,
      height: 50,
      backgroundColor: 'green',
    },
    nestedText: {
      fontSize: 30
    },
    innerText: {
      fontSize: 30,
      fontWeight: 'bold'
    },
    image: {
      resizeMode: 'contain',
      height: 150,
      width: 150,
      marginBottom:  10
    }


});

export default App;
