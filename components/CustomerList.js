import React, { useEffect, useState } from "react";
import { Image, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Button, ScrollView, TouchableHighlight } from "react-native";
import Menu from "./AppMenu";
import AddCustomer from "./AddCustomer";
import { deleteCustomer, getCustomerById, getCustomers } from "../service/CustomerDB";
import { load } from "flat-cache";
import { color } from "react-native-reanimated";
import MailOutlined from '@ant-design/icons';
import { red } from "chalk";
const Item = ({ item, onPress, style, onDelete, onNavigate, loadCustomer }) => (

    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'stretch',
        }}>
            <View style={{ flex: 8, height: 50, flexDirection: 'row' }} >

                <View style={{ flex: 7, height: 50 }}>
                    <Text style={styles.title}>{item.name}</Text>
                </View>

                <View style={{ flex: 1 }} >
                    <TouchableOpacity
                        onPress={() => {
                            onNavigate()
                            //onDelete()
                        }}>
                        <Image
                            style={styles.tinyLogo}
                            source={{
                                uri: 'https://training.pyther.com/icons/edit.png?9',
                            }}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => { onDelete(item.id) }}>
                    <View style={{ flex: 1, height: 50 }}>
                        <Image
                            style={styles.tinyLogo}
                            source={{
                                uri: 'https://training.pyther.com/icons/delete.png',
                            }}
                        />

                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 2, height: 70 }} >
                <Text style={styles.email}> {item.email}</Text>
                <Text style={styles.phone}>{item.phone}</Text>
                <Text style={styles.address}>{item.address}</Text>
                <Text style={styles.city}>{item.city}</Text>
            </View>

        </View>

    </TouchableOpacity >

);

const CustomerApp = ({ navigation }) => {
    const [selectedId, setSelectedId] = useState(null);
    const [count, setCount] = useState(0);
    const [customers, setCustomers] = useState([])
    const doRender = (count) => {
        setCount(count)
    }
    loadCustomer = async () => {
        let list = await getCustomers();
        setCustomers(list)
    }
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            loadCustomer();
        });
        return unsubscribe;
    }, [navigation]);
    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#5d42f5" : "#42f5e6";

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                onDelete={async (id) => {
                    await deleteCustomer(item.id)
                    loadCustomer();
                    doRender(count + 1)


                }
                }

                onNavigate={() =>
                    navigation.navigate("EditCustomer", { id: item.id, name: item.name, email: item.email, phone: item.phone, address: item.address, city: item.city })}
                style={{ backgroundColor }}
            />
        );
    };

    return (
        <View style={styles.container}>
            <Menu />



            <View style={styles.container}>
                <FlatList
                    data={customers}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    extraData={selectedId}
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => navigation.navigate('AddCustomer')}>
                    <Text style={styles.loginText}>Add customer</Text>
                </TouchableHighlight>
            </View>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,

    },
    title: {
        fontSize: 32,
    },
    email: {
        fontSize: 20,
    },
    address: {
        fontSize: 20
    },
    phone: {
        fontSize: 18,
    },
    tinyLogo: {
        width: 30,
        height: 30,
    },
    city: {

        height: 30
    }, loginText: {
        color: '#f542e6',
    },
    loginButton: {
        backgroundColor: "#42f5f5",
    },
    buttonContainer: {

        position: 'relative',
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },

});

export default CustomerApp;
