import React from 'react';
import {View, Text, StyleSheet, Modal, Pressable, Image} from 'react-native';
import {CloseIcon} from '../assets/FontAwesomeIcons';
import {GolfBallWhite, GolfDarkGreen, GolfGrey} from '../styles/Colors';
import {FontStyles} from '../styles/FontStyles';

const calculateAge = (birthDateString: string) => {
  const birthDate = new Date(birthDateString);
  if (isNaN(birthDate.getTime())) {
    return 'Unavailable';
  }

  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

type GolferDetailsModalProps = {
  visible: boolean;
  golfer: any;
  onClose: () => void;
};

const GolferDetailsModal: React.FC<GolferDetailsModalProps> = ({
  visible,
  golfer,
  onClose,
}) => {
  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <Pressable style={styles.container} onPress={onClose}>
        <View style={styles.content} onStartShouldSetResponder={() => true}>
          <Image source={golfer.headshot} style={styles.headshot} />
          <Text style={styles.name}>{golfer.name}</Text>
          <View style={styles.textRow}>
            <Text style={styles.title}>Age: </Text>
            <Text style={styles.info}>
              {calculateAge(golfer.birthDate)} ({formatDate(golfer.birthDate)})
            </Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.title}>Birthplace: </Text>
            <Text style={styles.info}>{golfer.birthplace}</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.title}>PGA Tour Wins: </Text>
            <Text style={styles.info}>{golfer.pgaTourWins}</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.title}>Major Championships: </Text>
            <Text style={styles.info}>{golfer.majorChampionshipsAmount}</Text>
          </View>
          {golfer.majorChampionshipsAmount > 0 &&
            golfer.majorChampionshipsList
              .split(
                /(?=U\.S\. Open|Masters|The Open Championship|PGA Championship)/,
              )
              .map((major: string, index: number) => (
                <View style={styles.majorRow} key={index}>
                  <Text style={styles.majorText}>{major.trim()}</Text>
                </View>
              ))}
          <View style={styles.bioContainer}>
            <Text style={styles.bioTitle}>What You Should Know</Text>
            <View style={styles.bioSeparator} />
            <Text style={styles.bioText}>{golfer.bio}</Text>
          </View>
          <Pressable style={styles.closeButton} onPress={onClose}>
            <CloseIcon color={GolfDarkGreen} size={24} />
          </Pressable>
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  content: {
    backgroundColor: GolfBallWhite,
    padding: 20,
    borderRadius: 10,
    width: '90%',
    maxHeight: '90%',
    alignItems: 'flex-start',
  },
  headshot: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    alignSelf: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: GolfDarkGreen,
    textAlign: 'center',
    alignSelf: 'center',
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
  textRow: {
    flexDirection: 'row',
    marginBottom: 5,
    flexWrap: 'wrap',
  },
  title: {
    ...FontStyles.bold,
    fontSize: 16,
    color: GolfDarkGreen,
  },
  info: {
    ...FontStyles.regular,
    fontSize: 16,
    color: GolfDarkGreen,
    flexShrink: 1,
  },
  bioContainer: {
    backgroundColor: GolfGrey,
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
  },
  bioTitle: {
    ...FontStyles.bold,
    fontSize: 14,
    color: GolfDarkGreen,
    marginBottom: 10,
  },
  bioText: {
    ...FontStyles.regular,
    fontSize: 14,
    lineHeight: 20,
    color: GolfDarkGreen,
  },
  bioSeparator: {
    height: 1,
    backgroundColor: GolfDarkGreen,
    marginBottom: 10,
  },
  majorRow: {
    marginLeft: 10,
    marginBottom: 3,
  },
  majorText: {
    ...FontStyles.regular,
    fontSize: 14,
    color: GolfDarkGreen,
  },
});

export default GolferDetailsModal;
