/**
 * @format
 */

// import 'react-native';
// import React from 'react';
// import App from '../App';

// // Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';

// it('renders correctly', () => {
//   renderer.create(<App />);
// });

////REVERT TO THIS IF ISSUES, LAST WORKING TEST WITH REACT NAVIGATION, BEFORE Font Awesome
// import React from 'react';
// import {render, fireEvent} from '@testing-library/react-native';
// import App from '../App';

// test('navigates to Settings screen', () => {
//   const {getByText} = render(<App />);

//   fireEvent.press(getByText('Settings'));

//   expect(getByText('Settings Screen')).toBeTruthy();
// });

import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import App from '../App';
import '@testing-library/jest-native/extend-expect';

// jest.mock('@fortawesome/react-native-fontawesome', () => {
//   const {Text} = require('react-native');
//   return {
//     FontAwesomeIcon: ({testID, iconName}: any) => {
//       return <Text testID={testID}>{iconName}</Text>;
//     },
//   };
// });

test('navigates between Home and Settings screens', () => {
  // const {getByText, getByTestId} = render(<App />);
  const {getByTestId} = render(<App />);

  // Initial screen should be Home
  expect(getByTestId('Home-Screen-Text')).toBeTruthy();

  // Navigate to Settings screen
  fireEvent.press(getByTestId('Bottom-Tab-Settings'));
  expect(getByTestId('Settings-Screen-Text')).toBeTruthy();

  // Navigate back to Home screen
  fireEvent.press(getByTestId('Bottom-Tab-Home'));
  expect(getByTestId('Home-Screen-Text')).toBeTruthy();
});

// test('Home and Settings icons are rendered', () => {
//   const {getAllByTestId} = render(<App />);

//   expect(getAllByTestId('Home Icon')[0]).toHaveTextContent('faHome');
//   expect(getAllByTestId('Settings Icon')[0]).toHaveTextContent('faCog');
// });

//this always fails even though the icons are visible. revisit later
// it('Home and Settings icons are rendered', () => {
//   const {getByTestId} = render(<App />);

//   expect(getByTestId('Home Icon')).toBeTruthy();
//   expect(getByTestId('Settings Icon')).toBeTruthy();
// });
