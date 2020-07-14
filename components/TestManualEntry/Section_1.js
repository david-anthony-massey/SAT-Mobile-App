import React, { useEffect, useState, memo } from "react";
import { s1Questions } from "../useful";
import S1QuestionRow from "../CustomUI/S1QuestionRow";
import {
  AppRegistry,
  StyleSheet,
  Text,
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
      const value = await AsyncStorage.multiGet(s1Questions);
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
        questionRows.push([
          <S1QuestionRow qNumber={i} submit={submit} initial={val} />
        ]);
      } else {
        questionRows.push([
          <S1QuestionRow qNumber={i} submit={submit} initial={-1} />
        ]);
      }
    }

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
