import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {palette} from '../../styles/palette';
import {THome} from '../../helpers/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.background,
    padding: 22,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: '900',
    color: palette.primary,
    marginBottom: 20,
  },
});

const HomeScreen: React.FC<THome> = ({navigation}: THome) => {
  const onLogout = async () => {
    await AsyncStorage.multiRemove(['email', 'password']);
    navigation.replace('Register', {isLoggedIn: false});
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Button color={palette.primary} onPress={onLogout} title="Logout" />
    </View>
  );
};

export default HomeScreen;
