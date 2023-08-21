import React from 'react';
import {View, StyleSheet, FlatList, Text, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Card from '../components/VerticalCard';
import {tournamentsData} from '../data/tournaments';
import {FontStyles} from '../styles/FontStyles';
import {GolfDarkGreen, GolfGrassGreen} from '../styles/Colors';

export enum TournamentScreens {
  Tournaments = 'Tournaments',
  Masters = 'Masters',
  USOpen = 'USOpen',
  TheOpenChampionship = 'TheOpenChampionship',
  PGAChampionship = 'PGAChampionship',
  ThePLAYERSChampionship = 'ThePLAYERSChampionship',
  TheRyderCup = 'TheRyderCup',
}

type TournamentStackParamList = {
  [TournamentScreens.Tournaments]: undefined;
  [TournamentScreens.Masters]: undefined;
  [TournamentScreens.USOpen]: undefined;
  [TournamentScreens.TheOpenChampionship]: undefined;
  [TournamentScreens.PGAChampionship]: undefined;
  [TournamentScreens.ThePLAYERSChampionship]: undefined;
  [TournamentScreens.TheRyderCup]: undefined;
};

type TournamentsScreenNavigationProp = StackNavigationProp<
  TournamentStackParamList,
  TournamentScreens.Tournaments
>;

const tournamentToScreenName: {[key: string]: TournamentScreens} = {
  Masters: TournamentScreens.Masters,
  'U.S. Open': TournamentScreens.USOpen,
  'The Open Championship': TournamentScreens.TheOpenChampionship,
  'PGA Championship': TournamentScreens.PGAChampionship,
  'The PLAYERS': TournamentScreens.ThePLAYERSChampionship,
  'Ryder Cup': TournamentScreens.TheRyderCup,
};

const TournamentsScreen: React.FC = () => {
  const navigation = useNavigation<TournamentsScreenNavigationProp>();

  const handleCardPress = (tournament: string) => {
    const screen = tournamentToScreenName[tournament];
    if (screen) {
      navigation.navigate(screen);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Tournaments</Text>
        <Text style={styles.subheading}>
          Learn About Golf's Most Prestigious Events
        </Text>

        <FlatList
          data={tournamentsData}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
          renderItem={({item}) => (
            <Card
              name={item.title}
              image={item.image}
              onPress={() => handleCardPress(item.title)}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
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
  columnWrapper: {
    justifyContent: 'space-between',
  },
});

export default TournamentsScreen;
