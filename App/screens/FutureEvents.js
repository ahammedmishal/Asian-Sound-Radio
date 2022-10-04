import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {COLORS, FONTS, ICONS, IMAGES} from '../constants';
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const screenWidth = Dimensions.get('screen').width;
import Svg, {
  Circle,
  Ellipse,
  G,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';
import Curve from '../Components/Curve';

const FutureEvents = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="rgba(0, 0, 0, 0.20)"
        translucent
      />

      {/* Container View */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.headerIconConatiner}
          onPress={() => navigation.openDrawer()}>
          <Image source={ICONS.drawer} style={styles.drawerIconImage} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Future Events</Text>
      </View>

      {/* content */}
      <View>
        <Text style={styles.heading}>
          Watch this space for
          {'\n'}
          upcoming events...
        </Text>
      </View>

      <Curve />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  contentContainer: {
    width: '100%',
    paddingHorizontal: responsiveWidth(7),
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: responsiveHeight(5),
    paddingLeft: responsiveWidth(7),
    height: responsiveHeight(12),
  },
  headerText: {
    fontSize: responsiveFontSize(2.1),
    fontFamily: FONTS.h4.fontFamily,
    color: COLORS.white,
    paddingLeft: 5,
  },
  headerIconConatiner: {
    width: responsiveWidth(10),
    height: responsiveWidth(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  drawerIconImage: {
    width: responsiveWidth(7),
    height: responsiveHeight(2.4),
    resizeMode: 'contain',
  },
  heading: {
    fontSize: responsiveFontSize(3.5),
    color: COLORS.white,
    fontFamily: FONTS.h4.fontFamily,
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
  },
  subHeading: {
    fontSize: responsiveFontSize(2.5),
    color: COLORS.white,
    fontFamily: FONTS.h4.fontFamily,
  },
});

export default FutureEvents;
