import React, {useState} from 'react';
import {StyleSheet, FlatList, Text, SafeAreaView} from 'react-native';
import Card from '../components/VerticalCard';
import GolferDetailsModal from '../components/GolferDetailsModal';
import {golfersData} from '../data/golfers';
import {FontStyles} from '../styles/FontStyles';
import {GolfDarkGreen, GolfGrassGreen} from '../styles/Colors';

const GolfersScreen: React.FC = () => {
  const [selectedGolfer, setSelectedGolfer] = useState<
    (typeof golfersData)[0] | null
  >(null);

  const handleCardPress = (id: string) => {
    const golfer = golfersData.find(x => x.id === id);
    if (golfer) {
      setSelectedGolfer(golfer);
    }
  };

  const closeModal = () => {
    setSelectedGolfer(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Golfers</Text>
      <Text style={styles.subheading}>
        Learn About Golf's Most Popular Players
      </Text>
      <FlatList
        data={golfersData}
        renderItem={({item}) => (
          <Card
            name={item.name}
            image={item.image}
            onPress={() => handleCardPress(item.id)}
          />
        )}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
      />
      {selectedGolfer && (
        <GolferDetailsModal
          visible={selectedGolfer !== null}
          golfer={selectedGolfer}
          onClose={closeModal}
        />
      )}
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
  columnWrapper: {
    justifyContent: 'space-between',
  },
});

export default GolfersScreen;
