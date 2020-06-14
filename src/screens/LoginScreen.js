import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Entypo, EvilIcons } from '@expo/vector-icons';
import { loginWhatscoolUser } from '../redux/actions/loginActionCreator';

import { loginScreenStyles } from '../styles';
import CirclePictureHolder from '../components/pictureHolders/CirclePictureHolder';
import {
  TRANSPARENT_COLOR,
} from '../styles/colors';
import FloatingLabelInput from '../components/TextInputs/FloatingLabelInput';
import LargerTextView from '../components/TextViews/LargerTextView';
import SmallertextView from '../components/TextViews/SmallerTextView';
import MainButton from '../components/Buttons/MainButton';
import LineWordCentered from '../components/Objects/LineWordCentered';
import LocalStoragePesister from '../utils/LocalStoragePersister';

const {
  loginScreen, lowerLayer, upperLayer,
  logoBrandTitle, avatarInnerLayer, avatarOuterLayer,
  textInputStyle, forgotPasswordContainer, forgotPasswordText,
  buttonViewContainer, connectWithHolder, socialButtonsContainer,
  dontHaveAccountContainer, mainBtnHolderLoginProps, mainBtnTextLoginProps,
  mainBtnSocialFbHolderProps, mainBtnSocialGgleHolderProps, mainBtnSocialTextProps,
  loginRoot, dontHaveAccountText, errorMessageText, errorMessageContainer,
} = loginScreenStyles;
const LoginScreen = ({ loginWhatscoolUser, loginResponse }) => {
  const {
    error, message, status, loading, token,
  } = loginResponse;
  useEffect(() => {
    console.log('UseEffect', loginResponse);

    if (status === 200) {
      LocalStoragePesister.storeData('TOKEN', token);
    }
    
    if (!loading && status !== 0) {
      Alert.alert('WhatsCool', error || message,
        [{ text: 'Okay', style: 'destructive', onPress: resetPasswordHandler }]);
    }
  }, [loginResponse]);
  const passwordLocalError = 'Please provide a password';
  const emailLocalError = 'Please provide a valid email';
  const [isPasswordWithErrors, setPasswordWithErros] = useState(false);
  const [isEmailWithErrors, setEmailWithErros] = useState(false);
  const [email, setEnteredEmail] = useState('');
  const [password, setEnteredPassword] = useState('');

  const setEnteredEmailHandler = (enteredEmail) => {
    const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    setEnteredEmail(enteredEmail);
    setEmailWithErros(true);
    setEmailWithErros(!reg.test(enteredEmail));
  };
  const setEnteredPasswordHandler = (enteredPassword) => {
    setPasswordWithErros(true);
    setEnteredPassword(enteredPassword);
    setPasswordWithErros(enteredPassword.length === 0);
  };
  const resetPasswordHandler = () => {
    setEnteredPassword('');
  };
  const onSubmitRequestHandler = () => {
    if (!isEmailWithErrors) {
      setEnteredEmailHandler(email);
    }
    if (!isPasswordWithErrors) {
      setEnteredPasswordHandler(password);
    }
    if (email.length !== 0 && password.length !== 0 && !isEmailWithErrors) {
      if (email.length !== 0 && password.length !== 0) {
        loginWhatscoolUser({ email, password });
      }
    }
  };

  return (
    <View style={loginRoot}>
      <Spinner
        visible={loading}
      />

      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView>
          <View style={loginScreen}>
            <View style={upperLayer}>
              <LargerTextView styles={logoBrandTitle}> WhatsCool </LargerTextView>
              <CirclePictureHolder styles={avatarOuterLayer}>
                <View style={avatarInnerLayer}>
                  <Entypo name="user" size={100} color={TRANSPARENT_COLOR} />
                </View>
              </CirclePictureHolder>
            </View>
            <View style={lowerLayer}>
              <FloatingLabelInput
                label="Email"
                style={textInputStyle}
                autoCompleteType="email"
                keyboardType="email-address"
                value={email}
                currentInput={email}
                onChangeText={setEnteredEmailHandler}
              />
              <View style={errorMessageContainer}>
                <SmallertextView
                  styles={errorMessageText}
                >
                  {isEmailWithErrors ? emailLocalError : ''}
                </SmallertextView>
              </View>
              <FloatingLabelInput
                label="Password"
                style={textInputStyle}
                textContentType="password"
                multiline={false}
                value={password}
                currentInput={password}
                onChangeText={setEnteredPasswordHandler}
                secureTextEntry
              />
              <View style={errorMessageContainer}>
                <SmallertextView
                  styles={errorMessageText}
                >
                  {isPasswordWithErrors ? passwordLocalError : ''}
                </SmallertextView>
              </View>
              <View style={forgotPasswordContainer}>
                <TouchableOpacity>
                  <SmallertextView styles={forgotPasswordText}>Forgot password?</SmallertextView>
                </TouchableOpacity>
              </View>

              <View style={buttonViewContainer}>
                <MainButton
                  btnHolderFromProps={mainBtnHolderLoginProps}
                  btnTextFromProps={mainBtnTextLoginProps}
                  onChange={onSubmitRequestHandler}
                >
                  Login
                </MainButton>
              </View>
              <View style={connectWithHolder}>
                <LineWordCentered>
                  <SmallertextView>Or connect with</SmallertextView>
                </LineWordCentered>
              </View>
              <View style={socialButtonsContainer}>
                <MainButton
                  btnHolderFromProps={mainBtnSocialFbHolderProps}
                  btnTextFromProps={mainBtnSocialTextProps}
                >
                  <EvilIcons name="sc-facebook" size={16} color={TRANSPARENT_COLOR} />
                  {' '}
                  Facebook
                </MainButton>
                <MainButton
                  btnHolderFromProps={mainBtnSocialGgleHolderProps}
                  btnTextFromProps={mainBtnSocialTextProps}
                >
                  <Entypo name="google-" size={16} color={TRANSPARENT_COLOR} />
                  {' '}
                  Google
                </MainButton>
              </View>

              <View style={dontHaveAccountContainer}>
                <TouchableOpacity>
                  <SmallertextView styles={dontHaveAccountText}>Don&#39;t have an account yet?</SmallertextView>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
};
const mapStateToProps = (state) => ({
  loginResponse: state.login,
});

const mapDispatchToProps = (dispatch) => ({
  loginWhatscoolUser: (data) => dispatch(loginWhatscoolUser(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
