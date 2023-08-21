import React from 'react';
import {Text} from 'react-native';

export const FontAwesomeIcon = ({icon, size, color, testID}: any) => (
  <Text testID={testID}>{icon.iconName}</Text>
);
