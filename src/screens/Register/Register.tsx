import React from 'react';
import {Text, View, StyleSheet, TextInput, Button, Alert} from 'react-native';
import useRegisterForm from './useRegisterForm';
import {palette} from '../../styles/palette';
import {TRegister} from '../../helpers/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    shadowColor: palette.primary,
    backgroundColor: palette.background,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
    paddingTop: 25,
    paddingBottom: 22,
    paddingHorizontal: 22,
    borderRadius: 22,
  },
  inputContainer: {
    color: palette.text,
    borderColor: palette.primary,
    borderWidth: 0.5,
    borderRadius: 8,
    // textAlign: 'right',
    fontWeight: '400',
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 20,
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

const RegisterScreen: React.FC<TRegister> = ({
  navigation,
  route,
}: TRegister) => {
  const {isLoggedIn} = route.params;
  const {formData, isButtonDisabled, handleEmailChange, handlePasswordChange} =
    useRegisterForm();

  const onRegister = async () => {
    if (isLoggedIn) {
      const getAsyncStorage = async () => {
        const email = await AsyncStorage.getItem('email');
        const password = await AsyncStorage.getItem('password');
        if (email === formData.email && password === formData.password) {
          navigation.replace('Home');
        } else {
          Alert.alert('Email or Password is incorrect');
        }
      };
      getAsyncStorage();
      return;
    }
    navigation.navigate('OTP', {
      email: formData.email,
      password: formData.password,
    });
  };

  const title = isLoggedIn ? 'Welcome back!' : 'Create your account';
  const buttonLabel = isLoggedIn ? 'Login' : 'Register';

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>AYOLA</Text>
        <Text style={styles.desc}>{title}</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          testID="email-input"
          style={styles.inputContainer}
          placeholder="E-mail"
          placeholderTextColor={palette.primary}
          value={formData.email}
          onChangeText={handleEmailChange}
          selectionColor={palette.primary}
          cursorColor={palette.primary}
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
          title={buttonLabel}
          color={palette.primary}
          onPress={onRegister}
        />
      </View>
    </View>
  );
};

export default RegisterScreen;
