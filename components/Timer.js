import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button
} from 'react-native';
import React, { useState } from "react";
export default Timer = () => {
    const [count, setCounter] = useState(0);
    var myCounter = 0;
    var StartTimer = () => {
        setInterval(() => tick(), 1000);

    }
    var tick = () => {
        setCounter(prevCount => (prevCount + 1));
    }
    return (
        <SafeAreaView>
            <View>
                <Text>{count}</Text>
                <Button
                    onPress={() => setCounter(count + 1)}
                    title="Increment"
                    color="#841584"
                />
                <Button
                    onPress={StartTimer}
                    title="Start"
                    color="#841584"
                />
                <Button
                    onPress={() => setCounter(0)}
                    title="Reset"
                    color="#841584"
                />
            </View>
        </SafeAreaView>
    );
};