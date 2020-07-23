import * as React from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  AsyncStorage
} from "react-native";
import { Button, ListItem } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { testData } from "../../assets/data/testData";
import SelectedValue from "../CustomUI/SelectedValue";
import CBTestsText from "../Texts/CBTestsText";
import TitleText from "../Texts/TitleText";
import { allQuestions } from "../useful";
import TestAnswerEntryScreen from "./TestAnswerEntryScreen";
import { color } from "react-native-reanimated";
import { red } from "ansi-colors";

function ConceptsHomeScreen({ navigation }) {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text
          style={{
            marginBottom: 30,
            marginTop: 30,
            textDecorationLine: "underline"
          }}
        >{`this is concept home`}</Text>
        <Button></Button>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "lightblue"
  }
});

export default ConceptsHomeScreen;
