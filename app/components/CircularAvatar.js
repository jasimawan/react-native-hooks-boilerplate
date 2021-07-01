import React from 'react';
import { TouchableOpacity, Image} from 'react-native';
import { WP, palette} from '../config';
import {IMAGES} from '../config/assets';

export const CircularAvatar = ({onPress, uri, disabled}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={{
        height: WP(18),
        width: WP(18),
        borderRadius: WP(9),
        backgroundColor: palette.primary,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        style={{height: WP(10), width: WP(10), tintColor:'white'}}
        source={uri === '' ? IMAGES.addImage : {uri}}
      />
    </TouchableOpacity>
  );
};

