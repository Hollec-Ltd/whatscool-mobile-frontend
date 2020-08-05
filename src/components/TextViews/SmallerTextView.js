import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import { smallerTextViewStyles } from '../../styles';

const { textSize } = smallerTextViewStyles;

const SmallerTextView = (props) => {
  const { styles, children } = props;

  return <Text style={{ ...styles, ...textSize }}>{children}</Text>;
};

SmallerTextView.propTypes = {
  styles: PropTypes.object,
  children: PropTypes.string,
};

export default SmallerTextView;
