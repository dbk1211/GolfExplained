import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {GolfDarkGreen, GolfGrassGreen, GolfYellow} from '../styles/Colors';
import {FontStyles} from '../styles/FontStyles';

type QuizQuestionProps = {
  question: string;
  options: string[];
  onOptionPress: (selectedOption: string) => void;
  questionNumber: number;
  totalQuestions: number;
};

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  options,
  onOptionPress,
  questionNumber,
  totalQuestions,
}) => {
  return (
    <View>
      <Text style={styles.question}>
        Question {questionNumber} of {totalQuestions}
      </Text>
      <Text style={styles.questionText}>{question}</Text>
      {options.map((option, index) => (
        <TouchableOpacity
          style={styles.optionButton}
          key={index}
          onPress={() => onOptionPress(option)}>
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  question: {
    ...FontStyles.bold,
    color: GolfDarkGreen,
    fontSize: 16,
    marginBottom: 10,
  },
  questionText: {
    ...FontStyles.semiBoldItalic,
    color: GolfGrassGreen,
    fontSize: 20,
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: GolfDarkGreen,
    padding: 10,
    borderRadius: 10,
    marginBottom: 30,
  },
  optionText: {
    ...FontStyles.regular,
    color: GolfYellow,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default QuizQuestion;
