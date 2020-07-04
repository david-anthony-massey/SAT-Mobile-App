import React, { useEffect, useState, memo } from "react";
import S3QuestionRow from "../CustomUI/S3QuestionRow";
import S3ManualQuestionRow from "../CustomUI/S3ManualQuestionRow";
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

function useA() {
  const [valueA, setValueA] = useState(null);
  const [errorA, setErrorA] = useState(null);
  const [loadingA, setLoadingA] = useState(true);

  async function getA() {
    try {
      setLoadingA(true);
      //const value = await AsyncStorage.getAllKeys();
      const value = await AsyncStorage.multiGet([
        "S30",
        "S31",
        "S32",
        "S33",
        "S34",
        "S35",
        "S36",
        "S37",
        "S38",
        "S39",
        "S310",
        "S311",
        "S312",
        "S313",
        "S314",
        "S315",
        "S316",
        "S317",
        "S318",
        "S319"
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
function TestFormS3(props) {
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

    for (let i = 0; i < 15; i++) {
      let val = answerObj[`S3${i}`];
      // console.log(val);
      if (val !== null) {
        val = Number(val);
        if (val === -10) {
          questionRows.push([
            <S3QuestionRow qNumber={i} submit={submit} initial={-11} />
          ]);
        } else {
          questionRows.push([
            <S3QuestionRow qNumber={i} submit={submit} initial={val} />
          ]);
        }
      } else {
        questionRows.push([
          <S3QuestionRow qNumber={i} submit={submit} initial={-12} />
        ]);
      }
    }

    for (let i = 15; i < 20; i++) {
      let val = answerObj[`S3${i}`];
      // console.log(val);
      if (val !== null) {
        questionRows.push([
          <S3ManualQuestionRow qNumber={i} submit={submit} initial={val} />
        ]);
      } else {
        questionRows.push([
          <S3ManualQuestionRow qNumber={i} submit={submit} initial={"-"} />
        ]);
      }
    }

    // console.log(state);

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

export default memo(TestFormS3);
