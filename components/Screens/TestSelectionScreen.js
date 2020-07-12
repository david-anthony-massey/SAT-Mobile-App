import * as React from "react";
import {
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
import SelectedValue from "../CustomUI/SelectedValue";
import TestAnswerEntryScreen from "./TestAnswerEntryScreen";
import { color } from "react-native-reanimated";
import { red } from "ansi-colors";

const correctAnswers = [];
// This Screen should have a dropdown with choices of different tests to either manually enter or upload pictures for.
function TestSelectionScreen({ navigation }) {
  // const { currentState } = route.params;
  // const { setCurrentState } = route.params;
  const [selectedTest, setSelectedTest] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(false);

  // console.log(testData);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={{ marginBottom: 30, marginTop: 30 }}>
          Choose Your Test
        </Text>
        <View
          style={{ maxHeight: 200, maxWidth: 200 }}
          selectedItem={selectedTest}
        >
          <FlatList
            extraData={selectedItem}
            style={{ flexGrow: 0 }}
            data={testData}
            renderItem={
              ({ item, index }) => {
                if (index == selectedItem) {
                  console.log("is this happening");
                  return (
                    <SelectedValue
                      item={item}
                      onPress={() => {
                        setSelectedTest(item);
                        setSelectedItem(index);
                      }}
                      pressed={true}
                    />
                  );
                } else {
                  console.log("is happening");
                  return (
                    <SelectedValue
                      item={item}
                      onPress={() => {
                        setSelectedTest(item);
                        setSelectedItem(index);
                      }}
                      pressed={false}
                    />
                  );
                }
              }

              // <TouchableOpacity
              //   activeOpacity={1}
              //   style={{ alignItems: "center", marginBottom: 10 }}
              //   onPress={() => {
              //     setSelectedTest(item);
              //     this.style = { color: "red" };
              //   }}
              // >
              //   <Text>{item.title}</Text>
              // </TouchableOpacity>
            }
          />
        </View>
        <View style={{ flexDirection: "row", marginTop: 30 }}>
          <Button
            buttonStyle={{ marginRight: 20 }}
            title={"Grade with Camera\n 📷 "}
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
            title={"Grade test Manually\n 👆🏽 "}
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
