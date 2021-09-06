import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
} from 'react-native';


import {useTheme} from 'react-native-paper';

import Animated from 'react-native-reanimated';
import { updateCustomer } from '../service/CustomerDB1';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';


const EditProfileScreen = (props) => {
    const [name, onChangeName] = React.useState(props.route.params.name);
    const [email, onChangeEmail] = React.useState(props.route.params.email);
    const [address, onChangeAddress] = React.useState(props.route.params.address);
    const [phone, onChangePhone] = React.useState(props.route.params.phone);
    const [city, onChangeCity] = React.useState(props.route.params.city);
    const [cnt, setcnt] = React.useState(0);
  const [image, setImage] = useState('https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg');
  const {colors} = useTheme();

  var editCustomer =  (id) => {
    console.log("came to customers page")
    var customer = {
        id: props.route.params.id, name, email, phone, address,city
    };

    console.log(customer);
    //customer.id = Date.now() + "S";
    updateCustomer(customer);
    console.log("cust",customer)
    setcnt(cnt+1)
   props.navigation.navigate('profile');
}


  bs = React.createRef();
  fall = new Animated.Value(1);

  return (
    <View style={styles.container}>
      
      <Animated.View style={{margin: 20,
        opacity: Animated.add(0.1, Animated.multiply(this.fall, 1.0)),
    }}>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={() => this.bs.current.snapTo(0)}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ImageBackground
                source={{
                  uri: image,
                }}
                style={{height: 100, width: 100}}
                imageStyle={{borderRadius: 15}}>
              
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
            {name}
          </Text>
        </View>

        <View style={styles.action}>
        <FontAwesome name="user-o" color={colors.text} size={20} />
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={onChangeName}
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
            ]}
          />
        </View>

        <View style={styles.action}>
        <Feather name="phone" color={colors.text} size={20} />
          <TextInput
            placeholder="Phone"
            value={phone}
            onChangeText={onChangePhone}
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            autoCorrect={false}
            style={[
              styles.textInput,
            ]}
          />
        </View>
        <View style={styles.action}>
        <FontAwesome name="envelope-o" color={colors.text} size={20} />
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={onChangeEmail}
            placeholderTextColor="#666666"
            keyboardType="email-address"
            autoCorrect={false}
            style={[
              styles.textInput,
            ]}
          />
        </View>
        <View style={styles.action}>
        <FontAwesome name="globe" color={colors.text} size={20} />
          <TextInput
            placeholder="Address"
            value={address}
            onChangeText={onChangeAddress}
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
            ]}
          />
        </View>
        <View style={styles.action}>
        <Icon name="map-marker-outline" color={colors.text} size={20} />
          <TextInput
            placeholder="City"
            value={city}
            onChangeText={onChangeCity}
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
            ]}
          />
        </View>
        <TouchableOpacity style={styles.commandButton} onPress={() => editCustomer(props.id)}>
          <Text style={styles.panelButtonTitle}>Submit</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
});