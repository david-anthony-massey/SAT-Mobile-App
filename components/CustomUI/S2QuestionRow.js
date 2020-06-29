import React, { useEffect, useState, useContext, memo } from "react";
import Checkbox from "../CustomUI/CheckBox";
import { AsyncStorage } from "react-native";
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View,
  ScrollView,
  Dimensions
} from "react-native";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";

function S2QuestionRow(props) {
  const [blankCheck, setBlankCheck] = useState(false);
  const [guessCheck, setGuessCheck] = useState(false);
  const [alreadyBlank, setAlreadyBlank] = useState(true);
  const [alreadyGuess, setAlreadyGuess] = useState(true);
  const [pickedAnswer, setPickedAnswer] = useState(props.initial);
  //const [result, loading] = useAsyncGrabGrade(`S1${props.qNumber}`);

  //   useEffect(() => {
  //     setState({ ...state, [`S1${props.qNumber}`]: studentAnswer });
  //   }, [props.submit]);

  if (blankCheck) {
    var guessCheckBox;
    var radioButton = (
      <RadioForm
        radio_props={[]}
        formHorizontal={true}
        labelHorizontal={false}
        initial={-1}
      />
    );

    AsyncStorage.setItem(`S2${props.qNumber}`, "-10");
  } else {
    //console.log(props.initial, "initial");
    if (props.initial === -11 && alreadyBlank) {
      setAlreadyBlank(false);
      setBlankCheck(true);
    } else if (props.initial > -11 && props.initial < 0 && alreadyGuess) {
      setAlreadyGuess(false);
      setGuessCheck(true);
      setPickedAnswer(Math.abs(props.initial) - 1);
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

    var guessCheckBox = (
      <View>
        <Checkbox
          checked={guessCheck}
          size={30}
          question={props.qNumber}
          onCheck={() => {
            //console.log("1st picked ans", pickedAnswer);
            if (guessCheck) {
              AsyncStorage.setItem(`S2${props.qNumber}`, `${pickedAnswer}`);
            } else {
              AsyncStorage.setItem(
                `S2${props.qNumber}`,
                `-${pickedAnswer + 1}`
              );
            }
            setGuessCheck(!guessCheck);
          }}
        />
        <Text>Guess</Text>
      </View>
    );

    if (guessCheck) {
      // console.log(guessCheck);
      var ans = Math.abs(props.initial) - 1;
    } else if (props.initial === -12) {
      var ans = -1;
    } else {
      var ans = props.initial;
    }

    var radioButton = (
      <RadioForm
        radio_props={[
          { label: "A", value: 0 },
          { label: "B", value: 1 },
          { label: "C", value: 2 },
          { label: "D", value: 3 }
        ]}
        formHorizontal={true}
        labelHorizontal={false}
        initial={ans}
        onPress={value => {
          if (guessCheck) {
            //console.log("neg val + 1", value);
            setPickedAnswer(value);
            AsyncStorage.setItem(`S2${props.qNumber}`, `-${value + 1}`);
          } else {
            setPickedAnswer(value);
            AsyncStorage.setItem(`S2${props.qNumber}`, `${value}`);
          }
        }}
      />
    );
  }

  let blankCheckBox = (
    <Checkbox
      checked={blankCheck}
      size={30}
      question={props.qNumber}
      onCheck={() => {
        setBlankCheck(!blankCheck);
      }}
    />
  );

  return (
    <View style={styles.box}>
      <Text>{`#${props.qNumber + 1}`}</Text>
      {radioButton}
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

export default memo(S2QuestionRow);
