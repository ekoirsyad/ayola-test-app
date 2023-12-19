import React from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';
import useRegisterForm from './useRegisterForm';
import {palette} from '../../styles/palette';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.background,
    padding: 22,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  formContainer: {
    borderWidth: 0.5,
    borderColor: palette.text,
    paddingTop: 25,
    paddingBottom: 22,
    paddingHorizontal: 22,
    borderRadius: 28,
  },
  inputContainer: {
    color: palette.text,
    borderColor: palette.text,
    borderBottomWidth: 0.5,
    textAlign: 'right',
    fontWeight: '400',
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 18,
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: '900',
    color: palette.primary,
  },
  desc: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '400',
    color: palette.text,
  },
});

const RegisterComponent: React.FC = () => {
  const {formData, isButtonDisabled, handleEmailChange, handlePasswordChange} =
    useRegisterForm();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>AYOLA</Text>
        <Text style={styles.desc}>Create your account</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          testID="email-input"
          style={styles.inputContainer}
          placeholder="E-mail"
          placeholderTextColor={palette.primary}
          value={formData.email}
          onChangeText={handleEmailChange}
        />
        <TextInput
          testID="password-input"
          style={styles.inputContainer}
          placeholder="Password"
          placeholderTextColor={palette.primary}
          value={formData.password}
          secureTextEntry={true}
          onChangeText={handlePasswordChange}
        />
        <Button
          testID="register-button"
          disabled={isButtonDisabled}
          title="Register"
          color={palette.primary}
        />
      </View>
    </View>
  );
};

export default RegisterComponent;
