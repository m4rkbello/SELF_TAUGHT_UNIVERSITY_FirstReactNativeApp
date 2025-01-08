import {
    StyleSheet,
    Text,
    TextInput,
    View,
  } from 'react-native';

function TextInputComponent()    {

    return(
        <View style={style.container}>
            <Text style={style.headerText}>
                Text Input Component
            </Text>
            <TextInput style={style.input}>

            </TextInput>
        </View>
    );
}


const style = StyleSheet.create({
    container : {
        marginBottom: 20
    },
    headerText: {
        fontSize: 25,
        fontWeight: 'regular'
      },
      input: {
        height: 50,
        borderColor: 'grey',
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingBottom: 10

      },
});

export default TextInputComponent;