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
import {FontStyles} from '../styles/FontStyles';
import {GolfGrey, GolfDarkBlue} from '../styles/Colors';

const TheOpenChampionshipScreen: React.FC = () => {
  const [activeSections, setActiveSections] = useState<number[]>([]);
  const updateSections = (activeSectionsUpdate: number[]) => {
    setActiveSections(activeSectionsUpdate);
  };

  const sections = [
    {
      title: 'History',
      content: (
        <>
          <Image
            style={TournamentStyles.image}
            source={require('../assets/images/britishopenhistory.png')}
          />
          <Text style={TournamentStyles.text}>
            The Open Championship, sometimes known as "The British Open" outside
            of the U.K., is the oldest of the four majors, first played in 1860
            at Prestwick Golf Club in Scotland. Its long history, coupled with
            the fact that it is hosted by the R&A (Royal and Ancient Golf Club
            of St Andrews), contributes to its prestige.
          </Text>
          <Image
            style={TournamentStyles.image}
            source={require('../assets/images/TheOpenJug.png')}
          />
          <Text style={TournamentStyles.text}>
            The R&A is one of the oldest and most prestigious golf clubs in the
            world, founded in 1754. Though it started as a golf club, The R&A
            has taken on a larger role in the game of golf. It is now separate
            from the Royal and Ancient Golf Club and operates as a governing
            body, similar to the United States Golf Association (USGA) in the
            United States. In addition to organizing The Open Championship, The
            R&A is also responsible for formulating the rules of golf (in
            conjunction with the USGA), managing the World Amateur Golf
            Rankings, and encouraging the development of the game around the
            world.
          </Text>
        </>
      ),
    },
    {
      title: 'Rotating U.K. Courses',
      content: (
        <>
          <Text style={TournamentStyles.text}>
            The Open Championship is played at a roster of courses. Currently,
            there are ten courses in the rotation, nine in Scotland and one in
            England: St Andrews (Old Course), Carnoustie, Muirfield, Royal
            Troon, and Turnberry in Scotland; and Royal Birkdale, Royal
            Liverpool, Royal Lytham & St Annes, Royal St George's, and Royal
            Portrush in Northern Ireland. Each course presents its own
            challenges and is usually a links-style course, which brings a
            unique and traditional aspect to the tournament.
          </Text>
          <Image
            style={TournamentStyles.image}
            source={require('../assets/images/StAndrews.png')}
          />
        </>
      ),
    },
    {
      title: 'Links Golf',
      content: (
        <>
          <Text style={TournamentStyles.text}>
            Unlike most American golf courses, the courses in the Open
            Championship rotation are almost all links courses. These courses,
            characterized by undulating fairways, deep bunkers, and thick rough,
            are usually situated along the coast, meaning that wind often plays
            a significant role. The style of play on a links course is quite
            different from that on a parkland course, requiring different
            strategies and types of shots.
          </Text>

          <Image
            style={TournamentStyles.image}
            source={require('../assets/images/TheOpenTigerRough.png')}
          />
        </>
      ),
    },
    {
      title: 'Weather',
      content: (
        <>
          <Image
            style={TournamentStyles.image}
            source={require('../assets/images/TheOpenWindy.png')}
          />
          <Text style={TournamentStyles.text}>
            The Open Championship is known for its often unpredictable and
            challenging weather conditions. Players have to contend with
            everything from wind and rain to cold temperatures, even in the
            middle of summer. The ability to handle these conditions is often a
            key factor in determining the champion.
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
            source={require('../assets/images/TheOpenTrophyHeader.png')}
          />
        </View>
        <View style={styles.quoteContainer}>
          <Text style={styles.textQuote}>
            "Links golf is nature in all its unforgiving force – and The Open is
            where nature is pitted against the very best of the very best. It’s
            where champions must set aside what came before. Alone, skill and
            years of diligent preparation are not enough. Here, on the links
            course, every hole is made new as the wind and weather shifts. And
            it has been this way since the first golfers placed the first tees
            into the first turf. Links golf is how our game began, played on
            unforgiving shores where raw landscape meets the sea. These are
            fairways and greens shaped by nature. There is perfection in every
            imperfection." -The R&A
          </Text>
        </View>

        <TournamentSubheading
          location="rotation of 9 courses in Scotland and 1 in England"
          when="July"
          firstPlayed="October, 1860"
          organizedBy="The Royal & Ancient Golf Club of St. Andrews (The R&A)"
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
          Visit theopen.com or download The Open App for more details.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TheOpenChampionshipScreen;

const styles = StyleSheet.create({
  quoteContainer: {
    backgroundColor: GolfDarkBlue,
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
  },
  textQuote: {
    ...FontStyles.semiBoldItalic,
    color: GolfGrey,
    lineHeight: 20,
  },
});
