import { StyleSheet } from 'react-native';

import { DARK_BLUE_COLOR } from './colors';
import { FULL_WIDTH_SIZE, FULL_HEIGHT_SIZE } from './mixins';

const circlePictureStyles = StyleSheet.create({
  circle: {
    position: 'absolute',
    borderWidth: 15,
    borderColor: DARK_BLUE_COLOR,
    overflow: 'hidden',
    top: ((15 * FULL_HEIGHT_SIZE) / 100) / 2,
    left: (FULL_WIDTH_SIZE / 2) - 65,
    right: (FULL_WIDTH_SIZE / 2) - 65,
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    backgroundColor: DARK_BLUE_COLOR,
  },
});

export default circlePictureStyles;
