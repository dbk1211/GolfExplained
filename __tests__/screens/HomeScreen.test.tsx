import React from 'react';
import {render} from '@testing-library/react-native';
import HomeScreen from '../../screens/HomeScreen';

describe('HomeScreen', () => {
  // it('renders the Home Screen text', () => {
  //   const {getByText} = render(<HomeScreen />);
  //   expect(getByText('Home Screen')).toBeTruthy();
  // });
  it('renders the Home Screen text', () => {
    const {getByTestId} = render(<HomeScreen />);
    expect(getByTestId('Home-Screen-Text')).toBeTruthy();
  });
});
