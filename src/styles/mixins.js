import {Dimensions, PixelRatio} from 'react-native';

//// EXAMPLE
const WINDOW_WIDTH = Dimensions.get('window').width;
const guidelineBaseWidth = 375;

export const scaleSize = size => (WINDOW_WIDTH / guidelineBaseWidth) * size;
