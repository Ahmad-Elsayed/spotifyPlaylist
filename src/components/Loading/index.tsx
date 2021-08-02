import React from 'react';
import { ActivityIndicator, StyleSheet, ViewStyle } from 'react-native';
import { useTheming } from '../Theming';

interface Props {
  style?: ViewStyle;
  color?: string;
}

const Loading: React.FC<Props> = ({ style, ...props }) => {
  const { colors } = useTheming();

  return (
    <ActivityIndicator
      style={[styles.containerStyle, style]}
      color={colors.primary}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  containerStyle: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default Loading;
