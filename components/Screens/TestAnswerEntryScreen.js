import * as React from "react";
import { Text, View } from "react-native";
import { Button, ListItem } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { allQuestions } from "../useful";

import TestFormS1 from "../TestManualEntry/Section_1";
import TestFormS2 from "../TestManualEntry/Section_2";
import TestFormS3 from "../TestManualEntry/Section_3";
import TestFormS4 from "../TestManualEntry/Section_4";

const correctAnswers = [];

function TestAnswerEntryScreen({ route, navigation }) {
  const [buttonPressed, setButtonPressed] = React.useState("Section 1");
  const { selectedTest } = route.params;

  let section;
  function createButtons(buttonPressed) {
    if (buttonPressed === "Section 1") {
      section = <TestFormS1 />;
      return (
        <View style={{ flexDirection: "row" }}>
          <Button
            title="S1"
            disabled={true}
            buttonStyle={{ marginRight: 10, marginLeft: 10 }}
          ></Button>
          <Button
            title="S2"
            onPress={() => setButtonPressed("Section 2")}
            buttonStyle={{ marginRight: 10 }}
          ></Button>
          <Button
            title="S3"
            onPress={() => setButtonPressed("Section 3")}
            buttonStyle={{ marginRight: 10 }}
          ></Button>
          <Button
            title="S4"
            onPress={() => setButtonPressed("Section 4")}
            buttonStyle={{ marginRight: 10 }}
          ></Button>
          <Button
            title="Submit For Grading"
            onPress={() => {
              AsyncStorage.multiRemove(allQuestions);
              navigation.navigate("GradeResultsScreen", {
                selectedTest: selectedTest
              });
            }}
            buttonStyle={{ marginLeft: 10 }}
          ></Button>
        </View>
      );
    } else if (buttonPressed === "Section 2") {
      section = <TestFormS2 />;
      return (
        <View style={{ flexDirection: "row" }}>
          <Button
            title="S1"
            onPress={() => setButtonPressed("Section 1")}
            buttonStyle={{ marginRight: 10, marginLeft: 10 }}
          ></Button>
          <Button
            title="S2"
            disabled={true}
            buttonStyle={{ marginRight: 10 }}
          ></Button>
          <Button
            title="S3"
            onPress={() => setButtonPressed("Section 3")}
            buttonStyle={{ marginRight: 10 }}
          ></Button>
          <Button
            title="S4"
            onPress={() => setButtonPressed("Section 4")}
            buttonStyle={{ marginRight: 10 }}
          ></Button>
          <Button
            title="Submit For Grading"
            onPress={() => {
              AsyncStorage.multiRemove(allQuestions);
              navigation.navigate("GradeResultsScreen", {
                selectedTest: selectedTest
              });
            }}
            buttonStyle={{ marginLeft: 10 }}
          ></Button>
        </View>
      );
    } else if (buttonPressed === "Section 3") {
      section = <TestFormS3 />;
      return (
        <View style={{ flexDirection: "row" }}>
          <Button
            title="S1"
            onPress={() => setButtonPressed("Section 1")}
            buttonStyle={{ marginRight: 10, marginLeft: 10 }}
          ></Button>
          <Button
            title="S2"
            onPress={() => setButtonPressed("Section 2")}
            buttonStyle={{ marginRight: 10 }}
          ></Button>
          <Button
            title="S3"
            disabled={true}
            buttonStyle={{ marginRight: 10 }}
          ></Button>
          <Button
            title="S4"
            onPress={() => setButtonPressed("Section 4")}
            buttonStyle={{ marginRight: 10 }}
          ></Button>
          <Button
            title="Submit For Grading"
            onPress={() => {
              AsyncStorage.multiRemove(allQuestions);
              navigation.navigate("GradeResultsScreen", {
                selectedTest: selectedTest
              });
            }}
            buttonStyle={{ marginLeft: 10 }}
          ></Button>
        </View>
      );
    } else if (buttonPressed === "Section 4") {
      section = <TestFormS4 />;
      return (
        <View style={{ flexDirection: "row" }}>
          <Button
            title="S1"
            onPress={() => setButtonPressed("Section 1")}
            buttonStyle={{ marginRight: 10, marginLeft: 10 }}
          ></Button>
          <Button
            title="S2"
            onPress={() => setButtonPressed("Section 2")}
            buttonStyle={{ marginRight: 10 }}
          ></Button>
          <Button
            title="S3"
            onPress={() => setButtonPressed("Section 3")}
            buttonStyle={{ marginRight: 10 }}
          ></Button>
          <Button
            title="S4"
            disabled={true}
            buttonStyle={{ marginRight: 10 }}
          ></Button>
          <Button
            title="Submit For Grading"
            onPress={() => {
              AsyncStorage.multiRemove(allQuestions);
              navigation.navigate("GradeResultsScreen", {
                selectedTest: selectedTest
              });
            }}
            buttonStyle={{ marginLeft: 10 }}
          ></Button>
        </View>
      );
    }
  }

  let buttons = createButtons(buttonPressed);

  return (
    <>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {section}
      </View>
      {buttons}
    </>
  );
}

export default TestAnswerEntryScreen;
