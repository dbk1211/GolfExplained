import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {FontStyles} from '../styles/FontStyles';
import {GolfDarkGreen, GolfGrassGreen} from '../styles/Colors';
import ContactForm from '../components/ContactForm';

const AskUsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Ask Us</Text>
        <Text style={styles.subheading}>Have questions? Let us know!</Text>
      </View>
      <ContactForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    ...FontStyles.bold,
    fontSize: 24,
    color: GolfDarkGreen,
  },
  subheading: {
    ...FontStyles.regular,
    fontSize: 16,
    color: GolfGrassGreen,
    marginBottom: 10,
  },
});

export default AskUsScreen;
