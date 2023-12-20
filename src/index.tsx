import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OTPScreen from './screens/OneTimePass/OneTimePass';
import RegisterScreen from './screens/Register/Register';
import {TRootStack} from './helpers/types';
import HomeScreen from './screens/Home/Home';

const Stack = createNativeStackNavigator<TRootStack>();

export default function Nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          initialParams={{isLoggedIn: false}}
        />
        <Stack.Screen name="OTP" component={OTPScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
