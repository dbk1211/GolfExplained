import React, {useState} from 'react';
import {Text, ScrollView, Image, SafeAreaView} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import TournamentSubheading from '../components/TournamentSubheading';
import TournamentStyles from '../styles/TournamentStyles';
import Separator from '../components/Separator';
import {renderHeader, renderContent} from '../components/AccordionHelpers';
import {GolfGrey} from '../styles/Colors';

const ThePLAYERSChampionshipScreen: React.FC = () => {
  const [activeSections, setActiveSections] = useState<number[]>([]);
  const updateSections = (activeSectionsUpdate: number[]) => {
    setActiveSections(activeSectionsUpdate);
  };

  const sections = [
    {
      title: '"The Fifth Major"',
      content: (
        <>
          <Text style={TournamentStyles.text}>
            Although it's not officially a major championship, The PLAYERS is
            often referred to as the "fifth major" because of its prestige, the
            strength of its field, and its large purse. It is considered to be
            the "crown jewel" of the PGA Tour season.
          </Text>
          <Image
            style={TournamentStyles.image}
            source={require('../assets/images/PlayersGallery.png')}
          />
          <Text style={TournamentStyles.text}>
            Notable past winners include: Scottie Scheffler, Justin Thomas, Rory
            McIlroy, Jason Day, Rickie Fowler, Tiger Woods, and Jack Nicklaus.
          </Text>
        </>
      ),
    },
    {
      title: 'Field',
      content: (
        <>
          <Text style={TournamentStyles.text}>
            The field for the PLAYERS Championship is limited to 144 players,
            which is smaller than the fields for the four major championships.
            The tournament has its own set of qualification criteria, which are
            designed to bring together a strong and diverse field of players.
          </Text>
          <Image
            style={TournamentStyles.image}
            source={require('../assets/images/PlayersTrophyClose.png')}
          />
          <Text style={TournamentStyles.text}>
            Players qualify by winning a PGA Tour event since the last "PLAYERS"
            was held, being ranked in the top 125 in the points list on the PGA
            Tour from the previous season, or being a previous major
            championship or PLAYERS championship winner in the last 5 seasons,
            or other special exemptions.
          </Text>
        </>
      ),
    },
    {
      title: 'The Course',
      content: (
        <>
          <Text style={TournamentStyles.text}>
            TPC Sawgrass is a Pete Dye-designed course, one of the most
            influential golf course architects of the 20th century. Dye is known
            for his challenging designs that often incorporate psychological
            elements to test golfers' nerve and decision-making skills.
          </Text>
          <Image
            style={TournamentStyles.image}
            source={require('../assets/images/sawgrassfinalhole.png')}
          />
          <Text style={TournamentStyles.text}>
            TPC Sawgrass was one of the first "stadium" golf courses, designed
            with the spectator experience in mind. The course features mounding
            around the holes that allows for large galleries of spectators. This
            was a revolutionary concept when the course was built in the early
            1980s and has since been adopted by many other tournament venues.
          </Text>
          <Image
            style={TournamentStyles.image}
            source={require('../assets/images/sawgrasscrowd.png')}
          />
          <Text style={TournamentStyles.text}>
            TPC Sawgrass is perhaps best known for its 17th hole, a par-3 with
            an island green. It's one of the most famous holes in golf. While
            it's not long by professional standards -- typically playing between
            120 and 150 yards -- the hole is almost entirely surrounded by
            water, making it a significant test of precision and nerve.
          </Text>
          <Image
            style={TournamentStyles.image}
            source={require('../assets/images/IslandHole.png')}
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
          source={require('../assets/images/ThePlayersHeader.png')}
        />

        <TournamentSubheading
          location="TPC Sawgrass, Ponte Vedra Beach, Florida"
          when="March"
          firstPlayed="1974"
          organizedBy="The PGA Tour"
          fieldSize="144"
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
          Visit theplayers.com or download the official PGA Tour App for more
          details.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ThePLAYERSChampionshipScreen;
