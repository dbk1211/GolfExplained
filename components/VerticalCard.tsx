import React from 'react';
import {Pressable, Image, Text, View, StyleSheet} from 'react-native';
import {GolfGrassGreen} from '../styles/Colors';
import {FontStyles} from '../styles/FontStyles';

type VerticalCardProps = {
  name: string;
  image: any;
  onPress: () => void;
};

const VerticalCard: React.FC<VerticalCardProps> = ({name, image, onPress}) => {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginBottom: 20,
    overflow: 'hidden',
    width: '45%',
    marginHorizontal: 5,
  },
  image: {
    width: '100%',
    height: 100,
  },
  nameContainer: {
    width: '100%',
    backgroundColor: GolfGrassGreen,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    ...FontStyles.regular,
    color: 'white',
    fontSize: 13,
  },
});

export default VerticalCard;
