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

export default function useAsyncGrabGrade(gotAnswers, question) {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    async function fetchList() {
      try {
        setLoading(true);
        const response = await AsyncStorage.multiGet(question);

        setResult(response);
        setLoading(false);
      } catch (error) {
        setLoading(null);
      }
    }

    fetchList();
  }, []);

  return [result, loading];
}
