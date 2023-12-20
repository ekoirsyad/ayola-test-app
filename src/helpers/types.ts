import {NativeStackScreenProps} from '@react-navigation/native-stack';

type TAuth = {
  email: string;
  password: string;
};

export type TRootStack = {
  Register: undefined;
  OTP: TAuth;
};

export type TRegister = NativeStackScreenProps<TRootStack, 'Register'>;
export type TOTP = NativeStackScreenProps<TRootStack, 'OTP'>;
