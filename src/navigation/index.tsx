import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DetailsScreen, HomeScreen } from '../screens';
import useSetNetworkingConfig from '../utilities/useSetNetworkingConfig';
import { MainStackRoute } from '../types';
import { useTheming } from '../components/Theming';
import ThemeChangeButton from '../components/ThemeChangeButton';

const MainStack = createStackNavigator<MainStackRoute>();

function Navigation() {
  useSetNetworkingConfig();
  const { colors } = useTheming();

  return (
    <>
      <NavigationContainer>
        <MainStack.Navigator>
          <MainStack.Screen
            name="home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <MainStack.Screen
            name="artistDetails"
            component={DetailsScreen}
            options={{
              headerStyle: { backgroundColor: colors.background },
              headerTintColor: colors.primary,
              headerBackTitleVisible: false,
              title: '',
            }}
          />
        </MainStack.Navigator>
      </NavigationContainer>
      <ThemeChangeButton />
    </>
  );
}

export default Navigation;
