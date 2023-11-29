import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView } from 'react-native';
import { Formik } from 'formik';
import { passwordResetSchema } from '../../src/validation/validationSchemas';

const PasswordResetScreen = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordReset = () => {
    if (newPassword === confirmPassword) {
      // Update the user's password
      const user = auth().currentUser;

      user
        .updatePassword(newPassword)
        .then(() => {
          console.log('Password updated successfully');
          // You can navigate the user to the login screen or another appropriate page.
        })
        .catch((error) => {
          console.error('Password update failed:', error);
        });
    } else {
      console.log('New password and confirmation password do not match');
      // You can show an error message to the user.
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{ newPassword: '', confirmPassword: '' }}
        validationSchema={passwordResetSchema}
        onSubmit={handlePasswordReset}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="New Password"
              secureTextEntry={true}
              onChangeText={handleChange('newPassword')}
              onBlur={handleBlur('newPassword')}
              value={values.newPassword}
            />
            {touched.newPassword && errors.newPassword && (
              <Text style={styles.errorText}>{errors.newPassword}</Text>
            )}

            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry={true}
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <Text style={styles.errorText}>{errors.confirmPassword}</Text>
            )}

            <Button title="Reset Password" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '80%',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
  },
});

export default PasswordResetScreen;