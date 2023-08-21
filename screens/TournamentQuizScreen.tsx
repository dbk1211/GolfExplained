import React from 'react';
import {tournamentQuizQuestions} from '../data/quizQuestions';
import Quiz from '../components/QuizResults';

const TournamentQuizScreen: React.FC = () => {
  return (
    <Quiz
      questions={tournamentQuizQuestions}
      associatedTab="Tournaments Tab"
      buttonText="Review Events"
    />
  );
};

export default TournamentQuizScreen;
