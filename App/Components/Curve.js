import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {
  responsiveHeight,
  responsiveScreenHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Svg, {Path} from 'react-native-svg';

export default Curve = () => {
  const {width, height} = Dimensions.get('screen');

  // "M-5, 62, 850, 299"
  // d={`M -10 90, Q 200 2 420 140`}
  return (
    <View style={styles.container}>
      <Svg fill="none" height={height} width={width}>
        <Path
          d={`M -10 ${responsiveWidth(16)}, Q ${responsiveWidth(200)} ${responsiveWidth(-75)} ${width*4} ${responsiveWidth(740)}`}
          fill="none"
          stroke="#dbdade"
          strokeWidth={responsiveWidth(7)}
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: responsiveHeight(10),
    flex: 1,
    marginTop:responsiveHeight(1)
  },
});
