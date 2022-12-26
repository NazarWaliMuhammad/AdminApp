import React from 'react';
import { StyleSheet, Text, View ,  TextInput, TouchableOpacity, FlatList} from 'react-native'
import { AntDesign,Ionicons,Octicons ,MaterialCommunityIcons  ,Entypo  } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
export default function Places(props) {
 const data=[{
    name : 'Hawaly',
     last: '3 days'  ,
     icon : <MaterialCommunityIcons style={{marginStart :10}} name="map-marker-radius" size={42} color="black" />, 
     added : "3-12-22",
     town : "Habibi",
     country : 'Kuwait',
      date : "9th December 2022",
      date2 : '8th Dec',
      date3 : '9th Nov',
      date4 : "7th Oct",
      time2 : "12:00 am",
      time3 : "10:00 pm",
      time4 : "11:00 pm"
    },{
    name :"Add",
    last: '4 days'  ,
    icon : <MaterialCommunityIcons style={{marginStart : 10}} name="map-marker-radius-outline" size={42} color="black" />,   
    added : "3-12-22",
    town : "Habibi",
    country : 'Kuwait',
     date : "9th December 2022",
     date2 : '8th Dec',
     date3 : '9th Nov',
     date4 : "7th Oct",
     time2 : "12:00 am",
     time3 : "10:00 pm",
     time4 : "11:00 pm"
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
          <Text style={{fontSize : 20, paddingStart : 5, fontFamily: "Regular"}} >Your Places</Text>
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
                  <TouchableOpacity onPress={()=>{props.navigation.navigate("Details", 
                  {name : item.name, added : item.added, town : item.town, 
                  country : item.country, update : item.date,update2 : item.date2, update3 
                  :item.date3, update4 : item.date4, time2 : item.time2,time3 : item.time3,time4 : item.time4,})}} >
                    <View style={{flexDirection : "row", 
                    justifyContent :"space-between",alignItems : "center", borderBottomWidth :1, height :80}} >
                      <View style={{flexDirection : "row"}} >
                     {item.icon}
                     <View style={{justifyContent : "center"}} >
                     <Text style={{fontSize : 18, fontFamily: "Regular"}} >{item.name}</Text>
                     <Text style={{fontSize : 14, color :"gray", fontFamily: "Medium"}} >Last Visit {item.last}</Text>
                     </View>
                     </View>
                     <View style={{justifyContent :"space-between"}} >
                     <Octicons style={{alignSelf: "flex-end", marginEnd : 8}} name="dot-fill" size={24} color="black" />
                     <TouchableOpacity style={{borderWidth :1, marginEnd : 5, marginTop : 15,paddingHorizontal : 15}} >
                      <Text style={{fontFamily: 'Regular'}} >Manage</Text>
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