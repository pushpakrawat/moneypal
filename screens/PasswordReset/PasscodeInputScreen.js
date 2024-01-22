import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const PasscodeInputScreen = () => {
  const [passcode, setPasscode] = useState("");
  const navigation = useNavigation();

  const handleContinue = () => {
    // Add logic to validate the passcode and navigate to the next screen if it's correct
    // You can implement your own logic to check if the entered passcode is valid

    // For now, let's just navigate to the next screen
    navigation.navigate("PasswordReset");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter the 4-digit passcode</Text>
      <TextInput
        style={styles.input}
        placeholder="Passcode"
        onChangeText={(text) => setPasscode(text)}
        value={passcode}
        keyboardType="numeric"
        maxLength={4}
      />
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});

export default PasscodeInputScreen;
