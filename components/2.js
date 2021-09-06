import React, { useState , useEffect} from "react";
import { Image,FlatList,
  SafeAreaView, StatusBar, Button,
   StyleSheet, Text, TouchableOpacity, 
   TouchableHighlight,Alert,
   View } from "react-native";
   import { Searchbar } from 'react-native-paper';
   import Icon3 from 'react-native-vector-icons/FontAwesome5';

import {getLocationById, getLocations,getLocationByPlace} from '../service/localdata';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/AntDesign'
//import { Searchbar } from 'react-native-paper';



const Item = ({ item, onAddCart,onMore, onPress,onDelete, onEdit,style }) => (
    <SafeAreaView style={styles.container1}>
        <View style={styles.head1}>
           
        </View>
        <View style={styles.box}>
            <Image style={styles.img2} source={{uri: 'https:'+item.cover}}/>
        </View>
        
    </SafeAreaView>

)
var arr = []
arr.push(getLocationByPlace("Aspen"));


const History =  () => {
    const [selectedId, setSelectedId] = useState(null);
    const [count, doRender] = useState(0);
    const [customers, setCustomers] = useState([]);
    const [searchQuery, setSearchQuery] = React.useState('');

    
    const onChangeSearch = query => {
        setSearchQuery(query);
    }
    
    const renderItem = ({ item }) => {
      return (
        <Item
          item={item}
          onPress={() => setSelectedId(item.id)}
        />
      );
    };
    var what = getLocationByPlace(searchQuery);
var data = ['','','','','',''];
    return (
        
        <View style={styles.maincontainer}>
            {/*}   <View style={styles.maincontainer2}>
                        <Icon3 name={"bars"} />
                    </View> */}
            <View style={styles.maincontainer1}>
            <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      //onIconPress={dosearch()}
    />
    </View>


            <FlatList
                data={data = getLocationByPlace(searchQuery)}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
            />
         
        </View>
    );
  };
export default History;

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        backgroundColor:"#ffffff",
        flexDirection:"column",
       
    },
    maincontainer1: {
     
        backgroundColor:"#ffffff",
        marginRight:0,
       
    },
    maincontainer2: {
     alignSelf:"flex-end",
        backgroundColor:"#ffffff",
        marginTop:15,

        
       
    },
    
    a: {
        flex: 1,
        flexDirection:"column",
        backgroundColor:"#ffffff"
    },
    container1:{
        flex:1,
        backgroundColor:"#ffffff",
        padding:10
    },
    head1:{
        flexDirection:"row",
    },
    img1:{
        color:'#b22222'
    },
    text1:{
        color:'#b22222',
        fontSize:24,
        marginLeft:20,
        marginTop:10
    },
    box:{
        flex:3,
        borderColor:"#deb887"

    },
    img2:{
        margin:10,
        height:270,
        width:370
    },
    description:{
        fontSize:20,
        margin:15
    },
    price:{
        marginLeft:15,
        fontSize:19
    },
    total:{
        marginLeft:15,
        fontSize:19
    },
    date:{
        marginLeft:15,
        fontSize:18,
        marginTop:13
    },
    img3:{
        marginLeft:40,
        marginTop:5
    },
    place:{
        fontSize:19,
        marginTop:7,
        marginLeft:10
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor:"#b22222",
        marginBottom:10,
        marginTop:70

    },
    buttonContainer1:{
        height: 55,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 180,
        borderRadius: 40,
        backgroundColor:'#a52a2a'
    },
    button1:{
        width:180,
        height:60,
        marginLeft:120,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img4:{
        color:"#ffffff",
        marginLeft:20
        
    },
    loginText:{
        fontWeight:'bold',
        fontSize:17,
        color:'#ffffff',
        marginTop:5,
        marginLeft:15
    }


    
})