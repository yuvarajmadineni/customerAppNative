import React,{useState,useEffect} from 'react';
import {View, SafeAreaView, StyleSheet,TouchableHighlight} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import { ListItem } from 'react-native-elements'
//Icon add in the above list
import { getCustomers,deleteCustomer } from "../service/CustomerDB1";

import Icon from 'react-native-vector-icons/FontAwesome5';





const list1 = [
  {
    title: 'All My Bookings',
    icon: 'bars'
  },
  {
    title: 'Pending Visits',
    icon: 'parachute-box'
  },
  {
    title: 'Pending Payments',
    icon: 'receipt'
  },
  {
    title: 'Feedback',
    icon: 'star'
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

      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image 
            source={{
              uri: 'https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg',
            }}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>{cus[0].name}</Title>
            { /* <Caption style={styles.caption}>@j_doe</Caption> */ }
            <Text style={{color:"#777777", marginLeft: 0,marginTop: 5}}>{cus[0].email}</Text>

           <View style={styles.buttonContainer}>
        <TouchableHighlight style={{flexDirection: 'row',color:"#777777", marginRight: 95,marginTop: 15,width: 150, borderRadius: 30, height: 45, backgroundColor: "#DCDCDC",  justifyContent: 'center',alignSelf: 'center',
    alignItems:'center'}} 
    
    onPress={() =>
        navigation.navigate("EditProfile", { id: item.id, name: item.name, email: item.email, phone: item.phone, address: item.address,city: item.city })}>
                    <Text style={styles.loginText}>Edit Profile</Text>
        </TouchableHighlight>

        </View>  
     </View>
        </View>
      </View>

 { /*}     <View style={styles.userInfoSection}>
        <View style={styles.row}>
    
          <Text style={{color:"#777777", marginLeft: 20}}>Kolkata, India</Text>
        </View>
        <View style={styles.row}>
      
          <Text style={{color:"#777777", marginLeft: 20}}>+91-900000009</Text>
        </View>
        <View style={styles.row}>
      
          <Text style={{color:"#777777", marginLeft: 20}}>john_doe@email.com</Text>
        </View>
        </View> */}




     {/*  */}

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