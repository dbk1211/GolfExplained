import React, {useState} from 'react';
import {View, Text, ScrollView, Image, SafeAreaView} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import TournamentSubheading from '../components/TournamentSubheading';
import TournamentStyles from '../styles/TournamentStyles';
import Separator from '../components/Separator';
import {renderHeader, renderContent} from '../components/AccordionHelpers';
import {FontStyles} from '../styles/FontStyles';

const RyderCupScreen: React.FC = () => {
  const [activeSections, setActiveSections] = useState<number[]>([]);
  const updateSections = (activeSectionsUpdate: number[]) => {
    setActiveSections(activeSectionsUpdate);
  };

  const sections = [
    {
      title: 'Team Format',
      content: (
        <>
          <Image
            style={TournamentStyles.image}
            source={require('../assets/images/FinauRyder.png')}
          />
          <Text style={TournamentStyles.text}>
            The Ryder Cup is a unique event in the world of professional golf
            because it's a team event, unlike most golf tournaments that are
            individual competitions. The competition takes place over three
            days, and there are a total of 28 matches between two teams, one
            representing Europe and the other representing the United States.
          </Text>
          <Text style={TournamentStyles.text}>
            Each team is made up of 12 players and a non-playing captain, who is
            responsible for strategy decisions such as deciding the player
            pairings for each session and the order in which they play. The
            captain can consult with vice-captains and players, but ultimately,
            the final decision is his.
          </Text>
          <Image
            style={TournamentStyles.image}
            source={require('../assets/images/USRyderTeam2021.png')}
          />
          <Text style={TournamentStyles.text}>
            The format of the matches across the three days is as follows:
          </Text>
          <Text style={FontStyles.bold}>
            Day 1 & Day 2 (Friday and Saturday):
          </Text>
          <Text style={TournamentStyles.text}>
            On each of the first two days, there are four matches of Fourball
            and four matches of Foursomes, each format involving pairs of
            golfers from each team.
          </Text>
          <Text style={TournamentStyles.text}>
            <Text style={FontStyles.semiBoldItalic}>Fourball:</Text> In
            Fourball, each of the four golfers plays their own ball throughout
            the round. The lowest individual score on each hole counts as the
            team's score. For instance, if Player A and B are a team, and Player
            A scores 4 and Player B scores 5 on a hole, the team score is 4.
          </Text>
          <Text style={TournamentStyles.text}>
            <Text style={FontStyles.semiBoldItalic}>Foursomes:</Text> In
            Foursomes, also known as alternate shot, each two-man team plays one
            ball per hole with the players taking turns with each shot. For
            example, Player A tees off, Player B hits the second shot, Player A
            hits the third, and so on until the hole is completed. The team with
            the lowest score on each hole wins that hole.
          </Text>
          <Text style={TournamentStyles.text}>
            In both Foursomes and Fourball, the matches are played in a
            match-play format, meaning the game is played by hole. If one pair
            beats the other pair on a hole, they go 1 Up, with the aim to be Up
            more holes than there are holes left to play.
          </Text>
          <Text style={FontStyles.bold}>Day 3 (Sunday):</Text>
          <Text style={TournamentStyles.text}>
            On the final day, all 12 players from each team compete in{' '}
            <Text style={FontStyles.semiBoldItalic}>Singles </Text>
            matches, in which one player from the European team faces one player
            from the U.S. team. Again, these matches are played in a match-play
            format.
          </Text>
          <Text style={TournamentStyles.text}>
            Each match is worth one point, with matches ending in a draw worth
            half a point to each team. There are 28 points up for grabs over the
            three days. The team that scores at least 14.5 points wins the Ryder
            Cup. If the matches end in a 14-14 tie, the team holding the Ryder
            Cup retains it.
          </Text>
          <Image
            style={TournamentStyles.image}
            source={require('../assets/images/RyderWin.png')}
          />
        </>
      ),
    },
    {
      title: 'History',
      content: (
        <>
          <Image
            style={TournamentStyles.image}
            source={require('../assets/images/FirstRyder.png')}
          />
          <Text style={TournamentStyles.text}>
            The inception of the Ryder Cup goes back to an unofficial
            international match held in 1926 at Wentworth Club in England. The
            competition took place between a team of American professionals
            visiting Britain for the British Open, and a team of British
            professionals. The match, consisting of 5 foursomes in the morning
            and 10 singles in the afternoon, was won by the British team, 13 ½
            to 1 ½. The event was a great success and Samuel Ryder, a successful
            English businessman and golf enthusiast, decided to donate a trophy
            to formalize the competition. He commissioned a gold cup that cost
            £250 and the event became known as the Ryder Cup.
          </Text>
          <Text style={TournamentStyles.text}>
            The first official Ryder Cup was held in 1927 at Worcester Country
            Club in Massachusetts, USA. At this time, the competition was
            between the United States and Great Britain. The American team,
            captained by Walter Hagen, won the inaugural event. The format of
            the Ryder Cup has changed over the years, but it has always involved
            various match play competitions between players selected from two
            teams of 12.
          </Text>
          <Text style={TournamentStyles.text}>
            The Ryder Cup continued to be a competition between the USA and
            Great Britain until 1973, when it was expanded to include Ireland.
            The first Ryder Cup to feature a combined team of Great Britain and
            Ireland was held at Muirfield, Scotland.
          </Text>
          <Image
            style={TournamentStyles.image}
            source={require('../assets/images/RyderHistorical.png')}
          />
          <Text style={TournamentStyles.text}>
            Despite this expansion, American teams continued to dominate the
            Ryder Cup, leading to further changes in the composition of the
            non-US team. In 1979, players from continental Europe were allowed
            to participate, creating the current configuration of the United
            States versus Europe.
          </Text>
        </>
      ),
    },
    {
      title: 'Field',
      content: (
        <>
          <Text style={TournamentStyles.text}>
            The Ryder Cup is a team event, with each team comprised of 12
            players. Both the United States and European teams have a
            combination of automatic qualifiers and captain's picks, although
            the methods of selection have varied over time and differ between
            the two teams.
          </Text>
          <Image
            style={TournamentStyles.image}
            source={require('../assets/images/RyderCupCaptains.png')}
          />
          <Text style={TournamentStyles.text}>
            The selection process for the United States team has been based on a
            points system, with players earning points based on their
            performances in the major tournaments (The Masters, PGA
            Championship, U.S. Open, and The Open Championship) and PGA Tour
            events.
          </Text>
          <Text style={TournamentStyles.text}>
            The European team's selection process has been a bit more complex,
            involving points earned from two different sources. For the 2020
            Ryder Cup, the team included the top four players from the European
            Points List, followed by the top five players from the World Points
            List not already qualified. The remaining three players were
            selected as Captain's Picks by the team captain.
          </Text>
          <Image
            style={TournamentStyles.image}
            source={require('../assets/images/RyderEuro.png')}
          />
        </>
      ),
    },
    {
      title: 'Vocal, Partisan Atmosphere',
      content: (
        <>
          <Image
            style={TournamentStyles.image}
            source={require('../assets/images/USAFans.png')}
          />
          <Text style={TournamentStyles.text}>
            The Ryder Cup is known for its passionate, vocal, and sometimes
            rowdy crowds, which can be quite different from the usually more
            reserved atmosphere observed at most golf tournaments. Part of this
            is due to the event's team format, which encourages fans to openly
            support their side, much like in team sports like football or
            soccer. This creates an atmosphere that's unique in the world of
            professional golf.
          </Text>
          <Image
            style={TournamentStyles.image}
            source={require('../assets/images/EuroFans.png')}
          />
          <Text style={TournamentStyles.text}>
            Fans at the Ryder Cup often dress in team colors, sing chants and
            songs, and can get quite boisterous. They cheer enthusiastically
            when their team does well and often engage in friendly banter with
            fans supporting the opposing side. This enthusiastic and passionate
            atmosphere is generally seen as one of the hallmarks of the Ryder
            Cup, contributing to the event's popularity and reputation as one of
            golf's most exciting events.
          </Text>
          <Image
            style={TournamentStyles.image}
            source={require('../assets/images/RoryRyder.png')}
          />
          <Text style={TournamentStyles.text}>
            The players also show the most emotion you'll see all year. They're
            not just playing for themselves or for prize money; they're playing
            for their continent, their teammates, and their compatriots. This
            sense of representing something bigger than themselves brings out a
            strong sense of national pride and camaraderie among team members.
            Playing for one's country or continent can be an incredibly moving
            experience, and this collective spirit often translates into raw
            emotion, both on and off the course.
          </Text>
          <Image
            style={TournamentStyles.image}
            source={require('../assets/images/JTRyderEmotion.png')}
          />
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
            source={require('../assets/images/RyderCupBanner.png')}
          />
        </View>
        <TournamentSubheading
          location="alternates between various courses in Europe and the United States"
          when="September, biennially"
          firstPlayed="1927"
          organizedBy="Professional Golfers' Association of America and Ryder Cup Europe"
          fieldSize="12 players from the United States vs 12 players from Europe"
        />
        <Accordion
          sections={sections}
          underlayColor={'#ececec'}
          activeSections={activeSections}
          renderHeader={renderHeader}
          renderContent={renderContent}
          onChange={updateSections}
        />
        <Separator />
        <Text style={TournamentStyles.italicsText}>
          Visit rydercup.com for more details.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RyderCupScreen;
