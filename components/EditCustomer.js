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
import { getCustomerById, updateCustomer } from '../service/CustomerDB'
import { useNavigation } from '@react-navigation/native';
import { onChange } from 'react-native-reanimated';

const EditCustomer = (props) => {

    const [name, onChangeName] = React.useState(props.route.params.name);
    const [email, onChangeEmail] = React.useState(props.route.params.email);
    const [address, onChangeAddress] = React.useState(props.route.params.address);
    const [phone, onChangePhone] = React.useState(props.route.params.phone);
    const [city, onChangeCity] = React.useState(props.route.params.city);
    const [value, onChangeText] = React.useState('9');
    console.log("pq", props.route.params.id)
    var editCustomer = async (id) => {
        var customer = {
            id: props.route.params.id, name, email, phone, address, city
        };

        console.log(customer);
        //customer.id = Date.now() + "S";
        await updateCustomer(customer);
        props.navigation.navigate('Customers', {});
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

            <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => editCustomer(props.id)}>
                <Text style={styles.loginText}>Update Customer</Text>
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

export default EditCustomer;