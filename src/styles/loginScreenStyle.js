import { StyleSheet } from 'react-native';

import {
  TRANSPARENT_COLOR, DARK_BLUE_COLOR,
  GREY_COLOR, DARK_RED_COLOR, LIGHT_BLUE_COLOR,
} from './colors';
import { FULL_HEIGHT_SIZE, FULL_WIDTH_SIZE } from './mixins';

const loginScreenStyles = StyleSheet.create({
  loginRoot: {
    flexGrow: 1,
    backgroundColor: TRANSPARENT_COLOR,
  },
  loginScreen: {
    flexGrow: 2,
    flexDirection: 'column',
    backgroundColor: TRANSPARENT_COLOR,
    height: (FULL_HEIGHT_SIZE - 100),
  },
  upperLayer: {
    flexGrow: 3,
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: DARK_BLUE_COLOR,
    marginBottom: '20%',
  },
  lowerLayer: {
    flexGrow: 4,
    height: '65%',
    alignItems: 'stretch',
    justifyContent: 'space-around',
    backgroundColor: TRANSPARENT_COLOR,
  },
  logoBrandTitle: {
    color: TRANSPARENT_COLOR,
  },
  avatarInnerLayer: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    borderWidth: 5,
    borderColor: TRANSPARENT_COLOR,
  },
  textInputStyle: {
    marginHorizontal: FULL_WIDTH_SIZE / 10,
    paddingTop: ((65 * FULL_HEIGHT_SIZE) / 100) / 20,
    marginVertical: ((65 * FULL_HEIGHT_SIZE) / 100) / 20,
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginTop: ((65 * FULL_HEIGHT_SIZE) / 100) / 40,
  },
  forgotPasswordText: {
    paddingEnd: FULL_WIDTH_SIZE / 10,
    paddingBottom: ((65 * FULL_HEIGHT_SIZE) / 100) / 20,
  },
  buttonViewContainer: {
    marginHorizontal: FULL_WIDTH_SIZE / 10,
  },
  mainBtnHolderLoginProps: {
    backgroundColor: DARK_BLUE_COLOR,
  },
  mainBtnTextLoginProps: {
    color: GREY_COLOR,
    fontSize: 25,
    textAlign: 'center',
  },
  connectWithHolder: {
    marginHorizontal: FULL_WIDTH_SIZE / 10,
    marginVertical: ((65 * FULL_HEIGHT_SIZE) / 100) / 20,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: FULL_WIDTH_SIZE / 10,
  },
  mainBtnSocialFbHolderProps: {
    backgroundColor: LIGHT_BLUE_COLOR,
  },
  mainBtnSocialGgleHolderProps: {
    backgroundColor: DARK_RED_COLOR,
  },
  mainBtnSocialTextProps: {
    color: TRANSPARENT_COLOR,
    fontSize: 16,
  },
  dontHaveAccountContainer: {
    marginVertical: ((65 * FULL_HEIGHT_SIZE) / 100) / 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dontHaveAccountText: {
    paddingTop: ((65 * FULL_HEIGHT_SIZE) / 100) / 20,
  },
  errorMessageContainer: {
    marginHorizontal: FULL_WIDTH_SIZE / 10,
  },
  errorMessageText: {
    color: DARK_RED_COLOR,
  },
});

export default loginScreenStyles;
