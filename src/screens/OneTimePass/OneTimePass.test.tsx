import React from 'react';
import {render} from '@testing-library/react-native';
import OTPScreen from './OneTimePass';

describe('OneTimePassScreen', () => {
  it('should render correctly', () => {
    render(<OTPScreen />);
  });

  it.todo('Can assume the correct OTP is 111111.');

  it.todo('Countdown 30 seconds before they can click the “resend” button.');

  it.todo('The resend button will refresh the timer.');

  it.todo(
    'The focus should automatically move to the right while the user inputs the number, and moves to the left when the user uses backspace.',
  );
});
