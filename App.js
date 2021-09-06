/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import * as React from 'react';
 import { View, Text } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 import Login from './components/Login';
 import Customers from './components/CustomerListDisp';
 import Menu from './components/AppMenu';
 import AddCustomer from './components/AddCustomer';
 import { useNavigation } from '@react-navigation/native';
 import EditCustomer from './components/EditCustomer';
 import LocalStorageApp from './components/LocalStorageApp'
 import HomeScreen from './components/HomeScreen'
 import profile from './components/profile1'
 import editprofile from './components/Editprofile'
 import more from './components/more'
 import search from './components/2'
 //import Student from './components/StudentTab'
 

 
 function AboutScreen() {
   return (
     <View style={{ alignItems: 'center', justifyContent: 'center' }}>
       <Menu/>
       <Text>About Screen</Text>
     </View>
   );
 }
 
 const Stack = createStackNavigator();
 
 function App() {
   return (
     <NavigationContainer>
       <Stack.Navigator>
       <Stack.Screen name="Login" options={{title: 'Login',headerStyle: {backgroundColor: '#a2ba6a',},headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold',},}} component={Login} />
       <Stack.Screen name="Home" options={{title: 'Home',headerStyle: {backgroundColor: '#a2ba6a',},headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold',},}} component={HomeScreen} />
       <Stack.Screen name="About" options={{title: 'About',headerStyle: {backgroundColor: '#a2ba6a',},headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold',},}} component={AboutScreen} />
       <Stack.Screen name="Customers" options={{title: 'Customers',headerStyle: {backgroundColor: '#a2ba6a',},headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold',},}} component={Customers} />
       <Stack.Screen name="AddCustomer" options={{title: 'Add Customer',headerStyle: {backgroundColor: '#a2ba6a',},headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold',},}} component={AddCustomer} />
       <Stack.Screen name="EditCustomer" options={{title: 'Edit Customer',headerStyle: {backgroundColor: '#a2ba6a',},headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold',},}} component={EditCustomer} />
       <Stack.Screen name="profile" options={{title: 'profile',headerStyle: {backgroundColor: '#a2ba6a',},headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold',},}} component={profile} />
       <Stack.Screen name="EditProfile" options={{title: 'Edit Profile',headerStyle: {backgroundColor: '#a2ba6a',},headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold',},}} component={editprofile} />
       <Stack.Screen name="more" options={{title: 'More',headerStyle: {backgroundColor: '#a2ba6a',},headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold',},}} component={more} />
       <Stack.Screen name="search" options={{title: 'Search',headerStyle: {backgroundColor: '#a2ba6a',},headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold',},}} component={search} />
       
       </Stack.Navigator>
     </NavigationContainer>
   );
 }
 export default App;






