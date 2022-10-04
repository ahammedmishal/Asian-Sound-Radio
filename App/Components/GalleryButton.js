import React from 'react';
import {View, StyleSheet, TextInput, Platform, Image} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';
import LinearGradient from 'react-native-linear-gradient';
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const GalleryButton = ({height,width}) => {
  return (
    <View style={[styles.containerView,{width:width,height:height}]}>
      <LinearGradient
        angle={100}
        useAngle
        colors={['#00d2f2', '#d81ceb']}
        style={[styles.LinearGradientStyle,{height:height,width:width}]}>
        <View style={styles.viewStyle}></View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  containerView: {
    paddingBottom: responsiveHeight(2),
    borderRadius:4,
    marginHorizontal:responsiveWidth(1),
    marginBottom:responsiveHeight(1)
  },
  LinearGradientStyle: {
    borderRadius: responsiveWidth(2),
    justifyContent: 'center',
    alignItems: 'center',
    padding: responsiveWidth(0.8),
  },
  viewStyle: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: responsiveWidth(2),
  },
});

export default GalleryButton;
