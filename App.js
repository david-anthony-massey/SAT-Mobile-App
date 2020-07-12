import * as React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { Button, ListItem } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import GlobalState from "./GlobalState";
import Login from "./components/Login/Login";
import TestFormS1 from "./components/TestManualEntry/Section_1";
import TestFormS2 from "./components/TestManualEntry/Section_2";
import TestFormS3 from "./components/TestManualEntry/Section_3";
import TestFormS4 from "./components/TestManualEntry/Section_4";
import TestSelectionScreen from "./components/Screens/TestSelectionScreen";
import TestAnswerEntryScreen from "./components/Screens/TestAnswerEntryScreen";
import GradeResultsScreen from "./components/Screens/GradeResultsScreen";

const correctAnswers = [];

function ManualSelectScreen({ navigation }) {
  // const { currentState } = route.params;
  // const { setCurrentState } = route.params;
  const [state, setState] = React.useContext(GlobalState);
  const [buttonPressed, setButtonPressed] = React.useState("Section 1");

  let section;
  function createButtons(buttonPressed) {
    if (buttonPressed === "Section 1") {
      section = <TestFormS1 started={state.S1} />;
      return (
        <View style={{ flexDirection: "row" }}>
          <Button
            title="Section 2"
            onPress={() => setButtonPressed("Section 2")}
            style={{ marginRight: 20 }}
          ></Button>
          <Button
            title="Section 3"
            onPress={() => setButtonPressed("Section 3")}
          ></Button>
          <Button
            title="Section 4"
            onPress={() => setButtonPressed("Section 4")}
          ></Button>
        </View>
      );
    } else if (buttonPressed === "Section 2") {
      section = <TestFormS2 />;
      return (
        <View>
          <Button
            title="Section 1"
            onPress={() => setButtonPressed("Section 1")}
          ></Button>
          <Button
            title="Section 3"
            onPress={() => setButtonPressed("Section 3")}
          ></Button>
          <Button
            title="Section 4"
            onPress={() => setButtonPressed("Section 4")}
          ></Button>
        </View>
      );
    } else if (buttonPressed === "Section 3") {
      section = <TestFormS3 />;
      return (
        <View>
          <Button
            title="Section 1"
            onPress={() => setButtonPressed("Section 1")}
          ></Button>
          <Button
            title="Section 2"
            onPress={() => setButtonPressed("Section 2")}
          ></Button>
          <Button
            title="Section 4"
            onPress={() => setButtonPressed("Section 4")}
          ></Button>
        </View>
      );
    } else if (buttonPressed === "Section 4") {
      section = <TestFormS4 />;
      return (
        <View>
          <Button
            title="Section 1"
            onPress={() => setButtonPressed("Section 1")}
          ></Button>
          <Button
            title="Section 2"
            onPress={() => setButtonPressed("Section 2")}
          ></Button>
          <Button
            title="Section 3"
            onPress={() => setButtonPressed("Section 3")}
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

const TestSectionStack = createStackNavigator();
function SectionSelectScreen({ route, navigation }) {
  // const { currentState } = route.params;
  // const { setCurrentState } = route.params;
  const [studentS2Answers, setStudentS2Answers] = React.useState([]);

  function handleS2Update(studentS2Answers) {
    setStudentS2Answers(studentS2Answers);
  }

  return (
    <TestSectionStack.Navigator>
      <TestSectionStack.Screen
        name="Section1Screen"
        component={Section1Screen}
        // initialParams={{
        //   currentState: currentState,
        //   setCurrentState: setCurrentState
        // }}
      />
      <TestSectionStack.Screen
        name="Section2Screen"
        component={Section2Screen}
        // initialParams={{
        //   currentState: currentState,
        //   setCurrentState: setCurrentState
        // }}
      />
      <TestSectionStack.Screen
        name="Section3Screen"
        component={Section3Screen}
        // initialParams={{
        //   currentState: currentState,
        //   setCurrentState: setCurrentState
        // }}
      />
      <TestSectionStack.Screen
        name="Section4Screen"
        component={Section4Screen}
        // initialParams={{
        //   currentState: currentState,
        //   setCurrentState: setCurrentState
        // }}
      />
    </TestSectionStack.Navigator>
  );
}

function Section1Screen({ navigation }) {
  const [state, setState] = React.useContext(GlobalState);
  const [studentS1Answers, setStudentS1Answers] = React.useState([]);

  function handleS1Update(studentAnswers) {
    setStudentS1Answers(studentAnswers);
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TestFormS1
        studentAnswers={studentS1Answers}
        onUpdate={handleS1Update}
        // currentState={currentState}
        // setCurrentState={setCurrentState}
      />
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

function HomeScreen({ route, navigation }) {
  // const { currentState } = route.params;
  // const { setCurrentState } = route.params;

  return (
    <ImageBackground
      source={require("/Users/reku68/Documents/New Github/RRN_Flask_SAT/SAT_Mobile/assets/images/SATFront.png")}
      style={styles.background}
    ></ImageBackground>
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

function ProfileScreen({ route, navigation }) {
  // const { currentState } = route.params;
  // const { setCurrentState } = route.params;

  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <ProfileStack.Screen
        name={"HomeScreen"}
        component={HomeScreen}
        // initialParams={{
        //   currentState: currentState,
        //   setCurrentState: setCurrentState
        // }}
      />
      <ProfileStack.Screen
        name="ManualSelectScreen"
        component={ManualSelectScreen}
        // initialParams={{
        //   currentState: currentState,
        //   setCurrentState: setCurrentState
        // }}
      />
    </ProfileStack.Navigator>
  );
}

const TestsStack = createStackNavigator();

function TestsScreen() {
  return (
    <TestsStack.Navigator>
      <TestsStack.Screen
        name="TestSelectionScreen"
        component={TestSelectionScreen}
      />
      <TestsStack.Screen
        name="TestAnswerEntryScreen"
        component={TestAnswerEntryScreen}
      />
      <TestsStack.Screen
        name="GradeResultsScreen"
        component={GradeResultsScreen}
      />
    </TestsStack.Navigator>
  );
}

const ConceptsStack = createStackNavigator();

function ConceptsScreen() {
  return (
    <ConceptsStack.Navigator>
      <ConceptsStack.Screen
        name="SectionSelectScreen"
        component={SectionSelectScreen}
      />
      <ConceptsStack.Screen
        name="SectionSelectScreen"
        component={SectionSelectScreen}
      />
    </ConceptsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function App1() {
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

// export default function App() {
//   return <Login />;
// }
export default function App() {
  const [state, setState] = React.useState({});
  return (
    <GlobalState.Provider value={[state, setState]}>
      <App1 />
    </GlobalState.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  background: {
    flex: 1,
    resizeMode: "cover"
  },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold"
  }
});
