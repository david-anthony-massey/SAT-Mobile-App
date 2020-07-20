import React, { useEffect, useState, memo } from "react";
import { s4Questions } from "../useful";
import S4QuestionRow from "../CustomUI/S4QuestionRow";
import S4ManualQuestionRow from "../CustomUI/S4ManualQuestionRow";
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

function useA() {
  const [valueA, setValueA] = useState(null);
  const [errorA, setErrorA] = useState(null);
  const [loadingA, setLoadingA] = useState(true);

  async function getA() {
    try {
      setLoadingA(true);
      //const value = await AsyncStorage.getAllKeys();
      const value = await AsyncStorage.multiGet(s4Questions);
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
function TestFormS4(props) {
  const [submit, setSubmit] = useState(false);

  var questionRows = [];
  //setStudentAnswers(result);
  var answerArr = FetchOneResource();
  console.log(answerArr);

  if (answerArr !== "Loading...") {
    var answerObj = {};
    for (let i = 0; i < answerArr.length; i++) {
      answerObj[answerArr[i][0]] = answerArr[i][1];
    }
    // console.log(studentAnswers);

    for (let i = 0; i < 30; i++) {
      let val = answerObj[`S4${i}`];
      if (val !== null) {
        questionRows.push([
          <S4QuestionRow qNumber={i} submit={submit} initial={val} />
        ]);
      } else {
        questionRows.push([
          <S4QuestionRow qNumber={i} submit={submit} initial={-1} />
        ]);
      }
    }

    for (let i = 30; i < 38; i++) {
      let val = answerObj[`S4${i}`];
      // console.log(val);
      if (val !== null) {
        questionRows.push([
          <S4ManualQuestionRow qNumber={i} submit={submit} initial={val} />
        ]);
      } else {
        questionRows.push([
          <S4ManualQuestionRow qNumber={i} submit={submit} initial={""} />
        ]);
      }
    }

    return (
      <FlatList
        data={questionRows}
        renderItem={({ item }) => <View style={styles.container}>{item}</View>}
        removeClippedSubviews={false}
        windowSize={10}
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
  box: {
    margin: 2,
    width: Dimensions.get("window").width - 50,
    height: 60,
    backgroundColor: "#f1c40f",
    alignItems: "center",
    flexDirection: "row"
  }
});

export default memo(TestFormS4);
