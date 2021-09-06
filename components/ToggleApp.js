import React, { useState } from 'react';
import { Button, SafeAreaView, Text, View } from "react-native";

function toggle(isShow) {
    if (isShow) {
        return (
            <Text>
                I am here.
            </Text>
        )
    }
}

export function ToggleApp() {  //name,email is state
    //var [ a = 1, b = 2, c = 3, d ] = list
    const [isShow, setShow] = useState(false); //count is state

    let onButtonClick = () => {
        console.log(isShow);
        setShow((lastval) => (!lastval));
    }
    return (
        <SafeAreaView>
            <View >
                <Text>Show Hide App </Text>
                <Button title="Show/Hide" onPress={onButtonClick}></Button>
                <>{toggle(isShow)}</>
            </View>
        </SafeAreaView>
    );
}