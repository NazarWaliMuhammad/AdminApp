import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/login';
import Home from './src/screens/home';
import Places from './src/screens/places';
import Details from './src/screens/details';
import Manage from './src/screens/manage';
import Add from './src/screens/add';
const Stack = createNativeStackNavigator();
export default function App() {
  return(
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown : false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Places" component={Places} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Manage"  component={Manage} />
      <Stack.Screen name="Add" component={Add}/>
    </Stack.Navigator>
  </NavigationContainer>

  )
}