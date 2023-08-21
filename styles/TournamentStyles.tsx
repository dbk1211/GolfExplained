import {StyleSheet} from 'react-native';
import {FontStyles} from './FontStyles';
import {GolfDarkGreen} from './Colors';

const TournamentStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 12,
  },
  title: {
    ...FontStyles.bold,
    fontSize: 18,
    marginBottom: 10,
    color: GolfDarkGreen,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  biographyContainer: {
    padding: 1,
    marginBottom: 10,
  },
  text: {
    ...FontStyles.regular,
    fontSize: 16,
    lineHeight: 20,
    marginVertical: 10,
    color: GolfDarkGreen,
  },
  italicsText: {
    ...FontStyles.semiBoldItalic,
    color: GolfDarkGreen,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  icon: {
    marginTop: -20,
  },
  heading: {
    ...FontStyles.bold,
    fontSize: 18,
    color: GolfDarkGreen,
  },
  description: {
    ...FontStyles.regular,
    fontSize: 16,
    marginTop: 2,
    color: GolfDarkGreen,
  },
  imageCrop: {
    width: '100%',
    overflow: 'hidden',
  },
  topImage: {
    width: '100%',
    height: 140,
    resizeMode: 'cover',
  },
});

export default TournamentStyles;
