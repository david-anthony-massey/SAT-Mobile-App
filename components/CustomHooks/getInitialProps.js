import React, { useEffect, useState, useContext } from "react";
import Checkbox from "../CustomUI/CheckBox";
import GlobalState from "../../GlobalState";
import { AsyncStorage } from "react-native";
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View,
  ScrollView,
  Dimensions
} from "react-native";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";

export default function getInitialProps(initialCode) {
  let isGuess, isBlank, answer;

  if (initialCode === null || initialCode == -1) {
    answer = -1;
    isBlank = false;
    isGuess = false;
  } else if (initialCode == -3) {
    answer = -1;
    isBlank = true;
    isGuess = false;
  } else if (initialCode == -2) {
    answer = -1;
    isBlank = false;
    isGuess = true;
  } else if (initialCode <= 3) {
    answer = initialCode;
    isBlank = false;
    isGuess = false;
  } else if (initialCode <= 7) {
    answer = initialCode - 4;
    isBlank = false;
    isGuess = true;
  } else if (initialCode <= 11) {
    answer = initialCode - 8;
    isBlank = true;
    isGuess = false;
  } else {
    answer = initialCode - 12;
    isBlank = true;
    isGuess = true;
  }

  return [answer, isBlank, isGuess, initialCode];
}
