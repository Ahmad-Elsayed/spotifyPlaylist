import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { NetworkingContextProvider } from './src/components/Networking/NetworkingProvider';
import { useTheming, withThemingProvider } from './src/components/Theming';
import Navigation from './src/navigation';

const App = () => {
  const { colors } = useTheming();

  return (
    <SafeAreaView
      style={StyleSheet.flatten([
        styles.containerStyle,
        { backgroundColor: colors.background },
      ])}>
      <NetworkingContextProvider>
        <Navigation />
      </NetworkingContextProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
});

export default withThemingProvider(App);
