import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GolfDarkGreen, GolfGrassGreen, GolfGrey} from '../styles/Colors';
import {FontStyles} from '../styles/FontStyles';

interface TournamentSubheadingProps {
  location: string;
  when: string;
  firstPlayed: string;
  organizedBy: string;
  fieldSize: string;
}

const TournamentSubheading: React.FC<TournamentSubheadingProps> = ({
  location,
  when,
  firstPlayed,
  organizedBy,
  fieldSize,
}) => (
  <View style={styles.container}>
    <View style={styles.textContainer}>
      <Text style={styles.heading}>Where </Text>
      <Text style={styles.description}>{location}</Text>
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.heading}>When </Text>
      <Text style={styles.description}>{when}</Text>
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.heading}>First Played </Text>
      <Text style={styles.description}>{firstPlayed}</Text>
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.heading}>Organized By </Text>
      <Text style={styles.description}>{organizedBy}</Text>
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.heading}>Field Size </Text>
      <Text style={styles.description}>{fieldSize}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: GolfGrassGreen,
    borderRadius: 10,
    padding: 10,
    marginVertical: 20,
    backgroundColor: GolfGrey,
  },
  textContainer: {
    flexDirection: 'column',
    marginBottom: 10,
  },
  heading: {
    ...FontStyles.bold,
    fontSize: 18,
    color: GolfGrassGreen,
  },
  description: {
    ...FontStyles.regular,
    fontSize: 16,
    color: GolfDarkGreen,
  },
});

export default TournamentSubheading;
