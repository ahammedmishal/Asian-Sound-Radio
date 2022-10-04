import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, ICONS, IMAGES} from '../constants';
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const HomeScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={IMAGES.IMG_BACK1}
      style={styles.container}
      resizeMode="stretch">
      <StatusBar
        barStyle="light-content"
        backgroundColor="rgba(0, 0, 0, 0.20)"
        translucent
      />
      <View style={{height: responsiveHeight(30)}}>
        {/* header */}
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.headerIconConatiner}
            onPress={() => navigation.openDrawer()}>
            <Image source={ICONS.drawer} style={styles.drawerIconImage} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Asian Sound Radio</Text>
        </View>

        {/* contents */}
        <View style={styles.contentContainer}>
          <Text style={styles.subHeading}>
            You are currently listening to...
          </Text>
          <Image source={IMAGES.ASIAN} style={styles.logoImage} />
        </View>
      </View>

      {/* buttons */}
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.buttonIconContainer}>
          <Image source={ICONS.play} style={styles.buttonIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonIconContainer}>
          <Image source={ICONS.pause} style={styles.buttonIcon} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    justifyContent: 'space-between',
  },
  imageBackground: {
    flex: 1,
    height: '100%',
    width: '100%',
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
  subHeading: {
    fontSize: responsiveFontSize(2.2),
    color: COLORS.white,
  },
  contentContainer: {
    alignItems: 'center',
    marginTop: responsiveWidth(2),
  },
  buttonView: {
    marginBottom: responsiveHeight(10),
    flexDirection: 'row',
    alignSelf: 'center',
  },
  buttonIconContainer: {
    width: responsiveWidth(12),
    height: responsiveWidth(12),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    margin: 5,
  },
  buttonIcon: {
    width: responsiveWidth(12),
    height: responsiveWidth(12),
  },
  logoImage: {
    width: responsiveWidth(80),
    height: responsiveHeight(6.5),
    marginTop: responsiveHeight(1.2),
    resizeMode: 'contain',
  },
});

export default HomeScreen;
