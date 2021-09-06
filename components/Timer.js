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
  import React, { useState,useEffect } from "react";
export default Timer = () => {

    const [count, setCounter] = useState(0);
    var [cInterval,setCInterval] = useState(0);
  
    // useEffect is alternate of componentDidMount for functional Components
    useEffect(()=>{
      var interval = setInterval(() => tick(), 1000);
      setCInterval(interval)
      return ()=>{ // equal to componentDidUnMount
        clearInterval(interval);
      }
    },[])
    var stop = () =>{
      
        clearInterval(cInterval);
    }

    var tick = () => {
        setCounter(prevCount => (prevCount + 1));
      }
    var start = () =>{
      
        setInterval(() => tick(), 1000);
    }
    
    var myCounter = 0;
    
    return (
      <SafeAreaView>
          <View>
              <Text>{count}</Text>
              <Button
                onPress={()=> setCounter(count+1)}
                title="Increment"
                color="#841584"
                />
                <Button
                onPress={start}
                title="Start"
                color="#841584"
                />
                <Button
                onPress={()=> setCounter(0)}
                title="Reset"
                color="#841584"
                />

                <Button
               onPress={stop}
                title="Stop"
                color="#841584"
                />
          </View>
      </SafeAreaView>
    );
  };