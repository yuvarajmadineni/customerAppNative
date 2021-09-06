import React,{useState,useEffect} from 'react';
import {View, SafeAreaView, StyleSheet,TouchableHighlight,TouchableOpacity,Modal} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
  Button,Image
} from 'react-native-paper';
import { ListItem } from 'react-native-elements'
//Icon add in the above list
import { getCustomers,deleteCustomer } from "../service/CustomerDB1";

import Icon from 'react-native-vector-icons/MaterialIcons';





const list1 = [
  {
    title: 'Booking Address',
    icon: 'flag'
  },
  {
    title: 'Payment Method',
    icon: 'payment'
  },
  {
    title: 'Currency                  USD',
    icon: 'money'
  },
  {
    title: 'Language                English',
    icon: 'language'
  },
   // more items
];





const ProfileScreen = ({navigation}) => {

var cus = getCustomers();
var item = cus[0];
const [cnt, setcnt] = useState(0);
const [customers, setCustomers] = useState([]);

loadCustomer = () =>{
  let list = getCustomers();
  setCustomers(list)
  cus = list;
 // console.log("cus",cus)
  setcnt(cnt+1);
}
useEffect(()=>{
    console.log("came to profile")
  const unsubscribe = navigation.addListener('focus', () => {
      loadCustomer();
  });
  return unsubscribe;
},[navigation]);




  return (
    <SafeAreaView style={styles.container}>
        <View>
            <Text> </Text>
        </View>
<View style={ styles.x} >
<TouchableOpacity onPress={()=>{
navigation.navigate("profile");                

            }}><Text style={styles.xx}>X</Text></TouchableOpacity>
</View>
{ /*
<View>

            <View style={ {flex: 1}} >
            <TouchableOpacity onPress={() =>
        navigation.navigate("EditProfile")

            }>
            <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://cdn3.vectorstock.com/i/thumb-large/05/57/cross-x-sign-design-template-vector-32500557.jpg',
            }}
          />
          </TouchableOpacity>
         </View>
        </View> */}
        <View>
            <Text> </Text>
        </View>
<View>    

  {
    list1.map((item, i) => (
      <ListItem key={i} bottomDivider>
     <Icon name={item.icon} />
        <ListItem.Content>
          <ListItem.Title>{item.title}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    ))
  }
</View>  

<View style={{ justifyContent: 'center', marginTop: 40 }}>
<Button onPress={() => { navigation.navigate("profile") }} ><Text style={{ color: 'red' }}>LOG OUT</Text></Button>
</View>


    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  x: {
    fontSize: 20,
    alignSelf :'flex-end',

  },
  xx: {
    marginRight: 20,
    fontSize: 25,
    color: '#f51505',
    //alignSelf :'flex-end'
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
  buttonContainer: {
    
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems:'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: "#ffffff",
  },
  loginText: {
    color: '#777777',
  },
});