import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login';
import CustomerApp from './components/CustomerList';
import Menu from './components/AppMenu';
import AddCustomer from './components/AddCustomer';
import EditCustomer from './components/EditCustomer';
import LocalStorage from './components/LocalStorage';
import Student from './components/StudentTab';
import Loginfashion from './components/Loginfashion';
function HomeScreen() {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Menu />
      <LocalStorage />
      <Text>Home Screen</Text>
    </View>
  );
}

function AboutScreen() {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Menu />
      <Text>About Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Logout" component={Login} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={Student} />
        <Stack.Screen name="Customers" options={{
          title: 'Customers',
          headerStyle: {
            backgroundColor: '#4290f5',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} component={CustomerApp} />
        <Stack.Screen name="AddCustomer" component={AddCustomer} />
        <Stack.Screen name="EditCustomer" component={EditCustomer} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
