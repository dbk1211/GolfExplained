import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faCog,
  faGolfBallTee,
  faTrophy,
  faPersonWalking,
  faArrowLeft,
  faBook,
  faGraduationCap,
  faListCheck,
  faX,
  faChevronUp,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faTimes,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';

export const HomeIcon = ({color, size}) => (
  <FontAwesomeIcon icon={faHome} size={size} color={color} testID="Home Icon" />
);

export const SettingsIcon = ({color, size}) => (
  <FontAwesomeIcon
    icon={faCog}
    size={size}
    color={color}
    testID="Settings Icon"
  />
);

export const BasicsIcon = ({color, size}) => (
  <FontAwesomeIcon
    icon={faGolfBallTee}
    size={size}
    color={color}
    testID="Basics Icon"
  />
);

export const QuizzesIcon = ({color, size}) => (
  <FontAwesomeIcon
    icon={faListCheck}
    size={size}
    color={color}
    testID="Quizzes Icon"
  />
);

export const TournamentsIcon = ({color, size}) => (
  <FontAwesomeIcon
    icon={faTrophy}
    size={size}
    color={color}
    testID="Tournaments Icon"
  />
);

export const GolfersIcon = ({color, size}) => (
  <FontAwesomeIcon
    icon={faPersonWalking}
    size={size}
    color={color}
    testID="Golfers Icon"
  />
);

export const BackIcon = ({color, size}) => (
  <FontAwesomeIcon
    icon={faArrowLeft}
    size={size}
    color={color}
    testID="Back Icon"
  />
);

export const TerminologyIcon = ({color, size}) => (
  <FontAwesomeIcon
    icon={faBook}
    size={size}
    color={color}
    testID="Terminology Icon"
  />
);

export const AskUsIcon = ({color, size}) => (
  <FontAwesomeIcon
    icon={faGraduationCap}
    size={size}
    color={color}
    testID="Ask Us Icon"
  />
);

export const CloseXIcon = ({color, size}) => (
  <FontAwesomeIcon icon={faX} size={size} color={color} testID="X Icon" />
);

export const ExpandIcon = ({color, size, style}) => (
  <FontAwesomeIcon
    icon={faChevronDown}
    size={size}
    color={color}
    style={style}
    testID="Expand Icon"
  />
);

export const CollapseIcon = ({color, size, style}) => (
  <FontAwesomeIcon
    icon={faChevronUp}
    size={size}
    color={color}
    style={style}
    testID="Collapse Icon"
  />
);

export const ArrowLeftIcon = ({color, size, style = {}}) => (
  <FontAwesomeIcon
    icon={faChevronLeft}
    size={size}
    color={color}
    style={style}
    testID="Arrow Left Icon"
  />
);

export const ArrowRightIcon = ({color, size, style = {}}) => (
  <FontAwesomeIcon
    icon={faChevronRight}
    size={size}
    color={color}
    style={style}
    testID="Arrow Right Icon"
  />
);

export const CloseIcon = ({color, size, style = {}}) => (
  <FontAwesomeIcon
    icon={faTimes}
    size={size}
    color={color}
    style={style}
    testID="Close Icon"
  />
);

export const CheckIcon = ({color, size, style = {}}) => (
  <FontAwesomeIcon
    icon={faCheck}
    size={size}
    color={color}
    style={style}
    testID="Check Icon"
  />
);
