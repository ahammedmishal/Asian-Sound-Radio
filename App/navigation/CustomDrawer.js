import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  ImageBackground,
} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {COLORS, FONTS, SIZES} from '../constants/theme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ICONS, IMAGES} from '../constants';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

function CustomDrawer({navigation, props}) {
  return (
    <DrawerContentScrollView {...props}>
      {/* header */}
      <ImageBackground source={IMAGES.IMG_BACK3} style={{flex: 1}}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="rgba(0, 0, 0, 0.20)"
          translucent
        />

        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.headerIconConatiner}
            onPress={() => navigation.closeDrawer()}>
            <Image source={ICONS.drawer} style={styles.drawerIconImage} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Asian Sound Radio</Text>
        </View>

        <View style={{marginBottom: responsiveHeight(1.8)}}>
          <Image source={IMAGES.ASIAN} resizeMode="contain" style={styles.logoImage} />
        </View>

        <View>
          <View style={styles.drawerItemView}>
            <Image
              source={ICONS.Radio}
              resizeMode="contain"
              style={styles.drawerItemsLogo}
            />
            <Text style={styles.drawerItemText}>Live Radio</Text>
          </View>
          <View style={styles.drawerItemView}>
            <Image
              source={ICONS.Gallery}
              resizeMode="contain"
              style={styles.drawerItemsLogo}
            />
            <Text style={styles.drawerItemText}>Photo Gallery</Text>
          </View>
          <View style={styles.drawerItemView}>
            <Image
              source={ICONS.Event}
              resizeMode="contain"
              style={styles.drawerItemsLogo}
            />
            <Text style={styles.drawerItemText}>Events</Text>
          </View>
          <View style={styles.drawerItemView}>
            <Image
              source={ICONS.Alarm}
              resizeMode="contain"
              style={styles.drawerItemsLogo}
            />
            <Text style={styles.drawerItemText}>Alarm</Text>
          </View>
          <View style={styles.drawerItemView}>
            <Image
              source={ICONS.Advertise}
              resizeMode="contain"
              style={styles.drawerItemsLogo}
            />
            <Text style={styles.drawerItemText}>Advertise with us</Text>
          </View>
          <View style={styles.drawerItemView}>
            <Image
              source={ICONS.facebook}
              resizeMode="contain"
              style={styles.drawerItemsLogo}
            />
            <Text style={styles.drawerItemText}>Competition</Text>
          </View>
          <View style={styles.drawerItemView}>
            <Image
              source={ICONS.facebook}
              resizeMode="contain"
              style={styles.drawerItemsLogo}
            />
            <Text style={styles.drawerItemText}>Contact</Text>
          </View>
        </View>

        <View style={styles.socialMediaContainer}>
          <View style={styles.socialMediaView}>
            <Image
              source={ICONS.facebook}
              resizeMode="contain"
              style={styles.socialIcons}
            />
            <Image
              source={ICONS.whatsapp}
              resizeMode="contain"
              style={styles.socialIcons}
            />
            <Image
              source={ICONS.twitter}
              resizeMode="contain"
              style={styles.socialIcons}
            />
            <Image
              source={ICONS.insta}
              resizeMode="contain"
              style={styles.socialIcons}
            />
          </View>
        </View>
      </ImageBackground>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: responsiveWidth(4),
    marginBottom: responsiveHeight(2),
  },
  headerText: {
    fontSize: responsiveFontSize(2),
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
    width: responsiveWidth(5.6),
    height: responsiveHeight(2.8),
    resizeMode: 'contain',
  },
  logoImage: {
    width: responsiveWidth(80),
    height: responsiveHeight(8),
    marginTop: responsiveHeight(1),
    alignSelf:'center'
  },
  drawerItemsLogo: {
    width: responsiveWidth(13),
    height: responsiveHeight(6),
    marginRight: responsiveWidth(3),
  },
  drawerItemView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: responsiveWidth(5),
    marginVertical: responsiveHeight(1),
  },
  drawerItemText: {
    color: COLORS.white,
    fontSize: responsiveFontSize(2.3),
    fontFamily: FONTS.h3.fontFamily,
  },
  socialMediaContainer: {
    marginTop: responsiveHeight(5),
    marginHorizontal: responsiveWidth(5),
  },
  socialMediaView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  socialIcons: {
    width: responsiveWidth(20),
    height: responsiveHeight(9),
  },
});

export default CustomDrawer;
