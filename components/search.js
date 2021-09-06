import * as React from 'react';
import { View ,StyleSheet} from 'react-native';
import { Searchbar } from 'react-native-paper';
import {getLocationById, getLocations} from '../service/localdata'
const MyComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [list1, setlist1] = React.useState([]);
  
  const onChangeSearch = query => setSearchQuery(query);
  const data = getLocations()

  let dosearch = () => {
      console.log("pressed")
     setlist1([])
     var lst=[];
      for (let i=0;i<data.length;i++)
    {   console.log("name",searchQuery)
        console.log("plc",data[i].place)
      if(data[i].place==searchQuery)
      { lst.push(data[i].cover)
          console.log("place",data[i].cover)
      }
    }
    setlist1(lst);


  }





  return (
      <View>
      <View>
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      onIconPress={dosearch()}
    />
     </View>
      <View>
      {
        list1.map((item) => (
            <View style={styles.box}>
            <Image style={styles.img} source={{uri: 'https:'+item}}/>
        </View>
        ))
      }
    </View>  
    </View>

  );

};

export default MyComponent;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0e6e6',
      
    },

box:{
    flex:2,
    borderColor:"#deb887"

}
})