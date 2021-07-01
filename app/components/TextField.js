import React from 'react';
import {View, TextInput, Text} from 'react-native';
import { palette, spacing, WP } from '../config';

export const TextField = ({title, placeholder, onChange, obsercure}) => {
  return (
    <View style={{marginBottom: spacing.medium}}>
      <Text style={{
        color: palette.lightGrey, 
        fontWeight:'bold', 
        fontSize: 17,
        fontFamily: 'Hezaedrus',
      }}>{title}</Text>
      <TextInput
        style={{
          width: WP(85),
          height: 40,
          borderBottomColor: palette.lighterGrey, // Add this to specify bottom border color
          borderBottomWidth: 1,
          fontSize: 17,
          fontFamily: 'Hezaedrus',
          color: palette.lightGrey,
          paddingLeft: -1,
        }}
        placeholder={placeholder}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={onChange}
        secureTextEntry={obsercure}
      />
    </View>
  );
};
