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
import {StatusBarHeight} from '../constants/theme';
import GalleryButton from '../Components/GalleryButton';

const PhotoGallery = ({navigation}) => {
  return (
    <ImageBackground
      source={IMAGES.IMG_BACK5}
      style={styles.container}
      resizeMode="stretch">
      <StatusBar
        barStyle="light-content"
        backgroundColor="rgba(0, 0, 0, 0.20)"
        translucent
      />
      {/* header */}
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.headerIconConatiner}
            onPress={() => navigation.openDrawer()}>
            <Image source={ICONS.drawer} style={styles.drawerIconImage} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Photo Gallery</Text>
        </View>
        {/* container View */}
        <View>
          <Image source={IMAGES.ASIAN} style={styles.assianLogo} />
        </View>
        {/* gallery Button */}
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          alignItems:'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <GalleryButton
            height={responsiveHeight(13)}
            width={responsiveWidth(30)}
          />
          <GalleryButton
            height={responsiveHeight(13)}
            width={responsiveWidth(30)}
          />
          <GalleryButton
            height={responsiveHeight(13)}
            width={responsiveWidth(30)}
          />
        </View>

        <View>
          <GalleryButton
            height={responsiveHeight(33)}
            width={responsiveWidth(94)}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <GalleryButton
            height={responsiveHeight(16)}
            width={responsiveWidth(46)}
          />
          <GalleryButton
            height={responsiveHeight(16)}
            width={responsiveWidth(46)}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <GalleryButton
            height={responsiveHeight(13)}
            width={responsiveWidth(30)}
          />
          <GalleryButton
            height={responsiveHeight(13)}
            width={responsiveWidth(30)}
          />
          <GalleryButton
            height={responsiveHeight(13)}
            width={responsiveWidth(30)}
          />
        </View>
      </View>
    </ImageBackground>
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
  assianLogo: {
    width: responsiveWidth(80),
    height: responsiveHeight(8),
    resizeMode: 'contain',
    marginVertical: responsiveHeight(2),
    alignSelf: 'center',
  },
});

export default PhotoGallery;
