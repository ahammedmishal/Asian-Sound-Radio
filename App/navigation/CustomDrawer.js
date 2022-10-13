import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  ImageBackground,
  Linking,
  Alert,
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

const sendWhatsAppMessage = () => {
  let link = 'https://api.whatsapp.com/send?text=Hi&phone=+4407703403020';
  if (link) {
    Linking.canOpenURL(link)
      .then(supported => {
        if (!supported) {
          Alert.alert('Please install whats app to send direct message');
        } else {
          return Linking.openURL(link);
        }
      })
      .catch(err => console.error('An error occurred', err));
  } else {
    console.log('sendWhatsAppMessage -----> ', 'message link is undefined');
  }
};

function CustomDrawer({navigation, props}) {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{flex: 1, paddingTop: 0}}>
      {/* header */}
      <ImageBackground source={IMAGES.IMG_BACK3} style={{flex: 1}}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="rgba(0, 0, 0, 0.20)"
          translucent
        />

        {/* header */}
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.headerIconConatiner}
            onPress={() => navigation.closeDrawer()}>
            <Image source={ICONS.drawer} style={styles.drawerIconImage} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Asian Sound Radio</Text>
        </View>

        <View style={{marginBottom: responsiveHeight(1.8)}}>
          <Image
            source={IMAGES.ASIAN}
            resizeMode="contain"
            style={styles.logoImage}
          />
        </View>

        <View style={{flex: 1, justifyContent: 'space-around'}}>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('HomeScreen')}
              style={styles.drawerItemView}>
              <Image
                source={ICONS.Radio}
                resizeMode="contain"
                style={styles.drawerItemsLogo}
              />
              <Text style={styles.drawerItemText}>Live Radio</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('PhotoGallery')}
              style={styles.drawerItemView}>
              <Image
                source={ICONS.Gallery}
                resizeMode="contain"
                style={styles.drawerItemsLogo}
              />
              <Text style={styles.drawerItemText}>Photo Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('FutureEvents')}
              style={styles.drawerItemView}>
              <Image
                source={ICONS.Event}
                resizeMode="contain"
                style={styles.drawerItemsLogo}
              />
              <Text style={styles.drawerItemText}>Events</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Advertise')}
              style={styles.drawerItemView}>
              <Image
                source={ICONS.Advertise}
                resizeMode="contain"
                style={styles.drawerItemsLogo}
              />
              <Text style={styles.drawerItemText}>Advertise with us</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Competition')}
              style={styles.drawerItemView}>
              <Image
                source={ICONS.Competition}
                resizeMode="contain"
                style={styles.drawerItemsLogo}
              />
              <Text style={styles.drawerItemText}>Competition</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('ContactScreen')}
              style={styles.drawerItemView}>
              <Image
                source={ICONS.Contact}
                resizeMode="contain"
                style={styles.drawerItemsLogo}
              />
              <Text style={styles.drawerItemText}>Contact</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.socialMediaContainer}>
            <View style={styles.socialMediaView}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL('https://www.facebook.com/asiansoundradio');
                }}>
                <Image
                  source={ICONS.facebook}
                  resizeMode="contain"
                  style={styles.socialIcons}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => sendWhatsAppMessage()}>
                <Image
                  source={ICONS.whatsapp}
                  resizeMode="contain"
                  style={styles.socialIcons}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL('https://twitter.com/asiansoundradio');
                }}>
                <Image
                  source={ICONS.twitter}
                  resizeMode="contain"
                  style={styles.socialIcons}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL('https://www.instagram.com/asiansoundradio');
                }}>
                <Image
                  source={ICONS.insta}
                  resizeMode="contain"
                  style={styles.socialIcons}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: responsiveWidth(7),
    height: responsiveHeight(12),
    paddingTop: responsiveHeight(5),
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
    width: responsiveWidth(5.6),
    height: responsiveHeight(2.8),
    resizeMode: 'contain',
  },
  logoImage: {
    width: responsiveWidth(80),
    height: responsiveHeight(8),
    marginTop: responsiveHeight(1),
    alignSelf: 'center',
  },
  drawerItemsLogo: {
    width: responsiveWidth(11),
    height: responsiveHeight(4.2),
    marginRight: responsiveWidth(4),
  },
  drawerItemView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: responsiveWidth(5),
    marginVertical: responsiveHeight(1.3),
    alignItems: 'center',
  },
  drawerItemText: {
    color: COLORS.white,
    fontSize: responsiveFontSize(2.6),
    fontFamily: FONTS.h3.fontFamily,
    marginTop: responsiveHeight(1),
  },
  socialMediaContainer: {
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
