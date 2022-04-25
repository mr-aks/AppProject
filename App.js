
import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import Ionic from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, Signup } from '.';



const Stack = createStackNavigator();

const App: ()  => {
  

  return (
    
    <NavigationContainer>
      
      <Stack.Navigator screenOptions={{header: () => null}}>
        <Stack.Screen name="Signin" component={Login} />
        <Stack.Screen name="SignUp" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
};




export default App;
