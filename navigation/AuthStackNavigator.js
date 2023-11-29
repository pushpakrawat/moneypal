import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginStructure from "../screens/LoginScreen/LoginStructure";
import RegistrationStructure from "../screens/RegistrationScreen/RegistrationStructure";
import PasswordResetStack from './PasswordResetStack'

const Stack = createStackNavigator();

const AuthStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Login"
      component={LoginStructure}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Registration"
      component={RegistrationStructure}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="PasswordResetStack"
      component={PasswordResetStack} 
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AuthStackNavigator;
