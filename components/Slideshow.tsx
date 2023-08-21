import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Carousel} from 'react-native-snap-carousel-v4';
import {ScrollViewIndicator} from '@fanchenbao/react-native-scroll-indicator';
import {ArrowLeftIcon, ArrowRightIcon} from '../assets/FontAwesomeIcons';
import {GolfBallWhite, GolfGrassGreen, GolfYellow} from '../styles/Colors';
import {FontStyles} from '../styles/FontStyles';

interface Slide {
  id: string;
  image: any;
  title?: string;
  caption: string;
}

interface SlideshowProps {
  data: Slide[];
  itemWidth: number;
  itemHeight: number;
}

const Slideshow: React.FC<SlideshowProps> = ({data, itemWidth, itemHeight}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef<Carousel<Slide>>(null);

  const renderItem = ({item}: {item: Slide}) => (
    <SafeAreaView style={[styles.slide]}>
      <View style={[styles.imageContainer, {height: itemHeight * 0.7}]}>
        <Image
          style={[styles.image, {width: itemWidth, height: itemHeight * 0.7}]}
          source={item.image}
        />
      </View>
      <View style={styles.textContainer}>
        {item.title && <Text style={styles.title}>{item.title}</Text>}
        <View style={styles.captionContainer}>
          <ScrollViewIndicator indStyle={styles.scrollIndicator}>
            <Text style={styles.caption}>{item.caption}</Text>
          </ScrollViewIndicator>
        </View>
      </View>
    </SafeAreaView>
  );

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={data}
        renderItem={renderItem}
        sliderWidth={itemWidth}
        itemWidth={itemWidth}
        layout="default"
        loop
        onSnapToItem={setActiveSlide}
        vertical={false}
      />

      <View style={styles.navigationContainer}>
        <TouchableOpacity
          onPress={() =>
            carouselRef.current && carouselRef.current.snapToPrev()
          }>
          <ArrowLeftIcon color={GolfBallWhite} size={24} />
        </TouchableOpacity>
        <Text style={styles.counter}>
          {activeSlide + 1} of {data.length}
        </Text>
        <TouchableOpacity
          onPress={() =>
            carouselRef.current && carouselRef.current.snapToNext()
          }>
          <ArrowRightIcon color={GolfBallWhite} size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  slide: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imageContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  image: {
    resizeMode: 'contain',
  },
  textContainer: {
    justifyContent: 'center',
    width: '100%',
    marginTop: 15,
  },
  captionContainer: {
    maxHeight: 250,
    position: 'relative',
    backgroundColor: GolfGrassGreen,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
  },
  caption: {
    ...FontStyles.regular,
    marginVertical: 5,
    fontSize: 16,
    textAlign: 'center',
    color: GolfBallWhite,
    lineHeight: 25,
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  title: {
    ...FontStyles.bold,
    fontSize: 20,
    textAlign: 'center',
    color: GolfYellow,
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    width: '100%',
  },
  counter: {
    ...FontStyles.semiBoldItalic,
    fontSize: 14,
    color: GolfYellow,
  },
  scrollIndicator: {
    backgroundColor: GolfYellow,
  },
});

export default Slideshow;
