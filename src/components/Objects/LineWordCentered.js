import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { lineWordCenteredStyles } from '../../styles';

const {
  outLayer, middleLayer,
  wordInnerContainer, lineFormer,
} = lineWordCenteredStyles;
const LineWordCentered = (props) => {
  const { children } = props;

  return (
    <View style={outLayer}>
      <View style={middleLayer} />
      <View style={wordInnerContainer}>
        {children}
      </View>
      <View style={lineFormer} />
    </View>
  );
};

LineWordCentered.propTypes = {
  children: PropTypes.object,
};

export default LineWordCentered;
