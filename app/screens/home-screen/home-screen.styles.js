import {StyleSheet} from 'react-native';
import {WP, HP, spacing, palette, fontSize} from '../../config/index';

export const HomeScreenStyles = StyleSheet.create({
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
