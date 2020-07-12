import * as React from "react";
import {
  Pressable,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView
} from "react-native";
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
      <SafeAreaView style={styles.container}>
        <View style={{ maxHeight: 200, maxWidth: 200 }}>
          <FlatList
            style={{ flexGrow: 0 }}
            data={testData}
            renderItem={({ item }) => (
              <Pressable
                style={{ alignItems: "center" }}
                onPress={() => {
                  setSelectedTest(item);
                }}
              >
                <Text>{item.title}</Text>
              </Pressable>
            )}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Button
            buttonStyle={{ marginRight: 20 }}
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
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  }
});

export default TestSelectionScreen;
