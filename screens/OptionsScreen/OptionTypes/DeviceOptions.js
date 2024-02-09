import React, { useState } from "react";
import { View, Text, TouchableOpacity, Switch, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { setUserId } from "../../../redux/actions/userActions";
import { setExpenseDocId } from "../../../redux/actions/expenseActions";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from 'react-redux';
import { FIREBASE_AUTH } from "../../../firebase/firebaseconfig";

export const signOut = async () => {
  try {
    await FIREBASE_AUTH.signOut();
  } catch (error) {
    throw error;
  }
};

const DeviceOptions = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true); 
  const mode = useSelector((state) => state.app.themeColors);

  const handleSignOut = async () => {
    try {
      await signOut();
      dispatch(setUserId(null));
      dispatch(setExpenseDocId(null));
      navigation.navigate("AuthStackNavigator");
    } catch (error) {
      console.error("Sign out failed:", error);
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: mode.background, // Set the background color to mode.background
      alignItems: "center",
    },
    header: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 20,
      color: mode.text, // Set the text color to mode.text
    },
    button: {
      flex: 1,
      justifyContent: "flex-end",
      padding: 10,
      borderRadius: 5,
      bottom: 10,
      // backgroundColor: mode.primary, // Set the background color to mode.primary
    },
    buttonText: {
      color: mode.text, // Set the text color to mode.text
      fontSize: 15,
      fontWeight: "400",
    },
    switchContainer: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
    },
    switchLabel: {
      fontSize: 16,
      marginRight: 100,
      color: mode.text, // Set the text color to mode.text
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Allow Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={(value) => setNotificationsEnabled(value)}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Sign out from this device</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DeviceOptions;
