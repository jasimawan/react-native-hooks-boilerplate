import {StyleSheet} from 'react-native';
import {palette, HP, WP, spacing} from '../../config/index';

export const ModalStyles = StyleSheet.create({
  CONTAINER: {
    height: HP(100),
    width: WP(100),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff99',
  },
  TITLE_VIEW: {alignItems: 'center', margin: WP(5)},
  MODAL_VIEW: {
    backgroundColor: palette.blue,
    borderRadius: 10,
    width: WP(80),
    justifyContent: 'center',
  },
  CENTERED_VIEW: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TEXT: {marginBottom: WP(2), fontFamily: 'Hezaedrus', color: palette.white},
  TOUCH: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#3886BF',
    borderTopWidth: 1,
    paddingVertical: spacing.small
  }
});
