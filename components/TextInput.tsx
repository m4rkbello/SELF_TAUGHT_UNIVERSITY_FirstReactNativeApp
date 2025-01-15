import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

function TextInputComponent() {
    const [value, setValue] = useState('');

    return (
        <View style={style.container}>
            <Text style={style.headerText}>Text Input Component</Text>
            <TextInput
                placeholder="Type something"
                value={value}
                style={style.input}
                onChangeText={setValue}
            />
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        marginBottom: 20,
        paddingHorizontal: 20,
    },
    headerText: {
        fontSize: 20, // Increased font size for visibility
        fontWeight: 'normal',
    },
    input: {
        height: 50,
        borderColor: 'grey',
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingBottom: 10,
        marginTop: 10,
    },
});

export default TextInputComponent;