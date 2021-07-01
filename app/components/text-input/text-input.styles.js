import {StyleSheet} from 'react-native';
import {spacing, palette} from '../../config/index';

export const TextInputStyles = StyleSheet.create({
  TITLE: {
    color: palette.lightGrey,
    fontSize: 16,
    fontFamily: 'Hezaedrus',
  },
  INPUT: {
    backgroundColor: palette.inputGrey,
    padding: spacing.medium - spacing.tiny,
    borderRadius: 10,
    marginTop: spacing.small,
    marginBottom: spacing.medium,
  },
});
