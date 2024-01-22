import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getAuth, fetchSignInMethodsForEmail, sendPasswordResetEmail } from 'firebase/auth';
import { FIREBASE_AUTH, FIRESTORE } from '../../firebase/firebaseconfig';  // Import your Firebase configurations

const EmailInputScreen = () => {
  const [email, setEmail] = useState("");
  const navigation = useNavigation();

  const handleContinue = () => {
    sendPasswordResetEmail(FIREBASE_AUTH, email)
    .then(()=>{
      alert('Password reset email has been sent successfully')
    })
    .catch((error)=>{
      console.log(error);
    } )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your registered email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
      />
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

// Your styles remain unchanged
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

export default EmailInputScreen;
