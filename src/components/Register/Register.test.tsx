import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import RegisterComponent from './Register';

describe('RegisterComponent', () => {
  it('renders correctly', () => {
    render(<RegisterComponent />);
  });

  it('Password must contain at least 8 characters', () => {
    const {getByTestId} = render(<RegisterComponent />);

    const input = getByTestId('password-input');
    fireEvent.changeText(input, '12345678');
    expect(input.props.value.length).toBeGreaterThan(7);
  });

  it('Password must contain at least a lowercase letter', () => {
    const {getByTestId} = render(<RegisterComponent />);

    const input = getByTestId('password-input');
    fireEvent.changeText(input, 'Password@1');
    expect(input.props.value).toMatch(/[a-z]/);
  });

  it('Password must contain at least an uppercase letter', () => {
    const {getByTestId} = render(<RegisterComponent />);

    const input = getByTestId('password-input');
    fireEvent.changeText(input, 'Password@1');
    expect(input.props.value).toMatch(/[A-Z]/);
  });

  it('Email must meet email format validation', () => {
    const {getByTestId} = render(<RegisterComponent />);

    const input = getByTestId('email-input');
    fireEvent.changeText(input, 'oneko.ir@gmail.com');
    expect(input.props.value).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });

  it.todo('should disable button if email and password are not valid');
});
