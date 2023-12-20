import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import RegisterScreen from './Register';

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn(),
  },
  route: {
    params: {
      isLoggedIn: false,
    },
  },
  ...props,
});

describe('RegisterScreen', () => {
  let props: any, wrapper: any;
  beforeEach(() => {
    props = createTestProps({});
    wrapper = render(<RegisterScreen {...props} />);
  });
  it('renders correctly', () => {
    wrapper;
  });

  it('Password must contain at least 8 characters', () => {
    const {getByTestId} = wrapper;

    const input = getByTestId('password-input');
    fireEvent.changeText(input, '12345678');
    expect(input.props.value.length).toBeGreaterThan(7);
  });

  it('Password must contain at least a lowercase letter', () => {
    const {getByTestId} = wrapper;

    const input = getByTestId('password-input');
    fireEvent.changeText(input, 'Password@1');
    expect(input.props.value).toMatch(/[a-z]/);
  });

  it('Password must contain at least an uppercase letter', () => {
    const {getByTestId} = wrapper;

    const input = getByTestId('password-input');
    fireEvent.changeText(input, 'Password@1');
    expect(input.props.value).toMatch(/[A-Z]/);
  });

  it('Email must meet email format validation', () => {
    const {getByTestId} = wrapper;

    const input = getByTestId('email-input');
    fireEvent.changeText(input, 'oneko.ir@gmail.com');
    expect(input.props.value).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });

  it('should disable button if email and password are not valid', () => {
    const {getByTestId} = wrapper;

    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');
    const button = getByTestId('register-button');
    fireEvent.changeText(emailInput, 'oneko.irgmail.com');
    fireEvent.changeText(passwordInput, 'Password');
    expect(button.props.accessibilityValue.disabled).toBeFalsy();
  });
});
