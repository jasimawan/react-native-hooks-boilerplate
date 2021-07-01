import {StyleSheet} from 'react-native';
import {HP, WP, fontSize, palette} from '../../config';

export const SettingScreenStyles = StyleSheet.create({
  CONTAINER: {
    width: WP(100),
    height: HP(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  TEXT: {
    fontSize: fontSize.large,
    color: palette.black,
  },
});
