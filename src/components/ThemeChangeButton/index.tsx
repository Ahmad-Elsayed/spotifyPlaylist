import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { scale } from '../../utilities/Scaling';
import Text from '../Text';
import { useTheming } from '../Theming';

const ThemeChangeButton = () => {
  const { colors, changeColorTheme } = useTheming();

  return (
    <TouchableOpacity
      style={StyleSheet.flatten([
        styles.containerStyle,
        { backgroundColor: colors.card },
      ])}
      onPress={changeColorTheme}>
      <Text style={styles.textStyle}>Switch Theme</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    position: 'absolute',
    bottom: scale(40),
    right: scale(20),
    width: scale(50),
    height: scale(50),
    borderRadius: scale(25),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  textStyle: {
    fontSize: scale(10),
    fontWeight: '700',
  },
});

export default ThemeChangeButton;
