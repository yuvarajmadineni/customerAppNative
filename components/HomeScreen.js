import React, { useEffect } from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'UserDatabase.db' });

const HomeScreen = ({ navigation }) => {
    useEffect(() => {
        db.transaction(function (txn) {
            txn.executeSql(
                "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
                [],
                function (tx, res) {
                    console.log('item:', res.rows.length);
                    if (res.rows.length == 0) {
                        txn.executeSql('DROP TABLE IF EXISTS table_user', []);
                        txn.executeSql(
                            'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',
                            []
                        );
                    }
                }
            );
        });
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View>
                    <Text>SQLite Example</Text>
                    <Button onPress={() => {
                        console.log("Adding record");
                        db.transaction(function (txn) {
                            txn.executeSql(
                                "INSERT INTO table_user (user_name, user_contact, user_address) VALUES ('Rashid', '898989898998', 'UK')",
                                [],
                                function (tx, res) {
                                    console.log('item:', JSON.stringify(res));
                                }
                            );
                        });

                    }} title="add user record" />
                    <Button onPress={() => {
                        db.transaction((tx) => {
                            tx.executeSql(
                                'SELECT * FROM table_user',
                                [],
                                (tx, results) => {
                                    var len = results.rows.length;
                                    if (len > 0) {
                                        for (let i = 0; i < len; i++) {
                                            let res = results.rows.item(i);
                                            console.log("result:" + JSON.stringify(res));
                                        }

                                    } else {
                                        alert('No user found');
                                        //updateAllStates('', '', '');
                                    }
                                }
                            );
                        });

                    }} title="get user records" />
                </View>
                <Text
                    style={{
                        fontSize: 18,
                        textAlign: 'center',
                        color: 'grey'
                    }}>
                    Example of SQLite Database in React Native
                </Text>
                <Text
                    style={{
                        fontSize: 16,
                        textAlign: 'center',
                        color: 'grey'
                    }}>
                    www.aboutreact.com
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
