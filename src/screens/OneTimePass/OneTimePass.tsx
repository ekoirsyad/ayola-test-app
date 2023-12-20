import React, {useEffect, useRef, useState} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {palette} from '../../styles/palette';
import {TOTP} from '../../helpers/types';

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.background,
    flex: 1,
    padding: 22,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '900',
    color: palette.primary,
  },
  desc: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400',
    color: palette.text,
  },
  timer: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
    color: palette.text,
  },
  resend: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    color: palette.primary,
  },
  otpContainer: {
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    color: palette.text,
    borderColor: palette.primary,
    borderWidth: 0.5,
    borderRadius: 8,
    padding: 20,
    marginTop: 20,
    width: 330,
    position: 'absolute',
    opacity: 0,
  },
  otpBoxesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '90%',
  },
  boxes: {
    borderColor: palette.text,
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    minWidth: 50,
  },
  boxesFocused: {
    borderColor: palette.primary,
    backgroundColor: palette.tertiary,
  },
  boxesText: {
    fontSize: 20,
    textAlign: 'center',
    color: palette.text,
  },
});

const OTPScreen: React.FC<TOTP> = ({}: TOTP) => {
  const inputRef = useRef<TextInput>(null);
  const [otp, setOtp] = useState('');
  const boxArray = new Array(6).fill(0);

  const [isPinReady, setIsPinReady] = useState(false);
  const [resendTimer, setResendTimer] = useState(30);

  const handleOnPress = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    setIsPinReady(otp.length === 6);

    const interval = setInterval(() => {
      setResendTimer(prevTimer => prevTimer - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
      setIsPinReady(false);
    };
  }, [otp]);

  useEffect(() => {
    if (resendTimer !== 0 && isPinReady && otp === '111111') {
      console.log(isPinReady);
    }
  }, [isPinReady, resendTimer, otp]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter authentication code</Text>
      <Text style={styles.desc}>
        Enter the 6-digit number that we have sent to your email
      </Text>
      <View style={styles.otpContainer}>
        <Pressable onPress={handleOnPress} style={styles.otpBoxesContainer}>
          {boxArray.map((_, index) => {
            const empty = '';
            const digit = otp[index] || empty;
            const currentBox = index === otp.length;
            const lastBox = index === 5;
            const completed = otp.length === 6;

            const isFocused = currentBox || (lastBox && completed);

            return (
              <View
                key={index}
                style={
                  isFocused ? [styles.boxes, styles.boxesFocused] : styles.boxes
                }>
                <Text style={styles.boxesText}>{digit}</Text>
              </View>
            );
          })}
        </Pressable>
        <TextInput
          testID="otp-input"
          ref={inputRef}
          autoFocus={true}
          maxLength={6}
          value={otp}
          onChangeText={setOtp}
          keyboardType="numeric"
          style={styles.inputContainer}
        />
      </View>
      <View>
        <Text style={styles.timer}>Didn’t receive the code?</Text>
        {resendTimer > 0 ? (
          <Text testID="resend-timer" style={styles.timer}>
            Resend code in {resendTimer}s
          </Text>
        ) : (
          <TouchableOpacity
            testID="resend-button"
            onPress={() => {
              setResendTimer(30);
              setOtp('');
            }}>
            <Text style={styles.resend}>Resend code</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default OTPScreen;
