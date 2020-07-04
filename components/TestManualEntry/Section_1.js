import React, { useEffect, useState, memo } from "react";
import S1QuestionRow from "../CustomUI/S1QuestionRow";
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View,
  ScrollView,
  FlatList,
  Dimensions
} from "react-native";
import { AsyncStorage } from "react-native";

console.log("Section 1 loaded");

function useA() {
  const [valueA, setValueA] = useState(null);
  const [errorA, setErrorA] = useState(null);
  const [loadingA, setLoadingA] = useState(true);

  async function getA() {
    try {
      setLoadingA(true);
      //const value = await AsyncStorage.getAllKeys();
      const value = await AsyncStorage.multiGet([
        "S10",
        "S11",
        "S12",
        "S13",
        "S14",
        "S15",
        "S16",
        "S17",
        "S18",
        "S19",
        "S110",
        "S111",
        "S112",
        "S113",
        "S114",
        "S115",
        "S116",
        "S117",
        "S118",
        "S119",
        "S120",
        "S121",
        "S122",
        "S123",
        "S124",
        "S125",
        "S126",
        "S127",
        "S128",
        "S129",
        "S130",
        "S131",
        "S132",
        "S133",
        "S134",
        "S135",
        "S136",
        "S137",
        "S138",
        "S139",
        "S140",
        "S141",
        "S142",
        "S143",
        "S144",
        "S145",
        "S146",
        "S147",
        "S148",
        "S149",
        "S150",
        "S151"
      ]);
      setValueA(value);
    } catch (e) {
      setErrorA(e);
    } finally {
      setLoadingA(false);
    }
  }
  useEffect(() => {
    getA();
  }, []);

  return [valueA, errorA, loadingA];
}

function FetchOneResource() {
  const [valueA, errorA, loadingA] = useA();
  if (errorA) return "Failed to load resource A";
  return loadingA ? "Loading..." : valueA;
}

function TestFormS1(props) {
  const [submit, setSubmit] = useState(false);

  console.log("TestFormS1 loaded");

  var questionRows = [];
  //setStudentAnswers(result);
  var answerArr = FetchOneResource();
  //console.log(answerArr);

  if (answerArr !== "Loading...") {
    var answerObj = {};
    for (let i = 0; i < answerArr.length; i++) {
      answerObj[answerArr[i][0]] = answerArr[i][1];
    }
    // console.log(studentAnswers);

    for (let i = 0; i < 52; i++) {
      let val = answerObj[`S1${i}`];
      //console.log(val);
      if (val !== null) {
        val = Number(val);
        if (val === -10) {
          questionRows.push([
            <S1QuestionRow qNumber={i} submit={submit} initial={-11} />
          ]);
        } else {
          questionRows.push([
            <S1QuestionRow qNumber={i} submit={submit} initial={val} />
          ]);
        }
      } else {
        questionRows.push([
          <S1QuestionRow qNumber={i} submit={submit} initial={-12} />
        ]);
      }
    }

    //console.log(state);

    // return (
    //   <ScrollView style={styles.scrollContainer}>
    //     <View style={styles.container}>
    //       {questionRows.map(function(QuestionRow, i) {
    //         return QuestionRow;
    //       })}
    //     </View>
    //     <Button title="Submit Answers" onPress={() => setSubmit(true)}></Button>
    //   </ScrollView>
    // );

    return (
      <FlatList
        removeClippedSubviews={false}
        windowSize={7}
        initialNumToRender={10}
        data={questionRows}
        renderItem={({ item }) => <View style={styles.container}>{item}</View>}
      />
    );
  } else {
    return <Text>Loading</Text>;
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
  },
  container1: {
    flex: 1,
    flexDirection: "row",
    padding: 2
  },
  box: {
    margin: 2,
    width: Dimensions.get("window").width - 50,
    height: 60,
    backgroundColor: "#f1c40f",
    alignItems: "center",
    flexDirection: "row"
  }
});

export default memo(TestFormS1);
