import {NativeStackScreenProps} from '@react-navigation/native-stack';

type TAuth = {
  email: string;
  password: string;
};

export type TRootStack = {
  Register: {isLoggedIn?: boolean};
  OTP: TAuth;
  Home: undefined;
};

export type TRegister = NativeStackScreenProps<TRootStack, 'Register'>;
export type TOTP = NativeStackScreenProps<TRootStack, 'OTP'>;
export type THome = NativeStackScreenProps<TRootStack, 'Home'>;
