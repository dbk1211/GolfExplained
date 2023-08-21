import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  GolfDarkGreen,
  GolfGrey,
  GolfMediumGrey,
  GolfPink,
  GolfYellow,
} from '../styles/Colors';
import {FontStyles} from '../styles/FontStyles';
import {CheckIcon, CloseIcon} from '../assets/FontAwesomeIcons';

type Question = {
  question: string;
  options: string[];
  correctAnswer: string;
};

type QuestionRecapProps = {
  question: Question;
  userAnswer: string;
};

const QuizQuestionRecap: React.FC<QuestionRecapProps> = ({
  question,
  userAnswer,
}) => {
  const isCorrect = question.correctAnswer === userAnswer;
  const containerStyle = {
    ...styles.container,
    backgroundColor: isCorrect ? GolfDarkGreen : GolfMediumGrey,
  };

  const answerContainerStyle = isCorrect
    ? styles.answerContainer
    : {...styles.answerContainer, backgroundColor: GolfGrey};

  const questionTextStyle = isCorrect
    ? styles.questionText
    : {...styles.questionText, color: GolfDarkGreen};

  const yourAnswerTextStyle = isCorrect
    ? styles.answerText
    : {...styles.answerText, color: GolfPink};

  const correctAnswerTextStyle = isCorrect
    ? styles.correctAnswerText
    : {...styles.correctAnswerText, color: GolfDarkGreen};

  return (
    <View style={containerStyle}>
      <Text style={questionTextStyle}>{question.question}</Text>
      <View style={answerContainerStyle}>
        <Text style={yourAnswerTextStyle}>
          Your answer: {userAnswer}{' '}
          {isCorrect ? (
            <CheckIcon size={18} color={GolfDarkGreen} style={styles.icon} />
          ) : (
            <CloseIcon size={18} color={GolfPink} style={styles.icon} />
          )}
        </Text>
        {!isCorrect && (
          <Text style={correctAnswerTextStyle}>
            Correct answer: {question.correctAnswer}
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  questionText: {
    ...FontStyles.bold,
    color: GolfYellow,
    fontSize: 16,
    marginBottom: 10,
  },
  answerContainer: {
    backgroundColor: GolfGrey,
    padding: 5,
    borderRadius: 10,
    marginBottom: 20,
  },
  answerText: {
    ...FontStyles.regular,
    color: GolfDarkGreen,
  },
  correctAnswerText: {
    ...FontStyles.mediumItalic,
    color: GolfGrey,
  },
  icon: {
    marginTop: -2,
  },
});

export default QuizQuestionRecap;
