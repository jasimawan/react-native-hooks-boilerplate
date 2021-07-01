import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';

export const CustomizedButton = ({
  title,
  styles,
  titleStyles,
  onPress,
  icon,
  iconStyles
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles}>
      <Text style={titleStyles}>{title}</Text>
      {icon && <Image style={iconStyles} source={icon} />}
    </TouchableOpacity>
  );
};
