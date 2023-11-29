import React, { useEffect } from "react";
import {  View,  TextInput,  TouchableOpacity,  Text,  Image,  Button,} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styles from "./LoginStyle";
import { useNavigation } from "@react-navigation/native";
import { loginUser, onGoogleButtonPress  } from "./LoginCode";
import { Formik } from "formik";
import * as Yup from "yup";
import { loginSchema } from "../../src/validation/validationSchemas";
import {GoogleSigninButton} from "@react-native-google-signin/google-signin"


const LoginStructure = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLogin = (values) => {
    const { email, password } = values;
    dispatch(loginUser(email, password, navigation, dispatch));
  };
  const handleGoogleSignin = () => {
    onGoogleButtonPress(navigation, dispatch);
  };

  const navigateToRegistration = () => {
    navigation.navigate("Registration");
  };

  const handleForgotPassword = () => {
    // Trigger navigation to the Password Reset Stack
    navigation.navigate("PasswordResetStack");
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginSchema}
      onSubmit={handleLogin}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View style={styles.container}>
          <Image
            source={require("../../assets/MoneyPal-logo.png")}
            style={styles.logo}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
          />
          <View style={styles.errorContainer}>
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}
          </View>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
          />
          <View style={styles.errorContainer}>
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
          </View>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <GoogleSigninButton
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={() => handleGoogleSignin()}
          />

          <TouchableOpacity
            style={styles.registerLink}
            onPress={handleForgotPassword} // Trigger handleForgotPassword function
          >
            <Text style={styles.registerLink}>Forgot password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={navigateToRegistration}
            style={styles.registerLink}
          >
            <Text style={styles.registerLink}>
              Not registered yet? Register here
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

export default LoginStructure;
