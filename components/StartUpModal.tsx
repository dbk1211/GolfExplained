import React, {useState} from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';
import {FontStyles} from '../styles/FontStyles';
import {
  GolfBallWhite,
  GolfDarkGreen,
  GolfGrey,
  GolfYellow,
} from '../styles/Colors';

const StartUpModal: React.FC = () => {
  const [showModal, setShowModal] = useState(true);

  const handleCallToActionPress = () => {
    setShowModal(false);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showModal}
      onRequestClose={() => {}}>
      <TouchableWithoutFeedback onPress={() => setShowModal(false)}>
        <View style={styles.centeredView}>
          <Pressable onPress={e => e.stopPropagation()}>
            <View style={styles.modalView}>
              <Text style={styles.title}>
                Welcome to{'\n'}
                <Text style={styles.titleHighlight}>Golf Explained!</Text>
              </Text>
              <View style={styles.descriptionContainer}>
                <Text style={styles.description}>
                  <Text style={FontStyles.semiBoldItalic}>Golf Explained</Text>{' '}
                  is your go-to guide to the game of golf, whether you're
                  watching on TV or playing as a beginner. Dive into the basics,
                  explore the rules, discover key tournaments, and get to know
                  some of the game's best golfers. With quizzes to test your
                  knowledge, this app is designed to enhance your enjoyment and
                  understanding of the sport.
                </Text>
              </View>
              <View style={styles.container}>
                <TouchableOpacity
                  onPress={handleCallToActionPress}
                  style={styles.button}>
                  <Text style={styles.buttonText}>Got it!</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Pressable>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.9)',
  },
  modalView: {
    width: '80%',
    backgroundColor: GolfBallWhite,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: GolfGrey,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    ...FontStyles.regular,
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
    color: GolfDarkGreen,
  },
  titleHighlight: {
    ...FontStyles.semiBoldItalic,
    color: GolfDarkGreen,
  },
  descriptionContainer: {
    backgroundColor: GolfGrey,
    padding: 10,
    borderRadius: 10,
  },
  description: {
    ...FontStyles.regular,
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    color: GolfDarkGreen,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  button: {
    backgroundColor: GolfDarkGreen,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    ...FontStyles.bold,
    color: GolfYellow,
    fontSize: 16,
  },
  italicText: {
    ...FontStyles.semiBoldItalic,
  },
});

export default StartUpModal;
