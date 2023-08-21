import React from 'react';
import {View, StyleSheet} from 'react-native';
import {GolfDarkGreen} from '../styles/Colors';

const Separator: React.FC = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: GolfDarkGreen,
    width: '100%',
    marginVertical: 15,
    borderBottomWidth: 1,
  },
});

export default Separator;
