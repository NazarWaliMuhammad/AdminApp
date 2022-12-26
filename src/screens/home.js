import React from 'react';
import { StyleSheet, Text, View , Image, TextInput, TouchableOpacity} from 'react-native';
import { AntDesign ,Ionicons, Entypo} from '@expo/vector-icons';
import { useFonts } from "expo-font"


export default function Home(props) {
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
        <View style={styles.container} >
         <View style={{paddingTop :80, paddingStart : 10}} >
            <Text style={{fontSize: 28, fontFamily: "Regular"}} >Salam,</Text>
            <Text style={{fontSize : 20, fontFamily: "Medium"}} >Welcome Admin</Text>
         </View>
         <View>
         <TouchableOpacity onPress={()=>{props.navigation.navigate("Places")}} style={{alignSelf: "center",flexDirection :"row", alignItems :"center", 
         width : "95%", height : 80, backgroundColor : "seagreen", marginTop : 15}} >
         <AntDesign  style={{paddingStart :10}} name="home" size={45} color="black" />
         <Text style={{fontSize : 24, fontFamily: "Regular", marginStart : 5 }} >View Places</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={()=>{props.navigation.navigate("Manage")}} style={{alignSelf: "center",flexDirection :"row", alignItems :"center", 
         width : "95%", height : 80, backgroundColor : "seagreen", marginTop : 15}} >
         <Ionicons style={{paddingStart : 10}} name="ios-settings-outline" size={45} color="black" />
         <Text style={{fontSize : 24,  fontFamily: "Regular", marginStart : 5 }} >Manage Places</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={()=>{props.navigation.navigate("Add")}} style={{alignSelf: "center",flexDirection :"row", alignItems :"center", 
         width : "95%", height : 80, backgroundColor : "seagreen", marginTop : 15}} >
         <Entypo style={{paddingStart : 10}} name="plus" size={45} color="black" />
         <Text style={{fontSize : 24, fontFamily: "Regular", marginStart : 5 }} >Add Places</Text>
         </TouchableOpacity>
         </View>
         <View style={{flex : 1, justifyContent :"flex-end"}} >
         <TouchableOpacity onPress={()=>{props.navigation.navigate("Login")}} style={{alignSelf: "center", justifyContent: "center", alignItems :"center",
         width : "95%", height : 60, backgroundColor : "red",marginBottom : 5}} >
            <Text style={{fontSize: 20, fontFamily: "Regular"}} >Log Out</Text>
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