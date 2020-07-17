import React, { useEffect, useState, useContext, memo } from "react";
import Checkbox from "../CustomUI/CheckBox";
import { AsyncStorage } from "react-native";
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Dimensions
} from "react-native";

function S4ManualQuestionRow(props) {
  const [blankCheck, setBlankCheck] = useState(false);
  const [guessCheck, setGuessCheck] = useState(false);
  const [alreadyBlank, setAlreadyBlank] = useState(true);
  const [alreadyGuess, setAlreadyGuess] = useState(true);
  const [pickedAnswer, setPickedAnswer] = useState(props.initial);

  if (blankCheck) {
    var guessCheckBox;
    var manualAnswerForm = <></>;

    AsyncStorage.setItem(`S4${props.qNumber}`, "blank");
  } else {
    //console.log(props.initial, "initial");
    if (props.initial === "blank" && alreadyBlank) {
      setAlreadyBlank(false);
      setBlankCheck(true);
    } else if (props.initial[0] === "ß" && alreadyGuess) {
      setAlreadyGuess(false);
      setGuessCheck(true);
      setPickedAnswer(props.initial.slice(1));
    } else if (props.initial === -12) {
      setPickedAnswer("");
    } else if (props.initial !== pickedAnswer) {
    }

    // AsyncStorage.getItem(`S1${props.qNumber}`).then(value => {
    //   if (value === null) {
    //     console.log("nope");
    //     setStudentAnswer(-1);
    //   } else {
    //     console.log("yep");
    //     setStudentAnswer(Number(value));
    //   }
    // });
    if (props.initial === "blank" || props.initial === "null") {
      var ans = "";
    } else if (guessCheck && pickedAnswer[0] === "ß") {
      setPickedAnswer(pickedAnswer.slice(1));
    } else {
      var ans = pickedAnswer;
    }

    console.log(ans);
    var guessCheckBox = (
      <View>
        <Checkbox
          checked={guessCheck}
          size={30}
          question={props.qNumber}
          onCheck={() => {
            //console.log("1st picked ans", pickedAnswer);
            if (guessCheck) {
              AsyncStorage.setItem(
                `S4${props.qNumber}`,
                `${pickedAnswer}`
              ).then(() => {
                setGuessCheck(!guessCheck);
              });
            } else {
              AsyncStorage.setItem(
                `S4${props.qNumber}`,
                `ß${pickedAnswer}`
              ).then(() => {
                setGuessCheck(!guessCheck);
              });
            }
          }}
        />
        <Text>Guess</Text>
      </View>
    );

    var manualAnswerForm = (
      <TextInput
        style={{
          height: 40,
          width: 80,
          textAlign: "center",
          borderColor: "gray",
          borderWidth: 1
        }}
        maxLength={4}
        onChangeText={text => {
          console.log(`a${ans}a _ t${text}t`);
          if (guessCheck) {
            AsyncStorage.setItem(`S4${props.qNumber}`, `ß${text}`).then(() => {
              setPickedAnswer(text);
            });
          } else {
            AsyncStorage.setItem(`S4${props.qNumber}`, `${text}`).then(() => {
              setPickedAnswer(text);
            });
          }
        }}
        defaultValue={ans}
      />
    );
  }

  let blankCheckBox = (
    <Checkbox
      checked={blankCheck}
      size={30}
      question={props.qNumber}
      onCheck={() => {
        if (blankCheck) {
          AsyncStorage.setItem(`S4${props.qNumber}`, "").then(() => {
            setBlankCheck(!blankCheck);
          });
        } else {
          setBlankCheck(!blankCheck);
        }
      }}
    />
  );

  return (
    <View style={styles.box}>
      <Text>{`#${props.qNumber + 1}`}</Text>
      {manualAnswerForm}
      <View style={{ marginLeft: 20 }}>
        {blankCheckBox}
        <Text>Blank</Text>
      </View>
      {guessCheckBox}
    </View>
  );
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

export default memo(S4ManualQuestionRow);
