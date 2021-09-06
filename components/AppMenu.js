import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, View, SafeAreaView, Text, Alert, TouchableHighlight, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Separator = () => (
    <View style={styles.separator} />
);
var updateCount = 0;
const Menu = ({ }) => {
    let navigation = useNavigation()
    const [value, onChangeText] = React.useState('9');
    const [count, setCount] = React.useState(0);
    const [init, setInit] = React.useState(0);
    return (
        <View style={{ flexDirection: "row", justifyContent: 'space-between', backgroundColor: '#c8f542' }}>
            <Button onPress={() => navigation.navigate('Home')} title="Home"></Button>
            <Button onPress={() => navigation.navigate('About')} title="About"></Button>
            <Button onPress={() => navigation.navigate('Customers')} title="Customers"></Button>
            <Button onPress={() => navigation.navigate('Logout')} title="Logout"></Button>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
    opacity: {
        alignItems: "center",
        backgroundColor: "#737373",
        padding: 10
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});

export default Menu;
