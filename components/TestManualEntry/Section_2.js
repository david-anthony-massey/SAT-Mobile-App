import React, { useEffect, useState, memo } from "react";
import { s2Questions } from "../useful";
import S2QuestionRow from "../CustomUI/S2QuestionRow";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
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
      const value = await AsyncStorage.multiGet(s2Questions);
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

function TestFormS2(props) {
  const [submit, setSubmit] = useState(false);

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

    for (let i = 0; i < 44; i++) {
      let val = answerObj[`S2${i}`];
      //console.log(val);
      if (val !== null) {
        questionRows.push([
          <S2QuestionRow qNumber={i} submit={submit} initial={val} />
        ]);
      } else {
        questionRows.push([
          <S2QuestionRow qNumber={i} submit={submit} initial={-1} />
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

export default memo(TestFormS2);
