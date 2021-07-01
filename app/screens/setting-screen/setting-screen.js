import React from 'react';
import {View, Text} from 'react-native';
import {SettingScreenStyles as styles} from './setting-screen.styles';

export const SettingScreen = ({navigation}) => {
  return (
    <View style={styles.CONTAINER}>
      <Text style={styles.TEXT}>SETTINGS</Text>
    </View>
  );
};
