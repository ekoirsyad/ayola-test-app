import React from 'react';
import {render} from '@testing-library/react-native';
import OTPScreen from './OneTimePass';

describe('OneTimePassScreen', () => {
  it('should render correctly', () => {
    render(<OTPScreen />);
  });
});
