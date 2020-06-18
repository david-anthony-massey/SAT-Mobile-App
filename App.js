import * as React from "react";
import { Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Login from "./components/Login/Login";
import TestFormS1 from "./components/TestManualEntry/Section_1";
import TestFormS2 from "./components/TestManualEntry/Section_2";
import TestFormS3 from "./components/TestManualEntry/Section_3";
import TestFormS4 from "./components/TestManualEntry/Section_4";

const correctAnswers = [];

const TestSectionStack = createStackNavigator();
function SectionSelectScreen({ navigation }) {
  const [studentS2Answers, setStudentS2Answers] = React.useState([]);

  function handleS2Update(studentS2Answers) {
    setStudentS2Answers(studentS2Answers);
  }

  return (
    <TestSectionStack.Navigator>
      <TestSectionStack.Screen
        name="Section1Screen"
        component={Section1Screen}
      />
      <TestSectionStack.Screen
        name="Section2Screen"
        component={Section2Screen}
      />
      <TestSectionStack.Screen
        name="Section3Screen"
        component={Section3Screen}
      />
      <TestSectionStack.Screen
        name="Section4Screen"
        component={Section4Screen}
      />
    </TestSectionStack.Navigator>
  );
}

function Section1Screen({ navigation }) {
  const [studentS1Answers, setStudentS1Answers] = React.useState([]);

  function handleS1Update(studentS1Answers) {
    setStudentS1Answers(studentS1Answers);
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TestFormS1 studentAnswers={studentS1Answers} onUpdate={handleS1Update} />
      <Text>Select different section</Text>
      <View style={{ flexDirection: "row" }}>
        <Button
          title="Go to Section 2"
          onPress={() => navigation.navigate("Section2Screen")}
        />
        <Button
          title="Go to Section 3"
          onPress={() => navigation.navigate("Section3Screen")}
        />
        <Button
          title="Go to Section 4"
          onPress={() => navigation.navigate("Section4Screen")}
        />
      </View>
      <Button
        title="Submit All Answers"
        onPress={() => navigation.navigate("Section2Screen")}
      />
    </View>
  );
}

function Section2Screen({ navigation }) {
  const [studentS2Answers, setStudentS2Answers] = React.useState([]);

  function handleS2Update(studentS2Answers) {
    setStudentS2Answers(studentS2Answers);
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TestFormS2 studentAnswers={studentS2Answers} onUpdate={handleS2Update} />
      <Text>Select different section</Text>
      <View style={{ flexDirection: "row" }}>
        <Button
          title="Go to Section 1"
          onPress={() => navigation.navigate("Section1Screen")}
        />
        <Button
          title="Go to Section 3"
          onPress={() => navigation.navigate("Section3Screen")}
        />
        <Button
          title="Go to Section 4"
          onPress={() => navigation.navigate("Section4Screen")}
        />
      </View>
      <Button
        title="Submit All Answers"
        onPress={() => navigation.navigate("Section2Screen")}
      />
    </View>
  );
}

function Section3Screen({ navigation }) {
  const [studentS3Answers, setStudentS3Answers] = React.useState([]);

  function handleS3Update(studentS3Answers) {
    setStudentS3Answers(studentS3Answers);
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TestFormS3 studentAnswers={studentS3Answers} onUpdate={handleS3Update} />
      <Text>Select different section</Text>
      <View style={{ flexDirection: "row" }}>
        <Button
          title="Go to Section 1"
          onPress={() => navigation.navigate("Section1Screen")}
        />
        <Button
          title="Go to Section 2"
          onPress={() => navigation.navigate("Section2Screen")}
        />
        <Button
          title="Go to Section 4"
          onPress={() => navigation.navigate("Section4Screen")}
        />
      </View>
      <Button
        title="Submit All Answers"
        onPress={() => navigation.navigate("Section2Screen")}
      />
    </View>
  );
}

function Section4Screen({ navigation }) {
  const [studentS4Answers, setStudentS4Answers] = React.useState([]);

  function handleS4Update(studentS4Answers) {
    setStudentS4Answers(studentS4Answers);
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TestFormS4 studentAnswers={studentS4Answers} onUpdate={handleS4Update} />
      <Text>Select different section</Text>
      <View style={{ flexDirection: "row" }}>
        <Button
          title="Go to Section 1"
          onPress={() => navigation.navigate("Section1Screen")}
        />
        <Button
          title="Go to Section 2"
          onPress={() => navigation.navigate("Section2Screen")}
        />
        <Button
          title="Go to Section 3"
          onPress={() => navigation.navigate("Section3Screen")}
        />
      </View>
      <Button
        title="Submit All Answers"
        onPress={() => navigation.navigate("Section2Screen")}
      />
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("SectionSelectScreen")}
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
        onPress={() => navigation.navigate("SectionSelectScreen")}
      />
    </View>
  );
}

const ProfileStack = createStackNavigator();

function ProfileScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name={"HomeScreen"} component={HomeScreen} />
      <ProfileStack.Screen
        name="SectionSelectScreen"
        component={SectionSelectScreen}
      />
    </ProfileStack.Navigator>
  );
}

const TestsStack = createStackNavigator();

function TestsScreen() {
  return (
    <TestsStack.Navigator>
      <TestsStack.Screen name="SettingsScreen" component={SettingsScreen} />
      <TestsStack.Screen
        name="SectionSelectScreen"
        component={SectionSelectScreen}
      />
    </TestsStack.Navigator>
  );
}

const ConceptsStack = createStackNavigator();

function ConceptsScreen() {
  return (
    <ConceptsStack.Navigator>
      <ConceptsStack.Screen name="SettingsScreen" component={SettingsScreen} />
      <ConceptsStack.Screen
        name="SectionSelectScreen"
        component={SectionSelectScreen}
      />
    </ConceptsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

// export default function App() {
//   const [currentState, setCurrentState] = React.useState(IMPORT_FROM_DATABASE);

//   function handleCurrentStateUpdate(currentState) {
//     setCurrentState(currentState);
//   }

//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen
//           name="Profile"
//           component={ProfileScreen}
//           initialParams={{ itemId: 42 }}
//         />
//         <Tab.Screen
//           name="Tests"
//           component={TestsScreen}
//           initialParams={{ itemId: 42 }}
//         />
//         <Tab.Screen
//           name="Concepts"
//           component={ConceptsScreen}
//           initialParams={{ itemId: 42 }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

export default function App() {
  return <Login />;
}
