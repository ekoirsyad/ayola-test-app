import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import OTPScreen from './OneTimePass';

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn(),
  },
  route: {
    params: {
      email: 'oneko.ir@gmail.com',
      password: 'Password1*',
    },
  },
  ...props,
});

describe('OneTimePassScreen', () => {
  let props: any, wrapper: any;
  beforeEach(() => {
    props = createTestProps({});
    wrapper = render(<OTPScreen {...props} />);
  });

  it('should render correctly', () => {
    wrapper;
  });

  it('Countdown 30 seconds before they can click the “resend” button.', () => {
    const {getByTestId} = wrapper;
    const resendTimer = getByTestId('resend-timer');
    expect(resendTimer.props.children).toContain(30);
    waitFor(
      () => {
        const resendButton = getByTestId('resend-button');
        expect(resendButton.props.children).toContain('Resend code');
      },
      {timeout: 30000},
    );
  });

  it('The resend button will refresh the timer.', () => {
    const {getByTestId} = wrapper;
    waitFor(
      () => {
        const resendButton = getByTestId('resend-button');
        expect(resendButton.props.children).toContain('Resend code');
        const resendTimer = getByTestId('resend-timer');
        expect(resendTimer.props.children).toContain(30);
      },
      {timeout: 30000},
    );
  });
});
