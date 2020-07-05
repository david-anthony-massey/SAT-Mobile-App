import * as React from "react";
import { Text, View } from "react-native";
import { Button, ListItem } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TestForm from "./TestManualEntry/Section_1";

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TestForm></TestForm>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

const ProfileStack = createStackNavigator();

function ProfileScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name={"userID"} component={HomeScreen} />
      <ProfileStack.Screen name="Details" component={DetailsScreen} />
    </ProfileStack.Navigator>
  );
}

const TestsStack = createStackNavigator();

function TestsScreen() {
  return (
    <TestsStack.Navigator>
      <TestsStack.Screen name="Settings" component={SettingsScreen} />
      <TestsStack.Screen name="Details" component={DetailsScreen} />
    </TestsStack.Navigator>
  );
}

const ConceptsStack = createStackNavigator();

function ConceptsScreen() {
  return (
    <ConceptsStack.Navigator>
      <ConceptsStack.Screen name="Settings" component={SettingsScreen} />
      <ConceptsStack.Screen name="Details" component={DetailsScreen} />
    </ConceptsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Tests" component={TestsScreen} />
        <Tab.Screen name="Concepts" component={ConceptsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
