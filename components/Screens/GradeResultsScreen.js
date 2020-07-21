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
import { s1Questions, s2Questions, s3Questions, s4Questions } from "../useful";
import SelectableTable from "../CustomUI/SelectableTable";

import useAsyncGradeTest from "../CustomHooks/asyncGradeTest";
import { ScrollView } from "react-native-gesture-handler";

function FetchGrades(selectedTest) {
  console.log(
    `selectedTest.answers, selectedTest.grading`,
    selectedTest.answers,
    selectedTest.grading
  );
  const [grades, loading] = useAsyncGradeTest(
    selectedTest.answers,
    selectedTest.grading
  );
  return loading ? "Loading..." : grades;
}

// This Screen should have a dropdown with choices of different tests to either manually enter or upload pictures for.
function GradeResultsScreen({ route, navigation }) {
  const { selectedTest } = route.params;
  var grades = FetchGrades(selectedTest);
  console.log(grades);

  if (grades !== "Loading...") {
    let feedback = grades[0];
    let S1Data = [feedback[0].S1, feedback[1].S1];
    let S2Data = [feedback[0].S2, feedback[1].S2];
    let S3Data = [feedback[0].S3, feedback[1].S3];
    let S4Data = [feedback[0].S4, feedback[1].S4];

    console.log("feedback", feedback);
    grades = grades[1];

    console.log(feedback, grades);
    return (
      <ScrollView>
        <View
          style={{
            alignItems: "center",
            marginTop: 40,
            marginBottom: 40,
            flexDirection: "row",
            justifyContent: "space-around"
          }}
        >
          <View style={{ alignItems: "center", height: 30, width: 50 }}>
            <Text>{`        `}</Text>
          </View>
          <View style={{ alignItems: "center", height: 30, width: 100 }}>
            <Text>{`Total Score`}</Text>
            <Text>{`${Number(grades[1]) * 10 +
              Number(grades[0]) * 10 +
              Number(grades[2])}`}</Text>
          </View>
          <View style={{ alignItems: "center", height: 30, width: 50 }}>
            <Text>{`       `}</Text>
          </View>
        </View>

        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-around",
            marginBottom: 20
          }}
        >
          <View style={{ alignItems: "center", height: 30, width: 55 }}>
            <Text>{` Reading `}</Text>
            <Text>{`${grades[0] * 10}`}</Text>
          </View>
          <View style={{ alignItems: "center", height: 30, width: 55 }}>
            <Text>{` Writing `}</Text>
            <Text>{`${grades[1] * 10}`}</Text>
          </View>
          <View style={{ alignItems: "center", height: 30, width: 55 }}>
            <Text>{`   Math   `}</Text>
            <Text>{`${grades[2]}`}</Text>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            alignItems: "center",
            alignSelf: "center"
          }}
        >
          <SelectableTable
            headers={[`Question #`, `Your answer`, `Correct Answer`]}
            data={S1Data}
            title={"Missed Reading Questions"}
            concepts={testData[9].concepts.S1}
          />
          <SelectableTable
            headers={[`Question #`, `Your answer`, `Correct Answer`]}
            data={S2Data}
            title={"Missed Writing Questions"}
            concepts={testData[9].concepts.S2}
          />
          <SelectableTable
            navigation={navigation}
            headers={[`Question #`, `Your answer`, `Correct Answer`]}
            data={S3Data}
            title={"Missed  Math Questions\n      (No Calculator)"}
            concepts={testData[9].concepts.S3}
          />
          <SelectableTable
            headers={[`Question #`, `Your answer`, `Correct Answer`]}
            data={S4Data}
            title={"Missed  Math Questions\n      (With Calculator)"}
            //NEEDS TO BE FED IN CORRECTLY
            concepts={testData[9].concepts.S4}
          />
        </View>
      </ScrollView>
    );
  } else {
    return (
      <>
        <Text>{`Calculating...`}</Text>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1
  },
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 2
  }
});
export default GradeResultsScreen;
