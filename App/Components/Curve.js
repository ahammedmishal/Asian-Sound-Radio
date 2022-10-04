import React from 'react';
import {View, StyleSheet, Dimensions,Text} from 'react-native';
import {
  responsiveHeight,
  responsiveScreenHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Svg, {Path} from 'react-native-svg';

export default Curve = () => {
  const {width, height} = Dimensions.get('screen');

  return (
    <View style={styles.container}>
      <Svg fill="none" height={responsiveHeight(30)} width={width} >
        <Path
          d={`M -10 ${responsiveWidth(16)}, Q ${responsiveWidth(200)} ${responsiveWidth(-75)} ${width*4} ${responsiveWidth(740)}`}
          stroke="#dbdade"
          strokeWidth={responsiveWidth(7)}
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow:"hidden"
  },
});
