import * as React from "react";
import { Text, View, FlatList } from "react-native";
import { Button, ListItem } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import GlobalState from "../../GlobalState";

const correctAnswers = [];
// This Screen should have a dropdown with choices of different tests to either manually enter or upload pictures for.
function TestAnswerEntryScreen({ navigation }) {
  // const { currentState } = route.params;
  // const { setCurrentState } = route.params;
  const [state, setState] = React.useContext(GlobalState);
  const [selectedTest, setSelectedTest] = React.useState(false);

  return (
    <FlatList
      data={availableTests}
      renderItem={({ item }) => <View style={styles.container}>{item}</View>}
    />
  );
}

export default TestAnswerEntryScreen;
