import React, {useState} from 'react';
import {Text, ScrollView, Image, SafeAreaView} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import TournamentSubheading from '../components/TournamentSubheading';
import TournamentStyles from '../styles/TournamentStyles';
import Separator from '../components/Separator';
import {renderHeader, renderContent} from '../components/AccordionHelpers';
import {GolfGrey} from '../styles/Colors';

const PGAChampionshipScreen: React.FC = () => {
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
            The PGA Championship, first played in 1916, is the youngest of the
            four majors and the second major championship in golf’s annual
            rotation each May. Originally a match play event, it changed to
            stroke play in 1958. Perennially featuring the strongest field in
            the men's game based on the Official World Golf Rankings, it is
            known for dramatic finishes and notable champions, with the
            Wanamaker Trophy inscribed with names such as Walter Hagen, Ben
            Hogan, Jack Nicklaus, Tiger Woods, Brooks Koepka, and Rory McIlroy.
          </Text>
          <Text style={TournamentStyles.text}>
            As the only major championship for professionals, and by
            professionals, the PGA Championship has a unique influence on the
            future of golf. It serves as an inspiration to golfers everywhere by
            challenging the premier athletes and showcasing the PGA
            Professionals who are the backbone of the game.
          </Text>
        </>
      ),
    },
    {
      title: 'Field',
      content: (
        <>
          <Text style={TournamentStyles.text}>
            The PGA Championship is a bit different from the other majors in
            terms of its field. It tends to have more club professionals in its
            ranks, as 20 spots in the tournament are reserved for club
            professionals who perform well in the PGA Professional National
            Championship.
          </Text>
          <Image
            style={TournamentStyles.image}
            source={require('../assets/images/BrooksPGATrophy.png')}
          />
        </>
      ),
    },
    {
      title: 'Club Professionals',
      content: (
        <>
          <Text style={TournamentStyles.text}>
            In the world of golf, the term "club professional" generally refers
            to a professional golfer who works at a specific golf course or
            club, typically in a role that involves both playing and teaching
            the game, as well as managing golf operations. Their duties often
            include giving lessons to members, organizing tournaments and
            events, managing the pro shop, and promoting golf at the grassroots
            level. Some club professionals may also play competitively in
            regional tournaments or in events organized by the PGA of America.
          </Text>
          <Text style={TournamentStyles.text}>
            In general, the level of playing skill among touring professionals
            is higher than among club professionals. Touring professionals are
            essentially the top tier of golfers in the world. However, many club
            professionals are also highly skilled players. In fact, the PGA of
            America, which represents club professionals in the United States,
            reserves spots in the field of the PGA Championship for the top 20
            finishers in the PGA Professional National Championship, effectively
            giving the best club professionals a chance to compete against the
            top touring professionals in a major championship.
          </Text>
          <Image
            style={TournamentStyles.image}
            source={require('../assets/images/MichaelBlock.png')}
          />
        </>
      ),
    },
    {
      title: 'Course Selection',
      content: (
        <>
          <Text style={TournamentStyles.text}>
            The PGA Championship is played at various courses around the United
            States, which are selected by the PGA of America. These have
            included both private clubs and public courses.
          </Text>

          <Image
            style={TournamentStyles.image}
            source={require('../assets/images/OakHill.png')}
          />
        </>
      ),
    },
  ];

  return (
    <SafeAreaView style={TournamentStyles.container}>
      <ScrollView contentContainerStyle={TournamentStyles.content}>
        <Image
          style={TournamentStyles.image}
          source={require('../assets/images/Wanamaker.png')}
        />

        <TournamentSubheading
          location="rotation of courses in the United States"
          when="May"
          firstPlayed="1916"
          organizedBy="Professional Golfers' Association of America (PGA of America)"
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
          Visit pgachampionship.com for more details.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PGAChampionshipScreen;
