import React from 'react';
import {View,Text, TextInput} from 'react-native';
import { HP, spacing } from '../../config';
import {TextInputStyles as styles} from './text-input.styles';

export const TextInputCustom = ({title, width, multiline}) => {
  return (
    <View style={{width: width ? width : '100%'}}>
      <Text style={styles.TITLE}>{title}</Text>
      <TextInput multiline={multiline ? multiline : false} style={{...styles.INPUT, height: multiline ? HP(25) : undefined, paddingTop: multiline ? spacing.medium : undefined}} />
    </View>
  );
};
