import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OTPScreen from './screens/OneTimePass/OneTimePass';
import RegisterScreen from './screens/Register/Register';
import {TRootStack} from './helpers/types';

const Stack = createNativeStackNavigator<TRootStack>();

export default function Nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="OTP" component={OTPScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
