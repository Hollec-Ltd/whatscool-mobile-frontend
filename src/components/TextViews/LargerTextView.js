import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import { largerTextViewStyles } from '../../styles';

const { textSize } = largerTextViewStyles;

const LargerTextView = (props) => {
  const { styles, children } = props;

  return <Text style={{ ...styles, ...textSize }}>{children}</Text>;
};

LargerTextView.propTypes = {
  styles: PropTypes.object,
  children: PropTypes.string,
};

export default LargerTextView;
