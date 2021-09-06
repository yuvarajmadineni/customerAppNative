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

export default class Login extends Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        headerTitle: 'Login'
    };
    state = {
        email: '',
        password: ''
    }

    onLoginButton = () => {
        console.log(">> on login button");
        if (this.state.email == this.state.password) {
            this.props.navigation.navigate('About', {});
            this.setState({
                email: '',
                password: ''
            });

        } else {
            alert('Username/Password should be admin/admin.');
        }
    }

    onForgotText = () => {
        //this.props.navigation.navigate('Forgot');
    }

    onRegister = () => {
        //this.props.navigation.navigate('Register');
    }

    render() {
        return (
            <View >
                <View style={styles.img}>
                    <Image source={require('./logo_fashion.jpg')} />
                </View>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon}
                        source={{ uri: 'https://toppng.com/uploads/preview/icons-logos-emojis-user-icon-png-transparent-11563566676e32kbvynug.png' }} />
                    <TextInput style={styles.inputs}
                        placeholder="USERNAME/EMAIL"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        value={this.state.email}
                        onChangeText={(email) => this.setState({ email })} />
                </View>

                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon}
                        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHUBGRm_d9UrdKvYfaDD5WVGDjJSxD5Svcgg&usqp=CAU' }} />
                    <TextInput style={styles.inputs}
                        placeholder="PASSWORD"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password })} />
                </View>

                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onLoginButton()}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableHighlight>
                <View>
                    <Text>Don't have an account? Swipe right to create</Text>
                    {/* <View style={{display:"flex",backgroundColor:'green',width:'100%'}}> */}
                    <Text style={{ display: "flex", flexDirection: '', alignContent: "center" }}>a new account</Text>

                    {/* </View> */}
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    img: {
        marginTop: 180,
        marginBottom: 40,
        marginLeft: 20
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DCDCDC',
    },
    inputContainer: {

        marginLeft: 20,
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 350,
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
        marginLeft: 20,
        width: 350,
        backgroundColor: "#ff6969",

    },
    loginText: {
        fontFamily: 'Neusa Next Std',
        color: '#f5f6f8',
    }
});
