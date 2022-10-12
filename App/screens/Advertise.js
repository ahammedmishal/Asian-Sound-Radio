import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {COLORS, FONTS, IMAGES, SIZES, ICONS} from '../constants';
import {StatusBarHeight} from '../constants/theme';
import FormField from '../Components/FormButton';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Advertise = ({navigation}) => {
  return (
    <ImageBackground
      source={IMAGES.IMG_BACK3}
      style={styles.container}
      resizeMode="stretch">
      <StatusBar
        barStyle="light-content"
        backgroundColor="rgba(0, 0, 0, 0.20)"
        translucent
      />
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.headerIconConatiner}
          onPress={() => navigation.openDrawer()}>
          <Image source={ICONS.drawer} style={styles.drawerIconImage} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Contact</Text>
      </View>

      {/* Image View */}
      <View style={{alignItems: 'center'}}>
        <Image source={IMAGES.ASIAN} style={styles.assianLogo} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingLeft: responsiveWidth(10)}}>
        <View>
          <Text style={styles.heading}>Contact us</Text>
          <Text style={styles.subHeading}>
            Thank you for contacting us.
            {'\n'}
            please use the following ways to contact us.
          </Text>
          <Text style={styles.subHeading}>We wil reach out to you as</Text>
          <Text style={styles.subHeading}>soon as possible.</Text>
        </View>

        <View style={{flexDirection: 'row', marginTop: responsiveHeight(4)}}>
          <Image source={ICONS.Contact_Icon} style={styles.contactIcons} />
          <Text style={styles.contactText}>
            0161 288 1000{'\n'}
            0161 288 2000{'\n'}
            0161 288 3000
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: responsiveHeight(2),
            alignItems: 'center',
          }}>
          <Image source={ICONS.Email} style={styles.contactIcons} />
          <Text style={styles.contactText}>enquiries@asiansoundradio.com</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: responsiveHeight(3),
            alignItems: 'center',
          }}>
          <Image source={ICONS.Website} style={styles.contactIcons} />
          <Text style={styles.contactText}>www.asiansoundradio.com</Text>
        </View>

        <View style={{flexDirection: 'row', marginTop: responsiveHeight(3.2)}}>
          <Image source={ICONS.Location} style={styles.contactIcons} />
          <Text style={styles.contactText}>
            Asian Sound Radio,{'\n'}
            Broadcast House,{'\n'}
            42 Sounthail Street,{'\n'}
            Manchester,{'\n'}
            M3 1LG
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
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
    fontSize: responsiveFontSize(4),
    color: COLORS.white,
    fontFamily: FONTS.h4.fontFamily,
  },
  subHeading: {
    fontSize: responsiveFontSize(2.5),
    color: COLORS.white,
    fontFamily: FONTS.h4.fontFamily,
  },
  contactIcons: {
    width: responsiveWidth(5),
    height: responsiveWidth(5),
    resizeMode: 'contain',
    marginRight: responsiveHeight(1),
  },
  contactText: {
    color: COLORS.white,
    fontSize: responsiveFontSize(2),
    fontFamily: FONTS.h4.fontFamily,
  },
  assianLogo: {
    width: responsiveWidth(80),
    height: responsiveHeight(8),
    resizeMode: 'contain',
    marginVertical: responsiveHeight(2),
  },
  formFieldView: {
    width: '100%',
    alignItems: 'center',
  },
  submitButtonView: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: '100%',
    width: responsiveWidth(12),
    borderTopRightRadius: responsiveWidth(10),
    borderBottomRightRadius: responsiveWidth(10),
  },
  TextInputStyleClass: {
    width: '100%',
    height: '100%',
    borderRadius: 35,
    backgroundColor: 'white',
    fontSize: SIZES.h4,
    fontFamily: FONTS.h3.fontFamily,
    lineHeight: FONTS.h3.lineHeight,
    paddingTop: 20,
    paddingLeft: 30,
  },
  submitButton: {
    width: responsiveWidth(40),
    height: responsiveHeight(7),
    borderRadius: responsiveWidth(10),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff1b00',
    marginTop: responsiveHeight(1),
  },
  submitButtonText: {
    color: COLORS.white,
    fontSize: responsiveFontSize(2.2),
    fontWeight: 'bold',
    paddingLeft: responsiveWidth(8),
  },
  gradient: {
    flex: 1,
    width: '100%',
    borderRadius: responsiveWidth(10),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomText: {
    flex: 1,
    color: COLORS.white,
    fontSize: responsiveFontSize(2.8),
    fontWeight: 'bold',
    paddingHorizontal: responsiveWidth(7),
    marginTop: responsiveHeight(1),
    fontFamily: FONTS.h3.fontFamily,
  },
});

export default Advertise;
