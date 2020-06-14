import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { circlePictureStyles } from '../../styles';

const { circle } = circlePictureStyles;

const CirclePictureHolder = ({ children, styles }) => <View style={{ ...circle, ...styles }}>{children}</View>;

CirclePictureHolder.propTypes = {
  children: PropTypes.resetWarningCache,
  styles: PropTypes.object,
};

export default CirclePictureHolder;
