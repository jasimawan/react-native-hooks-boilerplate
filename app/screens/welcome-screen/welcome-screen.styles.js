import {StyleSheet, Platform} from 'react-native';
import {spacing, palette, WP, HP, fontSize} from '../../config/index';

export const WelcomeScreenStyles = StyleSheet.create({
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
