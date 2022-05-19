import React from "react";
import Login from "../screens/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function AuthRoutes(){
  return (
    <Stack.Navigator
       screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />

    </Stack.Navigator>

  )


}

export default AuthRoutes;