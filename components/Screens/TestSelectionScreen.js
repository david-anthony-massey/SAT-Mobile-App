import * as React from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { Button, ListItem } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { testData } from "../../assets/data/testData";
import TestAnswerEntryScreen from "./TestAnswerEntryScreen";

const correctAnswers = [];
// This Screen should have a dropdown with choices of different tests to either manually enter or upload pictures for.
function TestSelectionScreen({ navigation }) {
  // const { currentState } = route.params;
  // const { setCurrentState } = route.params;
  const [selectedTest, setSelectedTest] = React.useState(false);

  console.log(testData);
  return (
    <>
      <FlatList
        data={testData}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              setSelectedTest(item);
            }}
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      <Button
        title={"Grade test Manually"}
        onPress={() => {
          if (selectedTest) {
            navigation.navigate("TestAnswerEntryScreen", {
              selectedTest: selectedTest
            });
          } else {
            alert("you need to select a test first");
          }
        }}
      ></Button>
    </>
  );
}

export default TestSelectionScreen;
