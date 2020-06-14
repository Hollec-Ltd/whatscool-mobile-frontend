import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import mainButtonStyles from '../../styles/mainButtonStyle';

const { buttonText, buttonHolder } = mainButtonStyles;
const MainButton = (props) => {
  const {
    children, btnHolderFromProps, btnTextFromProps, onChange,
  } = props;
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={() => onChange()}>
      <View style={{ ...buttonHolder, ...btnHolderFromProps }}>
        <Text style={{ ...buttonText, ...btnTextFromProps }}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

MainButton.propTypes = {
  children: PropTypes.resetWarningCache,
  btnHolderFromProps: PropTypes.object,
  btnTextFromProps: PropTypes.object,
  onChange: PropTypes.func,
};

export default MainButton;
