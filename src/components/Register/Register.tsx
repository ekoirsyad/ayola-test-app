import React from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';
import useRegisterForm from './useRegisterForm';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 22,
  },
  inputContainer: {
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

const RegisterComponent: React.FC = () => {
  const {formData, isButtonDisabled, handleEmailChange, handlePasswordChange} =
    useRegisterForm();

  return (
    <View style={styles.container}>
      <Text>Register</Text>
      <TextInput
        testID="email-input"
        style={styles.inputContainer}
        placeholder="email"
        value={formData.email}
        onChangeText={handleEmailChange}
      />
      <TextInput
        testID="password-input"
        style={styles.inputContainer}
        placeholder="password"
        value={formData.password}
        onChangeText={handlePasswordChange}
      />
      <Button
        testID="register-button"
        disabled={isButtonDisabled}
        title="Register"
      />
    </View>
  );
};

export default RegisterComponent;
