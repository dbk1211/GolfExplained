import React, {useState} from 'react';
import {View, Text, ScrollView, Image, SafeAreaView} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import TournamentSubheading from '../components/TournamentSubheading';
import TournamentStyles from '../styles/TournamentStyles';
import Separator from '../components/Separator';
import {renderHeader, renderContent} from '../components/AccordionHelpers';
import {GolfGrey} from '../styles/Colors';

const MastersScreen: React.FC = () => {
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
            source={require('../assets/images/BobbyJones.png')}
          />
          <Text style={TournamentStyles.text}>
            Augusta National Golf Club itself was established in 1932 by Bobby
            Jones (above) and Clifford Roberts (below). Jones, a lawyer by
            profession, was a very successful amateur golfer and had retired
            from competitive golf in 1930.
          </Text>
          <Image
            style={TournamentStyles.image}
            source={require('../assets/images/CliffordRoberts.png')}
          />
          <Text style={TournamentStyles.text}>
            He and Roberts, an investment banker, sought to create a golf course
            after Jones's retirement. They were able to purchase a 365-acre
            plant nursery in Augusta, Georgia, and transformed it into the
            Augusta National Golf Club.
          </Text>
          <Text style={TournamentStyles.text}>
            Their dream was to establish a golf club and tournament in the
            southeastern United States that could draw attention away from the
            nation's dominant clubs, most of which were located in the
            Northeast. The first Masters Tournament, initially known as the
            Augusta National Invitational, was held in 1934. Jones and Roberts
            decided to organize their own annual tournament at the course, and
            that's how Augusta National Golf Club came to run The Masters
            Tournament. Over time, The Masters has evolved into one of the most
            prestigious golf tournaments in the world, with Augusta National
            Golf Club maintaining control over the event and its operations.
          </Text>
        </>
      ),
    },
    {
      title: 'Course Description',
      content: (
        <>
          <Image
            style={TournamentStyles.image}
            source={require('../assets/images/AugustaHole12.png')}
          />
          <Text style={TournamentStyles.text}>
            Augusta National is widely renowned for its beauty and meticulous
            landscaping. The course was built on the site of a former commercial
            nursery, and each hole is named after a different plant or shrub
            that can be found on or around it. One of the most striking features
            of Augusta is its abundant flora, including azaleas, magnolias, and
            dogwoods, which often bloom beautifully during The Masters, usually
            held in early April.
          </Text>

          <Image
            style={TournamentStyles.image}
            source={require('../assets/images/AugustaFlowers.png')}
          />

          <Text style={TournamentStyles.text}>
            The course is also famous for its rolling terrain, which can make
            for some challenging elevations and lies. Its fairways are wide but
            demand strategic shot placements, and its greens are fast,
            undulating, and typically in immaculate condition. Some notable
            features of the course include "Amen Corner" (holes 11, 12, and 13),
            which is known for its difficulty and potential for dramatic swings
            in players' scores, and the par-3 16th hole, where the Sunday pin
            placement often allows for thrilling shots and even hole-in-ones.
            The course is also private and exclusive, known for its strict
            membership policies. Unlike many other courses that host major
            championships, Augusta National is not open to the public. The
            combination of its beauty, difficulty, history, and exclusivity
            makes Augusta National one of the most revered golf courses in the
            world.
          </Text>

          <Image
            style={TournamentStyles.image}
            source={require('../assets/images/AugustaFog.png')}
          />
        </>
      ),
    },
    {
      title: 'Traditions',
      content: (
        <>
          <Image
            style={TournamentStyles.image}
            source={require('../assets/images/ChampionsDinner2023.png')}
          />
          <Text style={TournamentStyles.text}>
            The tournament is steeped in unique traditions, such as the
            Champions Dinner and the awarding of the green jacket to the winner.
            The green jacket is one of the most iconic symbols in golf and is
            only worn by Masters champions.
          </Text>
          <Image
            style={TournamentStyles.image}
            source={require('../assets/images/RahmGreenJacket.png')}
          />
        </>
      ),
    },
    {
      title: 'Who is Eligible to Play?',
      content: (
        <>
          <Text style={TournamentStyles.text}>
            The Masters Tournament has specific qualification criteria, making
            it among the most exclusive events in professional golf. Automatic
            qualifiers include past Masters champions; winners of the most
            recent five U.S. Opens, British Opens, and PGA Championships;
            winners of the last three Players Championships; the top 12
            finishers from the prior year's Masters; the top 4 finishers from
            the last U.S. Open, British Open, and PGA Championship; victors of
            PGA Tour events from the previous Masters to the current one that
            grant full FedEx Cup points; those qualifying for the prior year's
            Tour Championship; and the top 50 players in the final Official
            World Golf Ranking of the preceding year.
          </Text>
          <Image
            style={TournamentStyles.image}
            source={require('../assets/images/AugustaLeaderboard.png')}
          />
          <Text style={TournamentStyles.text}>
            In general, the field for the Masters is smaller than for other
            majors, with typically under 100 players competing.
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
            source={require('../assets/images/MastersTournamentHeader.png')}
          />
        </View>
        <Image
          style={TournamentStyles.image}
          source={require('../assets/images/AugustaClubhouse.png')}
        />
        <TournamentSubheading
          location="Augusta National Golf Club, Augusta, Georgia"
          when="2nd week of April"
          firstPlayed="March, 1934"
          organizedBy="Augusta National Golf Club"
          fieldSize="typically between 90-100"
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
          Visit masters.com or download the official Masters App for more
          details.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MastersScreen;
