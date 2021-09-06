import React, { useState,useEffect } from "react";
import { Image,FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, TouchableHighlight, View,Button } from "react-native";
import { Platform } from 'react-native';
import { Component } from 'react';

import { getCustomers,deleteCustomer } from "../service/CustomerDB";
import Menu from './AppMenu'
import EditCustomer from "./EditCustomer";


const Item = ({ item, onPress, style ,onDelete,Edcustomer}) => (
  <TouchableOpacity onPress={onPress}  style={[styles.item, style]}>
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'
      }}>
        <View style={{flex:8, height: 50, flexDirection: 'row'}} >
            <View style={{flex:7, height: 50}}>
                <Text style={styles.title}>{item.name}</Text>
            </View>
            <View style={ {flex: 1}} >
            <TouchableOpacity onPress={()=>{
                console.log("edit id"+item.id);
                    Edcustomer(item.id);

            }}>
            <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://training.pyther.com/icons/edit.png?9',
            }}
          />
          </TouchableOpacity>
         </View>
         <TouchableOpacity onPress={ ()=>{
               onDelete(item.id);
         }}>
            <View  style={{flex:1, height: 50}}>
            <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://training.pyther.com/icons/delete.png',
            }}
          />
            </View>
            </TouchableOpacity>
        </View>
        <View style={{flex:2,  height: 70}} >
            <Text style={styles.email}>{item.email}</Text>
            <Text style={styles.phone}>{item.phone}</Text>
            <Text style={styles.address}>{item.address}</Text>
            <Text style={styles.city}>{item.city}</Text>
        </View>

      </View>

  </TouchableOpacity>
);

//Edcustomer={(id)=>{
            
//    navigation.navigate('EditCustomer',{id});
//}
//}

const CustomerApp = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(null);
  const [count, doRender] = useState(0);
  const [customers, setCustomers] = useState([]);
  const pro = [{name:"Kondareddy T",email:"biker@abc.com", phone:"5433233232", address:"Bengaluru"}]
  const name1 = "Vivek"


  loadCustomer = async() =>{
    let list = await getCustomers();
    setCustomers(list)
}
useEffect(()=>{
    const unsubscribe = navigation.addListener('focus', () => {
        loadCustomer();
    });
    return unsubscribe;
  },[navigation]);




   {/* const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#4a9451" : "#cce8c8";
    return (
      <Item
       
      />
    );
    }; */}

  

  return (
    console.log(),
    <View style={styles.container}>
    
        <View style={{
        flex: 8,
        height:100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        fontSize: 32
      }} >
            
            <View style={ styles.MainContainer} >
         
            <Image source={{uri : 'https://reactnativecode.com/wp-content/uploads/2018/01/2_img.png'}}
       style={{width: 130, height: 130, borderRadius: 130/2}} />
       
         </View>
         <View style={{fontSize: 32,height:100,
                 position: 'absolute',
                     left:170,
                             top: 50}}>
             
                <Text >{pro[0].name}</Text>
            </View>
           
        </View>

    

      
     
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0e6e6',
    marginTop: StatusBar.currentHeight || 0,
                top: 0
  },
  
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  MainContainer:
  {
    flex:3,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0,
    position: 'absolute',
                left: 20,
                top: 10
  },
  title: {
    fontSize: 32,
    position: 'absolute',
    left:170,
    top: 50, 
  
  },
  email: {
    fontSize: 18,
  },
  phone: {
    fontSize: 18,
  },
  address: {
    fontSize: 18,
  },
  city: {
    fontSize: 18,
  },
  name: {
      flex:3,
    fontSize: 50,
    fontWeight: "bold",
    left:170,
    top: 50,
    
  },
  tinyLogo: {
    width: 30,
    height: 30,
  },
  loginText: {
    color: 'white',
},
  loginButton: {
    backgroundColor: "#20754f",
},
  buttonContainer: {
    position: 'relative',
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems:'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
},
buttonContainer1: {
    position: 'relative',
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems:'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,

},
});

export default CustomerApp;
