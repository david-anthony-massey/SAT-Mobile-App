import React, { useEffect, useState, useContext } from "react";
import Checkbox from "../CustomUI/CheckBox";
import GlobalState from "../../GlobalState";
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

function convertAnswer(answerStr) {
  let numberLetter = {
    0: "A",
    1: "B",
    2: "C",
    3: "D",
    4: "A",
    5: "B",
    6: "C",
    7: "D",
    A: 0,
    B: 1,
    C: 2,
    D: 3
  };

  if (numberLetter[answerStr] !== undefined) return numberLetter[answerStr];

  return "blank";
}

export default function useAsyncGradeTest(correctAnswers, customGrading) {
  const [feedback, setFeedback] = useState([
    { S1: [], S2: [], S3: [], S4: [] },
    { S1: [], S2: [], S3: [], S4: [] }
  ]);
  const [grades, setGrades] = useState({
    S1: [],
    S2: [],
    S3: [],
    S4: []
  });
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    async function fetchList() {
      try {
        setLoading(true);
        const S4studentAnswers = await AsyncStorage.multiGet([
          "S40",
          "S41",
          "S42",
          "S43",
          "S44",
          "S45",
          "S46",
          "S47",
          "S48",
          "S49",
          "S410",
          "S411",
          "S412",
          "S413",
          "S414",
          "S415",
          "S416",
          "S417",
          "S418",
          "S419",
          "S420",
          "S421",
          "S422",
          "S423",
          "S424",
          "S425",
          "S426",
          "S427",
          "S428",
          "S429",
          "S430",
          "S431",
          "S432",
          "S433",
          "S434",
          "S435",
          "S436",
          "S437"
        ]);
        const S3studentAnswers = await AsyncStorage.multiGet([
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

        const S2studentAnswers = await AsyncStorage.multiGet([
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

        const S1studentAnswers = await AsyncStorage.multiGet([
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

        console.log(`S1studentAnswers`, S1studentAnswers);
        console.log(`correctAnswers`, correctAnswers);
        let studentGuesses = { S1: [], S2: [], S3: [], S4: [] };
        let incorrectAnswers = { S1: [], S2: [], S3: [], S4: [] };
        for (let i = 0; i < 52; i++) {
          let correctAnswer = correctAnswers.S1[i];
          console.log(`correctAnswer`, correctAnswer);
          console.log(`S1studentAnswers`, S1studentAnswers[i][1]);
          let studentAnswer = convertAnswer(S1studentAnswers[i][1]);

          if (studentAnswer == "blank") {
            incorrectAnswers.S1.push([i + 1, "blank", correctAnswer]);
            console.log(`this wasn't answered`, incorrectAnswers.S1);
            continue;
          }

          if (S1studentAnswers[i][1] >= 4) {
            if (studentAnswer == correctAnswer) {
              studentGuesses.S1.push([i + 1, correctAnswer]);
              console.log(`a guess occurred S1`);
              continue;
            } else {
              incorrectAnswers.S1.push([i + 1, studentAnswer, correctAnswer]);
              continue;
            }
          }

          if (studentAnswer != correctAnswer) {
            incorrectAnswers.S1.push([i + 1, studentAnswer, correctAnswer]);
            console.log(`this is an incorrect answer`, incorrectAnswers.S1);
          }
        }

        for (let i = 0; i < 44; i++) {
          console.log(`correctAnswers.S2[i]`, correctAnswers.S2[i]);
          let correctAnswer = correctAnswers.S2[i];
          console.log(`!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`);
          let studentAnswer = convertAnswer(S2studentAnswers[i][1]);

          if (studentAnswer == "blank") {
            incorrectAnswers.S2.push([i + 1, "blank", correctAnswer]);
            console.log(`this wasn't answered`, incorrectAnswers.S2);
            continue;
          }
          if (S2studentAnswers[i][1] >= 4) {
            if (studentAnswer == correctAnswer) {
              studentGuesses.S2.push([i + 1, correctAnswer]);
              continue;
            } else {
              incorrectAnswers.S2.push([i + 1, studentAnswer, correctAnswer]);
              continue;
            }
          }

          if (studentAnswer != correctAnswer) {
            incorrectAnswers.S2.push([i + 1, studentAnswer, correctAnswer]);
          }
        }

        for (let i = 0; i < 15; i++) {
          let correctAnswer = correctAnswers.S3[i];
          let studentAnswer = convertAnswer(S3studentAnswers[i][1]);

          if (studentAnswer == "blank") {
            incorrectAnswers.S3.push([i + 1, "blank", correctAnswer]);
            console.log(`this wasn't answered`, incorrectAnswers.S3);
            continue;
          }
          if (S3studentAnswers[i][1] >= 4) {
            if (studentAnswer == correctAnswer) {
              studentGuesses.S3.push([i + 1, correctAnswer]);
              continue;
            } else {
              incorrectAnswers.S3.push([i + 1, studentAnswer, correctAnswer]);
              continue;
            }
          }

          if (studentAnswer != correctAnswer) {
            incorrectAnswers.S3.push([i + 1, studentAnswer, correctAnswer]);
          }
        }

        for (let i = 15; i < 20; i++) {
          let studentAnswer = S3studentAnswers[i][1];

          if (studentAnswer == null) {
            incorrectAnswers.S3.push([i + 1, "blank", correctAnswers.S3[i][1]]);
            console.log(`this wasn't answered`, incorrectAnswers.S3);
            continue;
          }

          if (studentAnswer[0] === "ß") {
            if (correctAnswers.S3[i][0](studentAnswer.slice(1))) {
              studentGuesses.S3.push([i + 1, correctAnswers.S3[i][1]]);
              continue;
            } else {
              incorrectAnswers.S3.push([
                i + 1,
                studentAnswer.slice(1),
                correctAnswers.S3[i][1]
              ]);
              continue;
            }
          }

          if (!correctAnswers.S3[i][0](studentAnswer)) {
            incorrectAnswers.S3.push([
              i + 1,
              studentAnswer,
              correctAnswers.S3[i][1]
            ]);
            console.log(
              `this is an incorrect answer S3 FR`,
              incorrectAnswers.S3
            );
          }
        }

        for (let i = 0; i < 30; i++) {
          let correctAnswer = correctAnswers.S4[i];
          let studentAnswer = convertAnswer(S4studentAnswers[i][1]);

          if (studentAnswer == "blank") {
            incorrectAnswers.S4.push([i + 1, "blank", correctAnswer]);
            console.log(`this wasn't answered`, incorrectAnswers.S4);
            continue;
          }

          if (S4studentAnswers[i][1] >= 4) {
            if (studentAnswer == correctAnswer) {
              studentGuesses.S4.push([i + 1, correctAnswer]);
              continue;
            } else {
              incorrectAnswers.S4.push([i + 1, studentAnswer, correctAnswer]);
              continue;
            }
          }

          if (studentAnswer != correctAnswer) {
            incorrectAnswers.S4.push([i + 1, studentAnswer, correctAnswer]);
          }
        }

        for (let i = 30; i < 38; i++) {
          let studentAnswer = S4studentAnswers[i][1];

          if (studentAnswer == null) {
            incorrectAnswers.S4.push([i, "blank", correctAnswers.S4[i][1]]);
            console.log(`this wasn't answered`, incorrectAnswers.S4);
            continue;
          }
          if (studentAnswer[0] === "ß") {
            if (correctAnswers.S4[i][0](studentAnswer.slice(1))) {
              studentGuesses.S4.push([i + 1, correctAnswers.S4[i][1]]);
              continue;
            } else {
              incorrectAnswers.S4.push([
                i + 1,
                studentAnswer.slice(1),
                correctAnswers.S4[i][1]
              ]);
              continue;
            }
          }

          if (!correctAnswers.S4[i][0](studentAnswer)) {
            incorrectAnswers.S4.push([
              i + 1,
              studentAnswer,
              correctAnswers.S4[i][1]
            ]);
          }
        }

        console.log(`incorrectAnswers.S1.length`, incorrectAnswers.S1.length);

        let scores = [
          customGrading.reading[incorrectAnswers.S1.length],
          customGrading.writing[incorrectAnswers.S2.length],
          customGrading.math[
            incorrectAnswers.S3.length + incorrectAnswers.S4.length
          ],
          incorrectAnswers.S3.length,
          incorrectAnswers.S4.length
        ];
        setFeedback([incorrectAnswers, studentGuesses]);
        setGrades(scores);
        setLoading(false);
      } catch (error) {
        setLoading(null);
      }
    }

    fetchList();
  }, []);

  console.log(`feedback, grades, loading`, feedback, grades, loading);

  return [[feedback, grades], loading];
}
