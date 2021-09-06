import React, { useState,useEffect } from "react";
import { Image,FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, TouchableHighlight, View,Button } from "react-native";

import { getCustomers,deleteCustomer } from "../service/CustomerDB";
import Menu from './AppMenu'
import EditCustomer from "./EditCustomer";


const Item = ({ item, onPress, style ,onDelete,Edcustomer}) => (
  <TouchableOpacity onPress={onPress}  style={[styles.item, style]}>
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
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




    const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#4a9451" : "#cce8c8" ;
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        onDelete ={ async ()=>{
            console.log("Delete id"+item.id);
               await deleteCustomer(item.id);
               loadCustomer();
                doRender(count+1);
        }
        }
        Edcustomer={() =>
            navigation.navigate("EditCustomer", { id: item.id, name: item.name, email: item.email, phone: item.phone, address: item.address,city: item.city })}
        style={{ backgroundColor }}
      />
    );
    };

  

  return (
    <View style={styles.container}>
        <Menu/>
        
       

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

        <View style={styles.buttonContainer}>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => navigation.navigate('profile')}>
                    <Text style={styles.loginText}>Profile</Text>
        </TouchableHighlight>
        </View>

        <View style={styles.buttonContainer}>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => navigation.navigate('more')}>
                    <Text style={styles.loginText}>More</Text>
        </TouchableHighlight>
        </View>

        <View style={styles.buttonContainer}>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => navigation.navigate('search')}>
                    <Text style={styles.loginText}>Search</Text>
        </TouchableHighlight>
        </View>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0e6e6',
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
});

export default CustomerApp;

