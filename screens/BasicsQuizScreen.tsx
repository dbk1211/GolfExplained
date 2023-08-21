import React from 'react';
import {basicsQuizQuestions} from '../data/quizQuestions';
import Quiz from '../components/QuizResults';

const BasicsQuizScreen: React.FC = () => {
  return (
    <Quiz
      questions={basicsQuizQuestions}
      associatedTab="Golf Basics Tab"
      buttonText="Review Basics"
    />
  );
};

export default BasicsQuizScreen;
