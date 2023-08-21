import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import HorizontalCard from '../components/HorizontalCard';
import {FontStyles} from '../styles/FontStyles';
import {GolfDarkGreen, GolfGrassGreen} from '../styles/Colors';

type QuizzesStackParamList = {
  Quizzes: undefined;
  GolferQuiz: undefined;
  TournamentQuiz: undefined;
  GolfBasicsQuiz: undefined;
};

type QuizzesScreenNavigationProp = StackNavigationProp<
  QuizzesStackParamList,
  'Quizzes'
>;

const quizzes = [
  {
    caption: 'Take the Golf Basics Quiz',
    screen: 'GolfBasicsQuiz',
    image: require('../assets/images/GolfballTee.png'),
  },
  {
    caption: 'Take the Tournament Quiz',
    screen: 'TournamentQuiz',
    image: require('../assets/images/MastersLeaderboard.png'),
  },
  {
    caption: 'Take the Golfer Quiz',
    screen: 'GolferQuiz',
    image: require('../assets/images/approachShot.webp'),
  },
];

const QuizzesScreen: React.FC = () => {
  const navigation = useNavigation<QuizzesScreenNavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Quizzes</Text>
      <Text style={styles.subheading}>Test your knowledge!</Text>
      {quizzes.map((quiz, index) => (
        <HorizontalCard
          key={index}
          caption={quiz.caption}
          image={quiz.image}
          onPress={() =>
            navigation.navigate(quiz.screen as keyof QuizzesStackParamList)
          }
        />
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
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

export default QuizzesScreen;
