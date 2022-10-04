import React from 'react';
import {View, Text, StyleSheet, Pressable,TouchableOpacity} from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CheckBox = props => {
  const iconName = props.isChecked
    ? 'checkbox-marked'
    : 'checkbox-blank-outline';
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onPress}>
        <Icon name={iconName} size={responsiveHeight(3.5)} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: responsiveWidth(1.5),
    },
});

export default CheckBox;
