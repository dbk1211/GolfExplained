import React from 'react';
import {View, Text} from 'react-native';
import {ExpandIcon, CollapseIcon} from '../assets/FontAwesomeIcons';
import TournamentStyles from '../styles/TournamentStyles';
import {GolfDarkGreen} from '../styles/Colors';

type Section = {
  title: string;
  content: JSX.Element;
};

export const renderHeader = (section: Section, _: any, isActive: boolean) => (
  <View style={TournamentStyles.header}>
    <Text style={TournamentStyles.title}>{section.title}</Text>
    {isActive ? (
      <CollapseIcon
        color={GolfDarkGreen}
        size={24}
        style={TournamentStyles.icon}
      />
    ) : (
      <ExpandIcon
        color={GolfDarkGreen}
        size={24}
        style={TournamentStyles.icon}
      />
    )}
  </View>
);

export const renderContent = (section: Section) => (
  <View style={TournamentStyles.biographyContainer}>{section.content}</View>
);
