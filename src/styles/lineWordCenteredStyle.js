import { StyleSheet } from 'react-native';

import {BLACK_COLOR} from './colors';

const lineWordCenteredStyles = StyleSheet.create({
  outLayer:
  {
    flexDirection: 'row',
    alignItems: 'center',
  },
  middleLayer: {
    flex: 1,
    height: 1,
    backgroundColor: BLACK_COLOR,
  },
  wordInnerContainer: {
    marginHorizontal: 14,
  },
  lineFormer:
  {
    flex: 1,
    height: 1,
    backgroundColor: BLACK_COLOR,
  },
});

export default lineWordCenteredStyles;
