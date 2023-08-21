import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import GolfBasicsCard from '../components/HorizontalCard';
import GolfBasicsModal from '../components/GolfBasicsModal';
import {
  basicRulesData,
  golfEtiquetteData,
  terminologyData,
  whyPlayGolfData,
} from '../data/basics';
import {GolfDarkGreen, GolfGrassGreen} from '../styles/Colors';
import {FontStyles} from '../styles/FontStyles';

type SlideshowData = {
  title: string;
  image: any;
  data:
    | typeof whyPlayGolfData
    | typeof basicRulesData
    | typeof golfEtiquetteData
    | typeof terminologyData;
};

const slideshows: SlideshowData[] = [
  {
    title: 'Why Play?',
    image: require('../assets/images/WhyPlay.png'),
    data: whyPlayGolfData,
  },
  {
    title: 'Basic Rules',
    image: require('../assets/images/RulesGolf.png'),
    data: basicRulesData,
  },
  {
    title: 'Etiquette',
    image: require('../assets/images/Handshake.png'),
    data: golfEtiquetteData,
  },
  {
    title: 'Terminology',
    image: require('../assets/images/TeeingUp.png'),
    data: terminologyData,
  },
];

const GolfBasicsScreen: React.FC = () => {
  const [visibleSlideshow, setVisibleSlideshow] = useState<boolean>(false);
  const [activeSlideData, setActiveSlideData] = useState<SlideshowData | null>(
    null,
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Golf Basics</Text>
      <Text style={styles.subheading}>Explore the Fundamentals of Golf</Text>

      {slideshows.map(slideshow => (
        <GolfBasicsCard
          key={slideshow.title}
          image={slideshow.image}
          caption={slideshow.title}
          onPress={() => {
            setActiveSlideData(slideshow);
            setVisibleSlideshow(true);
          }}
        />
      ))}

      <GolfBasicsModal
        visible={visibleSlideshow}
        data={activeSlideData}
        onClose={() => setVisibleSlideshow(false)}
      />
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
  cardsContainer: {
    alignSelf: 'stretch',
  },
});

export default GolfBasicsScreen;
