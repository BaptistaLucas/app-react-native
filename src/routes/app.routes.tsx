import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Detalhes from "../screens/Detalhes";
import Perfil from "../screens/Perfil";

const Stack = createNativeStackNavigator();

function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detalhes" component={Detalhes} />
      <Stack.Screen name="Perfil" component={Perfil} />
    </Stack.Navigator>
  );
}

export default AppRoutes;