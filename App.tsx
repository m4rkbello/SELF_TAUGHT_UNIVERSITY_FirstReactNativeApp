import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

function App(): React.JSX.Element {

const [count, setCount] = useState<number>(0)  

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
      {/** ONLINE LINKING TO DISPLAY AN IMAGE */}
      <Image style={styles.image} source={{uri: 'https://i.ibb.co/F7df0bb/pic-removebg-preview.png'}} />
      {/** OFFLINE PATH DIRECTORY TO DISPLAY AN IMAGE */}
      <Image style={styles.image} source={require('./assets/bello.jpg')} />

      {/**BUTTON COMPONENT ADD AND SUBTRACT USING useState and onPress */}
      <Button title='ADD' onPress={()=>setCount(count + 1)} />
      <Button title='SUBTRACT' onPress={()=>setCount(count - 1)} />
      <Text> Count is {count}</Text>
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
      fontSize: 25,
      fontWeight: 'regular'
    },
    image: {
      resizeMode: 'contain',
      height: 150,
      width: 150,
      marginBottom:  10
    }


});

export default App;
