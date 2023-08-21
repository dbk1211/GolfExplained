import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import GolfBasicsScreen from '../screens/GolfBasicsScreen';
import QuizzesScreen from '../screens/QuizzesScreen';
import TournamentsScreen from '../screens/TournamentsScreen';
import GolfersScreen from '../screens/GolfersScreen';
import GolferQuizScreen from '../screens/GolferQuizScreen';
import TournamentQuizScreen from '../screens/TournamentQuizScreen';
import BasicsQuizScreen from '../screens/BasicsQuizScreen';
import MastersScreen from '../screens/MastersScreen';
import USOpenScreen from '../screens/USOpenScreen';
import TheOpenChampionshipScreen from '../screens/TheOpenChampionship';
import PGAChampionshipScreen from '../screens/PGAChampionshipScreen';
import ThePLAYERSChampionshipScreen from '../screens/ThePLAYERSChampionship';
import RyderCupScreen from '../screens/RyderCupScreen';
import AskUsScreen from '../screens/AskUsScreen';
import {
  BasicsIcon,
  QuizzesIcon,
  TournamentsIcon,
  GolfersIcon,
  AskUsIcon,
} from '../assets/FontAwesomeIcons';
import StartUpModal from '../components/StartUpModal';
import {
  GolfDarkGreen,
  GolfGrassGreen,
  GolfYellow,
  GolfBallWhite,
} from '../styles/Colors';
import {FontStyles} from '../styles/FontStyles';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const QuizzesStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitleStyle: {
        ...FontStyles.regular,
      },
      headerBackTitleVisible: false,
      headerTintColor: GolfGrassGreen,
    }}>
    <Stack.Screen
      name="Quizzes"
      component={QuizzesScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="GolferQuiz"
      component={GolferQuizScreen}
      options={{title: 'Golfer Quiz'}}
    />
    <Stack.Screen
      name="TournamentQuiz"
      component={TournamentQuizScreen}
      options={{title: 'Tournament Quiz'}}
    />
    <Stack.Screen
      name="GolfBasicsQuiz"
      component={BasicsQuizScreen}
      options={{title: 'Golf Basics Quiz'}}
    />
  </Stack.Navigator>
);

const TournamentsStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitleStyle: {
        ...FontStyles.regular,
      },
      headerBackTitleVisible: false,
      headerTintColor: GolfGrassGreen,
    }}>
    <Stack.Screen
      name="Tournaments"
      component={TournamentsScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Masters"
      component={MastersScreen as React.ComponentType<any>}
      options={{title: 'The Masters'}}
    />
    <Stack.Screen
      name="USOpen"
      component={USOpenScreen as React.ComponentType<any>}
      options={{title: 'U.S. Open'}}
    />
    <Stack.Screen
      name="TheOpenChampionship"
      component={TheOpenChampionshipScreen as React.ComponentType<any>}
      options={{title: 'The Open Championship'}}
    />
    <Stack.Screen
      name="PGAChampionship"
      component={PGAChampionshipScreen as React.ComponentType<any>}
      options={{title: 'PGA Championship'}}
    />
    <Stack.Screen
      name="ThePLAYERSChampionship"
      component={ThePLAYERSChampionshipScreen as React.ComponentType<any>}
      options={{title: 'The PLAYERS'}}
    />
    <Stack.Screen
      name="TheRyderCup"
      component={RyderCupScreen as React.ComponentType<any>}
      options={{title: 'The Ryder Cup'}}
    />
  </Stack.Navigator>
);

const GolfersStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Golfers"
      component={GolfersScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StartUpModal />
      <Tab.Navigator
        initialRouteName="Golf Basics Tab"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: GolfYellow,
          tabBarInactiveTintColor: GolfGrassGreen,
          tabBarActiveBackgroundColor: GolfDarkGreen,
          tabBarInactiveBackgroundColor: GolfBallWhite,
          tabBarLabelStyle: {
            ...FontStyles.regular,
          },
        }}>
        <Tab.Screen
          name="Golf Basics Tab"
          component={GolfBasicsScreen}
          options={{tabBarIcon: BasicsIcon, title: 'Basics'}}
        />
        <Tab.Screen
          name="Tournaments Tab"
          component={TournamentsStack}
          options={{tabBarIcon: TournamentsIcon, title: 'Events'}}
        />
        <Tab.Screen
          name="Golfers Tab"
          component={GolfersStack}
          options={{tabBarIcon: GolfersIcon, title: 'Golfers'}}
        />
        <Tab.Screen
          name="Quizzes Tab"
          component={QuizzesStack}
          options={{tabBarIcon: QuizzesIcon, title: 'Quizzes'}}
        />
        <Tab.Screen
          name="Learn More Tab"
          component={AskUsScreen}
          options={{tabBarIcon: AskUsIcon, title: 'Ask Us'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
