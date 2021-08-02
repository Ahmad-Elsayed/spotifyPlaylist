import React from 'react';
import { Text as RNText, StyleSheet, TextStyle } from 'react-native';
import { useTheming } from '../Theming';

interface Props {
  style?: TextStyle;
  secondary?: boolean;
  children: string;
}

const Text = ({ style, secondary, children }: Props) => {
  const { colors } = useTheming();

  return (
    <RNText
      style={StyleSheet.flatten([
        styles.textStyle,
        { color: secondary ? colors.secondary : colors.primary },
        style,
      ])}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  textStyle: { fontSize: 14 },
});

export default Text;
