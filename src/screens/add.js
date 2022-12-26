import React from 'react';
import { StyleSheet, Text, View ,  TextInput, TouchableOpacity, FlatList} from 'react-native'
import { useFonts } from 'expo-font';
import { AntDesign,Ionicons,Octicons ,MaterialCommunityIcons  ,Entypo  } from '@expo/vector-icons';
export default function Add(props) {

 const data=[{
    name : 'Hawaly',
     last: '3 days'  ,
     icon : <MaterialCommunityIcons style={{marginStart :10}} name="map-marker-radius" size={42} color="black" />, 

    },{
    name :"Add",
    last: '4 days'  ,
    icon : <MaterialCommunityIcons style={{marginStart : 10}} name="map-marker-radius-outline" size={42} color="black" />,   
 
  }]
  const [fontsLoaded] =useFonts({
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
          <Text style={{fontSize : 20, paddingStart : 5, fontFamily: "Regular"}} >Add Place</Text>
        </View>
        <View style={{width: "100%", borderBottomWidth : 1, marginTop : 15, borderBottomColor : "#D3D3D3"}}/>
        <View style={{width: "95%", backgroundColor : "seagreen", height :25, alignSelf: "center", marginTop : 10, borderRadius :15}}/>
        <View style={{flexDirection : "row", justifyContent: "flex-end", paddingEnd : 6}} >
        <Text style={{fontSize : 25, fontFamily: "Bold"}} >0%</Text>
        </View>
        <View  >
         <TouchableOpacity  style={{alignSelf: "center",flexDirection :"row", alignItems :"center", justifyContent: "center",
         width : "95%", height : 80, backgroundColor : "seagreen", marginTop : 15}} >
         <Text style={{fontSize : 24, fontFamily: "Regular", marginStart : 5 , }} >Manually </Text>
         </TouchableOpacity>
         <TouchableOpacity  style={{alignSelf: "center",flexDirection :"row", alignItems :"center", justifyContent: "center",
         width : "95%", height : 80, backgroundColor : "seagreen", marginTop : 15}} >
         <Text style={{fontSize : 24, fontFamily: "Regular", marginStart : 5 }} >Export CSV</Text>
         </TouchableOpacity>
         <TouchableOpacity  style={{alignSelf: "center",flexDirection :"row", alignItems :"center", justifyContent: "center",
         width : "95%", height : 80, backgroundColor : "seagreen", marginTop : 15}} >
         <Text style={{fontSize : 24, fontFamily: "Regular", marginStart : 5 }} >Use Current Location</Text>
         </TouchableOpacity>
         </View>
         <View style={{flex : 1, flexDirection :"row" , justifyContent : "flex-end", alignItems :"flex-end"}} >
           <TouchableOpacity style={{marginRight: 30, marginBottom: 20,
             width: '20%', height: 50 , backgroundColor :"skyblue", borderRadius: 10,justifyContent: "center", alignItems :"center"}} >
            <Text style={{fontSize : 18, fontFamily: "Regular"}} >Next</Text>
           </TouchableOpacity>
         </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    }
  });