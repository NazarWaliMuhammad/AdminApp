import React from 'react';
import { StyleSheet, Text, View ,  TextInput, TouchableOpacity, FlatList} from 'react-native'
import { AntDesign,Ionicons,Octicons ,MaterialCommunityIcons  ,Entypo  } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
export default function Details(params,) {
  const data =[{
    date : params.route.params.update2,
    time : params.route.params.time2
  },{
    date : params.route.params.update3,
    time : params.route.params.time3
  },{
    date : params.route.params.update4,
    time : params.route.params.time4
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
    return(
        <View style={styles.container } >
    <View style={{flexDirection :"row" ,alignItems :"center", paddingTop :45, paddingStart : 8,}} >
          <TouchableOpacity onPress={()=>{params.navigation.navigate("Places")}} >
          <AntDesign name="arrowleft" size={28} color="black" />
          </TouchableOpacity>
          <Text style={{fontSize : 20, paddingStart : 5, fontFamily: "Regular"}} >{params.route.params.name}</Text>
        </View>
        <View style={{width: "100%", borderBottomWidth : 1, marginTop : 15, borderBottomColor : "#D3D3D3"}}/>
         <View style={{paddingStart :15}} >
          <Text style={{fontSize :28 , fontFamily: "Regular"}} >{params.route.params.name},</Text>
          <Text style={{fontSize: 20,fontFamily: "Regular2"}}>Added On {params.route.params.added}</Text>
          <Text style={{fontSize: 20,fontFamily: "Regular2"}} >Town : {params.route.params.town}</Text>
          <Text style={{fontSize: 20,fontFamily: "Regular2"}} >Country : {params.route.params.country}</Text>
         </View>
         <View style={{width: "100%", borderBottomWidth : 1, marginTop : 15, borderBottomColor : "#D3D3D3"}}/>
         <View style={{flexDirection : "row",
          alignItems : "center", paddingStart : 10, borderBottomWidth : 1, 
         borderBottomColor : "#d3d3d3", height :65, backgroundColor : "seagreen"}} >
         <MaterialCommunityIcons name="dots-triangle" size={25} color="black" />
          <Text style={{fontSize : 22, fontFamily: "Regular"}} >Travel Activity</Text>
         </View>
         <View >
          <View style={{width: "90%", height : 80, backgroundColor : "seagreen", marginTop : 8,justifyContent : "center",
          alignSelf : "center", borderRadius : 10, shadowColor : "black" ,elevation: 6}} >
            <Text style={{marginStart :5, fontSize : 18, fontFamily: "Regular"}} >Last Visit</Text>
            <Text style={{fontSize : 18, marginStart :5 ,fontFamily: "Medium"}} >{params.route.params.update}</Text>
          </View>
         </View>
         <View style={{width: "100%", borderBottomWidth : 1, marginTop : 15, borderBottomColor : "#D3D3D3"}}/>
          <FlatList data={data} renderItem={({item}) =>{
            return(
              <View>
                <View style={{flexDirection : 'row', justifyContent: "space-between",
                 alignItems : "center", height: 60}} >
                <View style={{flexDirection: "row"}} >
                <Octicons style={{marginStart :10}} name="dot-fill" size={24} color="black" />
                <View style={{marginStart : 10}} >
                 <Text style={{fontSize : 18 , fontFamily: "Regular"}} >{item.date}</Text>
                 <Text style={{fontSize : 16, color: "gray" ,fontFamily: 'Medium'}} >{item.time}</Text>
                </View>
                </View>
                <Entypo name="dots-three-vertical" size={24} color="black" />
                </View>
                <View style={{width: "100%", borderBottomWidth : 1, marginTop : 15, borderBottomColor : "#D3D3D3"}}/>
              </View>
            )
          }} />
                   <View style={{flex : 1, justifyContent :"flex-end"}} >
         <TouchableOpacity style={{alignSelf: "center", justifyContent: "center", alignItems :"center",
         width : "95%", height : 60, backgroundColor : "seagreen",marginBottom : 15}} >
            <Text style={{fontSize: 20, fontFamily: "Regular"}} >Add Visit</Text>
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