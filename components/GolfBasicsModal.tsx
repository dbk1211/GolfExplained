import React from 'react';
import {
  SafeAreaView,
  Modal,
  View,
  StyleSheet,
  Pressable,
  Text,
  Dimensions,
} from 'react-native';
import Slideshow from './Slideshow';
import {CloseIcon} from '../assets/FontAwesomeIcons';
import {GolfDarkGreen, GolfBallWhite} from '../styles/Colors';
import {FontStyles} from '../styles/FontStyles';

interface GolfBasicsModalProps {
  visible: boolean;
  data: any;
  onClose: () => void;
}

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const GolfBasicsModal: React.FC<GolfBasicsModalProps> = ({
  visible,
  data,
  onClose,
}) => {
  const itemWidth = windowWidth * 0.9;
  const itemHeight = windowHeight * 0.4;
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}>
      <SafeAreaView style={styles.modalContainer}>
        <View style={styles.contentContainer}>
          <Pressable style={styles.closeButton} onPress={onClose}>
            <CloseIcon color={GolfBallWhite} size={24} />
          </Pressable>
          {data && (
            <>
              <Text style={styles.categoryHeader}>{data.title}</Text>
              <View style={styles.slideshowContainer}>
                <Slideshow
                  data={data.data}
                  itemWidth={itemWidth}
                  itemHeight={itemHeight}
                />
              </View>
            </>
          )}
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  categoryHeader: {
    ...FontStyles.bold,
    fontSize: 16,
    color: GolfBallWhite,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contentContainer: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.8,
    backgroundColor: GolfDarkGreen,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    marginBottom: 40,
  },
  slideshowContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
  },
  closeButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GolfBasicsModal;
