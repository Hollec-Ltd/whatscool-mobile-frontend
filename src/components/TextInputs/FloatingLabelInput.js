import React, { useState } from 'react';
import { TextInput, View, Text } from 'react-native';
import PropTypes from 'prop-types';

import { floatingLabelInputStyles } from '../../styles';
import { GREY_COLOR, DARK_BLUE_COLOR } from '../../styles/colors';

const { textInput } = floatingLabelInputStyles;

const FloatingLabelInput = (props) => {
  const { style, label, currentInput} = props;
  const [isFocused, setFocusedHandler] = useState(false);
  const onFocusHandler = () => setFocusedHandler(true);
  const onBlurhandler = () => (currentInput.length !== 0 ? setFocusedHandler(true) : setFocusedHandler(false));

  const labelStyle = {
    position: 'absolute',
    left: 0,
    top: !isFocused ? 14 : -15,
    fontSize: !isFocused ? 20 : 19,
    color: !isFocused ? GREY_COLOR : DARK_BLUE_COLOR,
  };

  return (
    <View style={style}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        {...props}
        style={textInput}
        onFocus={onFocusHandler}
        onBlur={onBlurhandler}
      />
    </View>
  );
};

FloatingLabelInput.propTypes = {
  style: PropTypes.object,
  label: PropTypes.string,
  currentInput: PropTypes.resetWarningCache,
};

export default FloatingLabelInput;
