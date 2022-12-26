import React from 'react';
import { StyleSheet, Text, View ,  TextInput, TouchableOpacity, FlatList} from 'react-native'
import { AntDesign,Ionicons,Octicons ,MaterialCommunityIcons  ,Entypo  } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
export default function Manage(props) {
 const data=[{
    name : 'Hawaly',
     last: '3 days'  ,
     icon : <MaterialCommunityIcons style={{marginStart :10}} name="map-marker-radius" size={42} color="black" />, 

    },{
    name :"Add",
    last: '4 days'  ,
    icon : <MaterialCommunityIcons style={{marginStart : 10}} name="map-marker-radius-outline" size={42} color="black" />,   
 
  }]
  const [fontsLoaded] = useFonts({
    Regular: require("../../assets/fonts/Righteous-Regular.ttf"),
    Light : require("../../assets/fonts/Rajdhani-Light.ttf"),
    Bold : require("../../assets/fonts/Rajdhani-Bold.ttf"),
    Medium : require("../../assets/fonts/Rajdhani-Medium.ttf"),
    Regular2 : require("../../assets/fonts/Rajdhani-Regular.ttf"),
    SemiBold : require("../../assets/fonts/Rajdhani-SemiBold.ttf")
  })

  if(!fontsLoaded) return 
    return (
        <View style={styles.container}>
         <View style={{flexDirection :"row" ,alignItems :"center", paddingTop :45, paddingStart : 8,}} >
          <TouchableOpacity onPress={()=>{props.navigation.navigate("Home")}} >
          <AntDesign name="arrowleft" size={28} color="black" />
          </TouchableOpacity>
          <Text style={{fontSize : 20, paddingStart : 5, fontFamily: "Regular"}} >Manage Place</Text>
        </View>
        <View style={{width: "100%", borderBottomWidth : 1, marginTop : 15, borderBottomColor : "#D3D3D3"}}/>
        <View style={{flexDirection : "row", marginTop : 8, marginStart :8,  }} >
            <View style={{flexDirection :"row",borderWidth :1, borderColor: "grey",
            width : '87%', height : 42, alignItems : "center", }} >
            <TouchableOpacity style={{padding :5}} >
            <Ionicons name="ios-search" size={26} color="black" />
            </TouchableOpacity>
            <TextInput placeholder='Search' />
            </View>
         <TouchableOpacity style={{marginStart : 8}} >
         <Octicons name="filter" size={30} color="black" />
         </TouchableOpacity>
        </View>
        <View style={{width: "100%", borderBottomWidth : 1, marginTop : 15, borderBottomColor : "#D3D3D3"}}/>
          <FlatList data={data} renderItem={({item})=>{
            return(
                <View>
                  <TouchableOpacity  >
                    <View style={{flexDirection : "row", 
                    justifyContent :"space-between",alignItems : "center", borderBottomWidth :1, height :80}} >
                      <View style={{flexDirection : "row"}} >
                     {item.icon}
                     <View style={{justifyContent : "center"}} >
                     <Text style={{fontSize : 18, fontFamily: "Regular"}} >{item.name}</Text>
                     <Text style={{fontSize : 14, color :"gray", fontFamily: "Medium"}} >Last Visit {item.last}</Text>
                     </View>
                     </View>
                     <View style={{flexDirection : "row", marginEnd :10,alignItems : "center"}} >
                     <TouchableOpacity style={{padding: 10}} >
                     <MaterialCommunityIcons name="delete-circle-outline" size={28} color="black" />
                     </TouchableOpacity>
                     <TouchableOpacity>
                     <MaterialCommunityIcons name="circle-edit-outline" size={28} color="black" />
                     </TouchableOpacity>
                     </View>
                    </View>
                    </TouchableOpacity> 
                </View>
            )
          }} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    }
  });