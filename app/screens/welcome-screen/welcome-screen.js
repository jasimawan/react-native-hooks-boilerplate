import React from 'react';
import {View, Text} from 'react-native';
import {SCREENS} from '../../config/constants';
import {WelcomeScreenStyles as styles} from './welcome-screen.styles';

export const Welcome = ({navigation}) => {
  React.useEffect(() => {
    const unsub = setTimeout(() => {
      navigation.navigate(SCREENS.TAB);
    }, 3000);
    return () => {
      unsub();
    };
  }, []);
  return (
    <View style={styles.CONTAINER}>
      <Text style={styles.TEXT}>WELCOME</Text>
    </View>
  );
};
