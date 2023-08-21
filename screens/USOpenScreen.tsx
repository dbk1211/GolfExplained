import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import TournamentSubheading from '../components/TournamentSubheading';
import TournamentStyles from '../styles/TournamentStyles';
import Separator from '../components/Separator';
import {renderHeader, renderContent} from '../components/AccordionHelpers';
import {GolfGrey} from '../styles/Colors';
import {FontStyles} from '../styles/FontStyles';

const USOpenScreen: React.FC = () => {
  const [activeSections, setActiveSections] = useState<number[]>([]);
  const updateSections = (activeSectionsUpdate: number[]) => {
    setActiveSections(activeSectionsUpdate);
  };

  const sections = [
    {
      title: 'History',
      content: (
        <>
          <Text style={TournamentStyles.text}>
            The U.S. Open Championship, one of the four major championships in
            professional golf, was first played in 1895. The inaugural
            tournament was conducted by the United States Golf Association
            (USGA) and took place at Newport Country Club in Rhode Island. The
            tournament, a 36-hole competition held in a single day, was won by
            Horace Rawlins, an Englishman. Initially, the U.S. Open was
            dominated by British golfers, reflecting the sport's roots in
            Scotland, but this started to change in the early 20th century as
            American golfers became more competitive on the international stage.
            Interestingly, the U.S. Open's format and the nature of its
            competition evolved over time. In its early years, it was a sideshow
            to the U.S. Amateur tournament, but it steadily gained prestige and
            importance, particularly with the increasing professionalization of
            the sport. By 1898, the tournament expanded to a 72-hole format
            (four rounds of 18 holes), which is still the standard for the U.S.
            Open and most professional golf tournaments today. The introduction
            of the qualifying process in the early 20th century made the U.S.
            Open the open and democratic tournament it is known as today,
            allowing both professionals and amateurs with the requisite skill a
            chance to compete in this illustrious event.
          </Text>
          <Image
            style={TournamentStyles.image}
            source={require('../assets/images/USOpenTrophy.png')}
          />
          <Text style={TournamentStyles.text}>
            The tournament has a long list of legendary winners, including Bobby
            Jones, Ben Hogan, Jack Nicklaus, Arnold Palmer, and Tiger Woods.
          </Text>
        </>
      ),
    },
    {
      title: 'Open Qualifying',
      content: (
        <>
          <Text style={TournamentStyles.text}>
            The U.S. Open is the most democratic of all the major championships,
            as it allows both professional and amateur golfers to qualify.
            Anyone with a USGA Handicap Index not exceeding 1.4 can enter the
            qualifying process, which consists of local and sectional qualifying
            rounds. A handful of spots in the U.S. Open are reserved for the top
            finishers in the sectional qualifying tournaments. This makes it
            possible (though very difficult) for a relative unknown or an
            amateur golfer to compete in the championship.
          </Text>
          <Image
            style={TournamentStyles.image}
            source={require('../assets/images/USOpenQualify.png')}
          />
          <Text style={TournamentStyles.text}>
            Known as "Golf's Longest Day", it refers to the day when the
            majority of the U.S. Open's sectional qualifiers take place,
            typically the first Monday in June. On this day, hundreds of golfers
            across multiple sites in the United States play 36 holes of golf in
            a single day in hopes of qualifying for the U.S. Open. Golfers start
            early in the morning and often don't finish until late in the
            evening. It's a true golf marathon, with spots in one of the world's
            most prestigious golf tournaments at stake. The United States Golf
            Association (USGA) often provides extensive coverage of these
            sectional qualifiers, following the drama and stories that emerge as
            golfers chase their dreams.
          </Text>
        </>
      ),
    },
    {
      title: 'Difficult Scoring Conditions',
      content: (
        <>
          <Text style={TournamentStyles.text}>
            The USGA typically chooses courses with narrow fairways, thick
            rough, and fast, hard greens, then places the holes in challenging
            locations. The idea is to test every aspect of the golfers' games,
            making the U.S. Open a true examination of skill, patience, and
            mental toughness. It's for this reason that the tournament is often
            referred to as the "
            <Text style={styles.italics}>toughest test in golf</Text>."
          </Text>

          <Image
            style={TournamentStyles.image}
            source={require('../assets/images/CountryClubUSOpen.png')}
          />

          <Text style={TournamentStyles.text}>
            Unlike many other tournaments where low scores and birdies are
            common, at the U.S. Open, making par is considered a good score on
            most holes. The winning score is often close to even par, unlike
            other tournaments where scores in the double digits under par are
            more common.
          </Text>
        </>
      ),
    },
    {
      title: 'Hollywood Films and the U.S. Open',
      content: (
        <>
          <Image
            style={styles.moviePoster}
            source={require('../assets/images/GreatestGame.png')}
          />
          <Text style={TournamentStyles.text}>
            <Text style={FontStyles.bold}>
              "The Greatest Game Ever Played"{' '}
            </Text>
            (2005): This film is based on the true story of Francis Ouimet, a
            working-class young man who became the first amateur to win the U.S.
            Open in 1913. The film, directed by Bill Paxton, dramatizes his
            victory over British star Harry Vardon. Although the movie is not
            entirely about the U.S. Open, the tournament is central to its plot.
          </Text>
          <Separator />
          <Image
            style={styles.moviePoster}
            source={require('../assets/images/tincupposter.png')}
          />
          <Text style={TournamentStyles.text}>
            <Text style={FontStyles.bold}>"Tin Cup" </Text>(1996): In this film,
            Kevin Costner plays a talented but down-on-his-luck golfer who tries
            to qualify for the U.S. Open to win the heart of a woman.
          </Text>
        </>
      ),
    },
  ];

  return (
    <SafeAreaView style={TournamentStyles.container}>
      <ScrollView contentContainerStyle={TournamentStyles.content}>
        <View style={TournamentStyles.imageCrop}>
          <Image
            style={TournamentStyles.topImage}
            source={require('../assets/images/USOpenFlag.png')}
          />
        </View>

        <Text style={TournamentStyles.text}>
          The U.S. Open, also known as the United States Open Championship, is
          considered the national championship of the United States.
        </Text>

        <TournamentSubheading
          location="Rotates across some of the greatest courses in the United States"
          when="3rd week of June, Father's Day weekend"
          firstPlayed="October, 1895"
          organizedBy="USGA (United States Golf Association)"
          fieldSize="156"
        />
        <Accordion
          sections={sections}
          underlayColor={GolfGrey}
          activeSections={activeSections}
          renderHeader={renderHeader}
          renderContent={renderContent}
          onChange={updateSections}
        />
        <Separator />
        <Text style={TournamentStyles.italicsText}>
          Visit usopen.com or download the official USGA Mobile App for more
          details.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default USOpenScreen;

const styles = StyleSheet.create({
  moviePoster: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
  },
  italics: {
    ...FontStyles.mediumItalic,
  },
});
