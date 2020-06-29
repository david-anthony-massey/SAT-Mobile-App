import React, { useEffect, useState, memo } from "react";
import S2QuestionRow from "../CustomUI/S2QuestionRow";
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
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
      const value = await AsyncStorage.multiGet([
        "S20",
        "S21",
        "S22",
        "S23",
        "S24",
        "S25",
        "S26",
        "S27",
        "S28",
        "S29",
        "S210",
        "S211",
        "S212",
        "S213",
        "S214",
        "S215",
        "S216",
        "S217",
        "S218",
        "S219",
        "S220",
        "S221",
        "S222",
        "S223",
        "S224",
        "S225",
        "S226",
        "S227",
        "S228",
        "S229",
        "S230",
        "S231",
        "S232",
        "S233",
        "S234",
        "S235",
        "S236",
        "S237",
        "S238",
        "S239",
        "S240",
        "S241",
        "S242",
        "S243"
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
        val = Number(val);
        if (val === -10) {
          questionRows.push([
            <S2QuestionRow qNumber={i} submit={submit} initial={-11} />
          ]);
        } else {
          questionRows.push([
            <S2QuestionRow qNumber={i} submit={submit} initial={val} />
          ]);
        }
      } else {
        questionRows.push([
          <S2QuestionRow qNumber={i} submit={submit} initial={-12} />
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
