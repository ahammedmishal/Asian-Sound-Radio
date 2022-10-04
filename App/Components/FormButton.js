import React from 'react';
import {View, StyleSheet, TextInput, Platform} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';
import LinearGradient from 'react-native-linear-gradient';
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const FormField = ({placeholderText, ...rest}) => {
  return (
    <View style={styles.containerView}>
      <LinearGradient
        angle={100}
        useAngle
        colors={['#00d2f2', '#d81ceb']}
        style={styles.LinearGradientStyle}>
        <TextInput
          placeholder={placeholderText}
          placeholderTextColor={COLORS.black}
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
        />
      </LinearGradient>
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({
  containerView: {
    width: responsiveWidth(100),
    alignItems: 'center',
    paddingBottom: responsiveHeight(2),
  },
  LinearGradientStyle: {
    height: responsiveHeight(8),
    width: responsiveWidth(80),
    borderRadius: responsiveWidth(10),
    justifyContent: 'center',
    alignItems: 'center',
    padding: responsiveWidth(0.8),
  },
  TextInputStyleClass: {
    width: '100%',
    height: '100%',
    borderRadius: responsiveWidth(10),
    backgroundColor: 'white',
    fontSize: responsiveFontSize(1.8),
    fontFamily: FONTS.h3.fontFamily,
    paddingTop: Platform.OS == 'ios' ? 0 : responsiveHeight(2),
    paddingLeft: responsiveWidth(5),
    color: COLORS.black,
  },
});
