import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import QuizQuestionRecap from './QuizQuestionRecap';
import QuizQuestion from './QuizQuestion';
import {GolfDarkGreen, GolfGrassGreen, GolfGrey} from '../styles/Colors';
import {FontStyles} from '../styles/FontStyles';
import Separator from './Separator';

type Question = {
  question: string;
  options: string[];
  correctAnswer: string;
};

type QuizProps = {
  questions: Question[];
  associatedTab: string;
  buttonText: string;
};

type QuizStackParamList = {
  Quizzes: undefined;
};

type QuizNavigationProp = StackNavigationProp<QuizStackParamList, 'Quizzes'> &
  BottomTabNavigationProp<any>;

const QuizResults: React.FC<QuizProps> = ({
  questions,
  associatedTab,
  buttonText,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const navigation = useNavigation<QuizNavigationProp>();

  const handleBackToQuizzes = () => {
    navigation.navigate('Quizzes');
  };

  const handleBackToTab = () => {
    navigation.jumpTo(associatedTab);
  };

  const handleOptionPress = (selectedOption: string) => {
    const isCorrect =
      selectedOption === questions[currentQuestionIndex].correctAnswer;

    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }

    setUserAnswers(prevUserAnswers => [...prevUserAnswers, selectedOption]);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setUserAnswers([]);
    setQuizCompleted(false);
  };

  const renderQuizResults = () => {
    const totalQuestions = questions.length;
    const percentage = Math.round((score / totalQuestions) * 100);
    const perfectScore = percentage === 100;
    const goodScore = percentage >= 75 && percentage < 100;

    let imageSource;
    let quote;
    if (perfectScore) {
      imageSource = require('../assets/images/TigerFistpump.png');
      quote = `No matter how good you get, you can always get better.” -Tiger Woods`;
    } else if (goodScore) {
      imageSource = require('../assets/images/ArnieClassic.jpeg');
      quote = `“Golf is deceptively simple and endlessly complicated; it satisfies the soul and frustrates the intellect. It is at the same time rewarding and maddening - and it is without a doubt the greatest game mankind has ever invented.” -Arnold Palmer`;
    } else {
      imageSource = require('../assets/images/JackBritish.png');
      quote = `“Resolve never to quit, never to give up, no matter what the situation.” -Jack Nicklaus`;
    }

    return (
      <View>
        <Text style={styles.headerText}>
          Your Score: {score}/{totalQuestions} ({percentage}%)
        </Text>

        <Image source={imageSource} style={styles.image} />

        <Text style={styles.quoteText}>{quote}</Text>

        {questions.map((question, index) => (
          <QuizQuestionRecap
            key={index}
            question={question}
            userAnswer={userAnswers[index]}
          />
        ))}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleBackToQuizzes}>
            <Text style={styles.buttonText}>Quizzes Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={resetQuiz}>
            <Text style={styles.buttonText}>Retake Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleBackToTab}>
            <Text style={styles.buttonText}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
        <Separator />
      </View>
    );
  };

  const renderQuizContent = () => {
    if (!currentQuestion) {
      return <Text>No question available.</Text>;
    }

    return (
      <QuizQuestion
        question={currentQuestion.question}
        options={currentQuestion.options}
        onOptionPress={handleOptionPress}
        questionNumber={currentQuestionIndex + 1}
        totalQuestions={questions.length}
      />
    );
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <View>{quizCompleted ? renderQuizResults() : renderQuizContent()}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  image: {
    width: '75%',
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
    alignSelf: 'center',
  },
  headerText: {
    ...FontStyles.semiBoldItalic,
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 10,
    color: GolfGrassGreen,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    backgroundColor: GolfDarkGreen,
    borderRadius: 10,
    padding: 10,
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    ...FontStyles.regular,
    color: GolfGrey,
    fontSize: 14,
    textAlign: 'center',
  },
  contentContainer: {
    paddingBottom: 50,
  },
  quoteText: {
    ...FontStyles.mediumItalic,
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    color: GolfGrassGreen,
  },
});

export default QuizResults;
