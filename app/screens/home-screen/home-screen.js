import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import {HomeScreenStyles as styles} from './home-screen.styles';

export const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.CONTAINER}>
      <Text style={styles.TEXT}>HOME</Text>
    </SafeAreaView>
  );
};
