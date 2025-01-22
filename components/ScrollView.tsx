import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function ScrollView() {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>
                Scroll View Component
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        mar
    },
});

export default ScrollView