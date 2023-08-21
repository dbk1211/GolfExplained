import React from 'react';
import {golferQuizQuestions} from '../data/quizQuestions';
import Quiz from '../components/QuizResults';

const GolferQuizScreen: React.FC = () => {
  return (
    <Quiz
      questions={golferQuizQuestions}
      associatedTab="Golfers Tab"
      buttonText="Review Golfers"
    />
  );
};

export default GolferQuizScreen;
