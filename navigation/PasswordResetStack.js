import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import EmailInputScreen from '../screens/PasswordReset/EmailInputScreen';
import PasscodeInputScreen from '../screens/PasswordReset/PasscodeInputScreen';
import PasswordResetScreen from '../screens/PasswordReset/PasswordResetScreen';

const Stack = createStackNavigator();

const PasswordResetStack = () => (
  <Stack.Navigator initialRouteName="EmailInput">
    <Stack.Screen
      name="EmailInput"
      component={EmailInputScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="PasscodeInput"
      component={PasscodeInputScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="PasswordReset"
      component={PasswordResetScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default PasswordResetStack;
