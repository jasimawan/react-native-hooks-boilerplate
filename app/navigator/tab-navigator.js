import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, SettingScreen} from '../screens/index';
import {IMAGES} from '../config/assets';
import {palette} from '../config';
import {SCREENS} from '../config/constants';

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={SCREENS.HOME}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName, tint;
          if (route.name === SCREENS.HOME) {
            iconName = IMAGES.homeTab;
            tint = palette.primary;
          } else {
            iconName = IMAGES.settingTab;
            tint = palette.primary;
          }
          return (
            <Image
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? tint : palette.lightGrey,
              }}
              source={iconName}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: palette.lightGrey,
        inactiveTintColor: palette.lightGrey,
      }}>
      <Tab.Screen name={SCREENS.HOME} component={HomeScreen} />
      <Tab.Screen name={SCREENS.SETTING} component={SettingScreen} />
    </Tab.Navigator>
  );
}
