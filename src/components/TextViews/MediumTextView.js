import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import { mediumTextViewStyles } from '../../styles';

const { textSize } = mediumTextViewStyles;

const MediumTextView = (props) => {
  const { styles, children } = props;

  return <Text style={{ ...styles, ...textSize }}>{children}</Text>;
};

MediumTextView.propTypes = {
  styles: PropTypes.object,
  children: PropTypes.string,
};

export default MediumTextView;
