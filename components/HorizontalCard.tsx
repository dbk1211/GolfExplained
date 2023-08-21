import React from 'react';
import {Text, Image, StyleSheet, Pressable, Dimensions} from 'react-native';
import {GolfBallWhite, GolfGrassGreen} from '../styles/Colors';
import {FontStyles} from '../styles/FontStyles';

interface HorizontalCardProps {
  image: any;
  caption: string;
  onPress: () => void;
}

const HorizontalCard: React.FC<HorizontalCardProps> = ({
  image,
  caption,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <Text style={styles.caption}>{caption}</Text>
    </Pressable>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: GolfGrassGreen,
    width: width * 0.9,
    borderRadius: 10,
    marginBottom: 16,
    overflow: 'hidden',
    alignItems: 'center',
    height: width * 0.25,
  },
  image: {
    width: '40%',
    aspectRatio: 1,
  },
  caption: {
    ...FontStyles.bold,
    textAlign: 'center',
    fontSize: 16,
    color: GolfBallWhite,
    flex: 1,
    paddingRight: 10,
  },
});

export default HorizontalCard;
