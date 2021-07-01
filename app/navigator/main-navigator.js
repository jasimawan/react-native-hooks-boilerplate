import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Welcome} from '../screens/index';
import {TabNavigator} from './tab-navigator';
import {SCREENS} from '../config/constants';

const Stack = createStackNavigator();

const MainNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name={SCREENS.WELCOME} component={Welcome} />
    <Stack.Screen name={SCREENS.TAB} component={TabNavigator} />
  </Stack.Navigator>
);

export default MainNavigator;
