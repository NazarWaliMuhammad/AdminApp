import React from 'react';
import { StyleSheet, Text, View , Image, TextInput, TouchableOpacity} from 'react-native';
import { useFonts } from "expo-font"

export default function Login(props) {

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
      <View style={{justifyContent : "center" , paddingVertical : 80 }} >
       <Image style={{width : 170, height : 170 , alignSelf: "center", borderRadius : 15}}
       source={{uri : 'https://is2-ssl.mzstatic.com/image/thumb/Purple122/v4/c5/43/ef/c543ef08-382d-ba4f-dc14-b92b1395f125/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/256x256bb.jpg'}} />
       </View>
      <View style={{paddingTop :30}} >
        <Text style={{paddingStart :26, fontSize : 20, fontFamily: "Regular"}} >Authenticate</Text>
        <View style={{width : "87%", borderWidth : 1,justifyContent: "center",
         height : 45, alignSelf : "center", margin : 8}} >
        <TextInput secureTextEntry={true} style={{paddingStart : 5,}}  placeholder='Password'  />
        </View>
        <TouchableOpacity onPress={()=>{props.navigation.navigate("Home")}} style={{width : '90%'
        , alignSelf : "center", backgroundColor : 'seagreen',
         height : 45, justifyContent : "center", borderRadius :20, margin :10}} >
          <Text style={{alignSelf :"center",fontFamily: "Regular"}} >Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});