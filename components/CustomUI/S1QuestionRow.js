import React, { useEffect, useState, useContext, memo } from "react";
import Checkbox from "../CustomUI/CheckBox";
import { AsyncStorage } from "react-native";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions
} from "react-native";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";
import getInitialProps from "../CustomHooks/getInitialProps";

function S1QuestionRow(props) {
  const [initialCode, setInitialCode] = useState(Number(props.initial));
  const [answer, isBlank, isGuess, code] = getInitialProps(initialCode);
  const [blankCheck, setBlankCheck] = useState(false);
  const [guessCheck, setGuessCheck] = useState(false);
  const [alreadyBlank, setAlreadyBlank] = useState(true);
  const [alreadyGuess, setAlreadyGuess] = useState(true);
  const [pickedAnswer, setPickedAnswer] = useState(props.initial);
  //const [result, loading] = useAsyncGrabGrade(`S1${props.qNumber}`);

  //   useEffect(() => {
  //     setState({ ...state, [`S1${props.qNumber}`]: studentAnswer });
  //   }, [props.submit]);

  console.log(code);

  if (isBlank) {
    var guessCheckBox;
    var radioButton = (
      <RadioForm
        radio_props={[]}
        formHorizontal={true}
        labelHorizontal={false}
        initial={-1}
      />
    );
    AsyncStorage.setItem(`S1${props.qNumber}`, `${code}`);
  } else {
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
          checked={isGuess}
          size={30}
          question={props.qNumber}
          onCheck={() => {
            if (initialCode != -1) {
              //console.log("1st picked ans", pickedAnswer);
              if (isGuess) {
                AsyncStorage.setItem(
                  `S1${props.qNumber}`,
                  `${initialCode - 4}`
                ).then(() => {
                  setInitialCode(initialCode - 4);
                });
              } else {
                AsyncStorage.setItem(
                  `S1${props.qNumber}`,
                  `${initialCode + 4}`
                ).then(() => {
                  setInitialCode(initialCode + 4);
                });
              }
            } else {
              AsyncStorage.setItem(`S1${props.qNumber}`, `-2`).then(() => {
                setInitialCode(-2);
              });
            }
          }}
        />
        <Text>Guess</Text>
      </View>
    );

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
        initial={answer}
        onPress={value => {
          if (isGuess) {
            //console.log("neg val + 1", value);
            AsyncStorage.setItem(`S1${props.qNumber}`, `${value + 4}`).then(
              () => {
                setInitialCode(value + 4);
              }
            );
          } else {
            AsyncStorage.setItem(`S1${props.qNumber}`, `${value}`).then(() => {
              setInitialCode(value);
            });
          }
        }}
      />
    );
  }

  let blankCheckBox = (
    <Checkbox
      checked={isBlank}
      size={30}
      question={props.qNumber}
      onCheck={() => {
        if (answer != -1) {
          if (isBlank) {
            setInitialCode(initialCode - 8);
          } else {
            setInitialCode(initialCode + 8);
          }
        } else {
          if (isBlank) {
            setInitialCode(-1);
          } else {
            setInitialCode(-3);
          }
        }
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

export default memo(S1QuestionRow);
