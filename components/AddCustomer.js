import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert
} from 'react-native';
import Menu from './AppMenu';
import { addCustomer } from '../service/CustomerDB'

const AddCustomer = (props) => {
    const [name, onChangeName] = React.useState('');
    const [email, onChangeEmail] = React.useState('');
    const [address, onChangeAddress] = React.useState('');
    const [phone, onChangePhone] = React.useState('');
    const [city, onChangeCity] = React.useState('');
    const [value, onChangeText] = React.useState('9');

    var addToCustomer = async () => {
        var customer = {
            name, email, phone, address, city
        };
        console.log(customer);
        customer.id = Date.now() + "S";
        await addCustomer(customer);
        //onChangeText('11')
        props.navigation.navigate('Customers', {});
        //onChangeText(value + 's')
    }

    return (
        <View style={styles.container}>
            <Menu navigation={props.navigation} />
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                    placeholder="Name"
                    underlineColorAndroid='transparent'
                    value={name}
                    onChangeText={onChangeName} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                    placeholder="Email"
                    underlineColorAndroid='transparent'
                    value={email}
                    onChangeText={onChangeEmail} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                    placeholder="Phone"
                    underlineColorAndroid='transparent'
                    value={phone}
                    onChangeText={onChangePhone} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                    placeholder="Address"
                    underlineColorAndroid='transparent'
                    value={address}
                    onChangeText={onChangeAddress} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                    placeholder="City"
                    underlineColorAndroid='transparent'
                    value={city}
                    onChangeText={onChangeCity} />
            </View>

            <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => addToCustomer()}>
                <Text style={styles.loginText}>Add Customer</Text>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#DCDCDC',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: "#00b5ec",
    },
    loginText: {
        color: 'white',
    }
});

export default AddCustomer;