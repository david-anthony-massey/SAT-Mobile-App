import * as React from "react";
import * as Font from "expo-font";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import { Button, ListItem } from "react-native-elements";
import { useNavigation, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export const testData = [
  {
    title: "Official SAT® Practice Test 1",
    answers: {
      S1: [
        "B",
        "B",
        "C",
        "A",
        "C",
        "D",
        "D",
        "B",
        "C",
        "B",
        "A",
        "B",
        "D",
        "A",
        "A",
        "C",
        "C",
        "D",
        "A",
        "B",
        "A",
        "B",
        "D",
        "D",
        "C",
        "B",
        "D",
        "C",
        "A",
        "A",
        "D",
        "B",
        "A",
        "C",
        "B",
        "D",
        "C",
        "C",
        "B",
        "C",
        "B",
        "B",
        "A",
        "A",
        "D",
        "C",
        "B",
        "A",
        "D",
        "B",
        "D",
        "A"
      ],
      S2: [
        "D",
        "B",
        "A",
        "C",
        "C",
        "D",
        "B",
        "C",
        "A",
        "A",
        "B",
        "B",
        "A",
        "B",
        "C",
        "C",
        "C",
        "A",
        "D",
        "D",
        "B",
        "D",
        "D",
        "D",
        "B",
        "A",
        "B",
        "C",
        "B",
        "D",
        "C",
        "A",
        "A",
        "A",
        "A",
        "B",
        "D",
        "C",
        "A",
        "B",
        "B",
        "C",
        "D",
        "D"
      ],
      S3: [
        "D",
        "A",
        "C",
        "B",
        "C",
        "A",
        "B",
        "C",
        "B",
        "A",
        "D",
        "D",
        "B",
        "A",
        "D",
        [
          studentAnswer => {
            let correctAnswer = 2;
            studentAnswer = studentAnswer.split(" ").join("");
            if (Number(studentAnswer) === correctAnswer) {
              return true;
            }
            let studentAnswers = studentAnswer.split("/");
            if (studentAnswers[0] / studentAnswers[1] === correctAnswer) {
              return true;
            }
            return false;
          },
          "2"
        ],
        [
          studentAnswer => {
            let correctAnswer = 1600;
            studentAnswer = studentAnswer.split(" ").join("");
            if (Number(studentAnswer) === correctAnswer) {
              return true;
            }
            let studentAnswers = studentAnswer.split("/");
            if (studentAnswers[0] / studentAnswers[1] === correctAnswer) {
              return true;
            }
            return false;
          },
          "1600"
        ],
        [
          studentAnswer => {
            let correctAnswer = 7;
            studentAnswer = studentAnswer.split(" ").join("");
            if (Number(studentAnswer) === correctAnswer) {
              return true;
            }
            let studentAnswers = studentAnswer.split("/");
            if (studentAnswers[0] / studentAnswers[1] === correctAnswer) {
              return true;
            }
            return false;
          },
          "7"
        ],
        [
          studentAnswer => {
            let correctAnswer = 0.8;
            studentAnswer = studentAnswer.split(" ").join("");
            if (Number(studentAnswer) === correctAnswer) {
              return true;
            }
            let studentAnswers = studentAnswer.split("/");
            if (studentAnswers[0] / studentAnswers[1] === correctAnswer) {
              return true;
            }
            return false;
          },
          "4/5 or .8"
        ],
        [
          studentAnswer => {
            let correctAnswer = 100;
            studentAnswer = studentAnswer.split(" ").join("");
            if (Number(studentAnswer) === correctAnswer) {
              return true;
            }
            let studentAnswers = studentAnswer.split("/");
            if (studentAnswers[0] / studentAnswers[1] === correctAnswer) {
              return true;
            }
            return false;
          },
          "100"
        ]
      ],
      S4: [
        "B",
        "C",
        "D",
        "C",
        "D",
        "D",
        "C",
        "D",
        "A",
        "B",
        "A",
        "C",
        "C",
        "C",
        "A",
        "C",
        "B",
        "A",
        "B",
        "D",
        "C",
        "B",
        "B",
        "A",
        "D",
        "B",
        "C",
        "C",
        "D",
        "D",
        [
          studentAnswer => {
            let correctAnswers = [4, 6];
            studentAnswer = studentAnswer.split(" ").join("");
            if (
              Number(studentAnswer) >= correctAnswers[0] &&
              Number(studentAnswer) <= correctAnswers[1]
            ) {
              return true;
            }
            let studentAnswers = studentAnswer.split("/");
            studentAnswer = studentAnswers[0] / studentAnswers[1];
            if (
              studentAnswer >= correctAnswers[0] &&
              studentAnswer <= correctAnswers[1]
            ) {
              return true;
            }
            return false;
          },
          "Anything between 4 and 6"
        ],
        [
          studentAnswer => {
            let correctAnswer = 107;
            studentAnswer = studentAnswer.split(" ").join("");
            if (Number(studentAnswer) === correctAnswer) {
              return true;
            }
            let studentAnswers = studentAnswer.split("/");
            if (studentAnswers[0] / studentAnswers[1] === correctAnswer) {
              return true;
            }
            return false;
          },
          "107"
        ],
        [
          studentAnswer => {
            let correctAnswer = 0.625;
            studentAnswer = studentAnswer.split(" ").join("");
            if (Number(studentAnswer) === correctAnswer) {
              return true;
            }
            let studentAnswers = studentAnswer.split("/");
            if (studentAnswers[0] / studentAnswers[1] === correctAnswer) {
              return true;
            }
            return false;
          },
          "5/8 or .625"
        ],
        [
          studentAnswer => {
            let correctAnswer = 96;
            studentAnswer = studentAnswer.split(" ").join("");
            if (Number(studentAnswer) === correctAnswer) {
              return true;
            }
            let studentAnswers = studentAnswer.split("/");
            if (studentAnswers[0] / studentAnswers[1] === correctAnswer) {
              return true;
            }
            return false;
          },
          "96"
        ],
        [
          studentAnswer => {
            let correctAnswer = 6;
            studentAnswer = studentAnswer.split(" ").join("");
            if (Number(studentAnswer) === correctAnswer) {
              return true;
            }
            let studentAnswers = studentAnswer.split("/");
            if (studentAnswers[0] / studentAnswers[1] === correctAnswer) {
              return true;
            }
            return false;
          },
          "6"
        ],
        [
          studentAnswer => {
            let correctAnswer = 3;
            studentAnswer = studentAnswer.split(" ").join("");
            if (Number(studentAnswer) === correctAnswer) {
              return true;
            }
            let studentAnswers = studentAnswer.split("/");
            if (studentAnswers[0] / studentAnswers[1] === correctAnswer) {
              return true;
            }
            return false;
          },
          "3"
        ],
        [
          studentAnswer => {
            let correctAnswer = 1.02;
            studentAnswer = studentAnswer.split(" ").join("");
            if (Number(studentAnswer) === correctAnswer) {
              return true;
            }
            let studentAnswers = studentAnswer.split("/");
            if (studentAnswers[0] / studentAnswers[1] === correctAnswer) {
              return true;
            }
            return false;
          },
          "1.02"
        ],
        [
          studentAnswer => {
            let correctAnswer = 6.11;
            studentAnswer = studentAnswer.split(" ").join("");
            if (Number(studentAnswer) === correctAnswer) {
              return true;
            }
            let studentAnswers = studentAnswer.split("/");
            if (studentAnswers[0] / studentAnswers[1] === correctAnswer) {
              return true;
            }
            return false;
          },
          "6.11"
        ]
      ]
    },
    grading: {
      math: {
        0: 800,
        1: 790,
        2: 780,
        3: 760,
        4: 750,
        5: 740,
        6: 730,
        7: 710,
        8: 700,
        9: 690,
        10: 680,
        11: 670,
        12: 670,
        13: 660,
        14: 650,
        15: 640,
        16: 630,
        17: 620,
        18: 610,
        19: 600,
        20: 600,
        21: 590,
        22: 580,
        23: 570,
        24: 560,
        25: 560,
        26: 550,
        27: 540,
        28: 530,
        29: 520,
        30: 520,
        31: 510,
        32: 500,
        33: 490,
        34: 480,
        35: 480,
        36: 470,
        37: 460,
        38: 450,
        39: 440,
        40: 430,
        41: 420,
        42: 410,
        43: 390,
        44: 380,
        45: 370,
        46: 360,
        47: 340,
        48: 330,
        49: 320,
        50: 310,
        51: 290,
        52: 280,
        53: 260,
        54: 240,
        55: 230,
        56: 210,
        57: 200,
        58: 200
      },
      reading: {
        0: 40,
        1: 40,
        2: 39,
        3: 38,
        4: 38,
        5: 37,
        6: 37,
        7: 36,
        8: 35,
        9: 35,
        10: 34,
        11: 33,
        12: 33,
        13: 32,
        14: 32,
        15: 31,
        16: 31,
        17: 30,
        18: 30,
        19: 29,
        20: 29,
        21: 28,
        22: 28,
        23: 27,
        24: 26,
        25: 26,
        26: 25,
        27: 25,
        28: 24,
        29: 24,
        30: 23,
        31: 23,
        32: 22,
        33: 22,
        34: 21,
        35: 21,
        36: 20,
        37: 20,
        38: 19,
        39: 19,
        40: 18,
        41: 17,
        42: 17,
        43: 16,
        44: 15,
        45: 15,
        46: 14,
        47: 13,
        48: 12,
        49: 11,
        50: 10,
        51: 10,
        52: 10
      },
      writing: {
        0: 40,
        1: 39,
        2: 38,
        3: 37,
        4: 36,
        5: 35,
        6: 34,
        7: 34,
        8: 33,
        9: 32,
        10: 32,
        11: 31,
        12: 30,
        13: 30,
        14: 29,
        15: 28,
        16: 28,
        17: 27,
        18: 26,
        19: 26,
        20: 25,
        21: 25,
        22: 24,
        23: 23,
        24: 23,
        25: 22,
        26: 21,
        27: 21,
        28: 20,
        29: 19,
        30: 19,
        31: 18,
        32: 17,
        33: 16,
        34: 16,
        35: 15,
        36: 14,
        37: 13,
        38: 13,
        39: 12,
        40: 11,
        41: 10,
        42: 10,
        43: 10,
        44: 10
      }
    },
    concepts: {
      S1: [],
      S2: [],
      S3: [],
      S4: []
    }
  },
  {
    title: "Official SAT® Practice Test 2",
    answers: {
      S1: [],
      S2: [],
      S3: [],
      S4: []
    },
    grading: {
      math: {},
      reading: {},
      writing: {}
    },
    concepts: {
      S1: [],
      S2: [],
      S3: [],
      S4: []
    }
  },
  {
    title: "Official SAT® Practice Test 3",
    answers: {
      S1: [],
      S2: [],
      S3: [],
      S4: []
    },
    grading: {
      math: {},
      reading: {},
      writing: {}
    },
    concepts: {
      S1: [],
      S2: [],
      S3: [],
      S4: []
    }
  },
  {
    title: "Official SAT® Practice Test 4",
    answers: {
      S1: [],
      S2: [],
      S3: [],
      S4: []
    },
    grading: {
      math: {},
      reading: {},
      writing: {}
    },
    concepts: {
      S1: [],
      S2: [],
      S3: [],
      S4: []
    }
  },
  {
    title: "Official SAT® Practice Test 5",
    answers: {
      S1: [],
      S2: [],
      S3: [],
      S4: []
    },
    grading: {
      math: {},
      reading: {},
      writing: {}
    },
    concepts: {
      S1: [],
      S2: [],
      S3: [],
      S4: []
    }
  },
  {
    title: "Official SAT® Practice Test 6",
    answers: {
      S1: [],
      S2: [],
      S3: [],
      S4: []
    },
    grading: {
      math: {},
      reading: {},
      writing: {}
    },
    concepts: {
      S1: [],
      S2: [],
      S3: [],
      S4: []
    }
  },
  {
    title: "Official SAT® Practice Test 7",
    answers: {
      S1: [],
      S2: [],
      S3: [],
      S4: []
    },
    grading: {
      math: {},
      reading: {},
      writing: {}
    },
    concepts: {
      S1: [],
      S2: [],
      S3: [],
      S4: []
    }
  },
  {
    title: "Official SAT® Practice Test 8",
    answers: {
      S1: [],
      S2: [],
      S3: [],
      S4: []
    },
    grading: {
      math: {},
      reading: {},
      writing: {}
    },
    concepts: {
      S1: [],
      S2: [],
      S3: [],
      S4: []
    }
  },
  {
    title: "Official SAT® Practice Test 9",
    answers: {
      S1: [],
      S2: [],
      S3: [],
      S4: []
    },
    grading: {
      math: {},
      reading: {},
      writing: {}
    },
    concepts: {
      S1: [],
      S2: [],
      S3: [],
      S4: []
    }
  },
  {
    title: "Official SAT® Practice Test 10",
    answers: {
      S1: [
        "A",
        "B",
        "D",
        "B",
        "A",
        "A",
        "D",
        "C",
        "C",
        "B",
        "D",
        "A",
        "A",
        "B",
        "C",
        "C",
        "D",
        "C",
        "B",
        "B",
        "D",
        "D",
        "B",
        "A",
        "C",
        "C",
        "B",
        "D",
        "A",
        "D",
        "A",
        "B",
        "C",
        "B",
        "B",
        "D",
        "C",
        "A",
        "A",
        "B",
        "D",
        "A",
        "A",
        "B",
        "D",
        "C",
        "A",
        "B",
        "C",
        "A",
        "C",
        "D"
      ],
      S2: [
        "A",
        "D",
        "A",
        "A",
        "D",
        "A",
        "C",
        "D",
        "D",
        "C",
        "C",
        "D",
        "A",
        "D",
        "C",
        "B",
        "B",
        "A",
        "D",
        "B",
        "C",
        "B",
        "C",
        "A",
        "A",
        "B",
        "D",
        "B",
        "C",
        "C",
        "B",
        "B",
        "A",
        "C",
        "D",
        "C",
        "B",
        "C",
        "C",
        "D",
        "A",
        "D",
        "A",
        "D"
      ],
      S3: [
        "B",
        "C",
        "B",
        "C",
        "A",
        "A",
        "D",
        "C",
        "C",
        "D",
        "A",
        "B",
        "C",
        "B",
        "A",
        [
          studentAnswer => {
            let correctAnswer = 2200;
            studentAnswer = studentAnswer.split(" ").join("");
            if (Number(studentAnswer) === correctAnswer) {
              return true;
            }
            let studentAnswers = studentAnswer.split("/");
            if (studentAnswers[0] / studentAnswers[1] === correctAnswer) {
              return true;
            }
            return false;
          },
          "2200"
        ],
        [
          studentAnswer => {
            let correctAnswer = 5;
            studentAnswer = studentAnswer.split(" ").join("");
            if (Number(studentAnswer) === correctAnswer) {
              return true;
            }
            let studentAnswers = studentAnswer.split("/");
            if (studentAnswers[0] / studentAnswers[1] === correctAnswer) {
              return true;
            }
            return false;
          },
          "5"
        ],
        [
          studentAnswer => {
            let correctAnswer = 1.21;
            studentAnswer = studentAnswer.split(" ").join("");
            if (Number(studentAnswer) === correctAnswer) {
              return true;
            }
            let studentAnswers = studentAnswer.split("/");
            if (studentAnswers[0] / studentAnswers[1] === correctAnswer) {
              return true;
            }
            return false;
          },
          "1.21"
        ],
        [
          studentAnswer => {
            let correctAnswer = 1.21;
            studentAnswer = studentAnswer.split(" ").join("");
            if (Number(studentAnswer) === correctAnswer) {
              return true;
            }
            let studentAnswers = studentAnswer.split("/");
            if (studentAnswers[0] / studentAnswers[1] === correctAnswer) {
              return true;
            }
            return false;
          },
          "1.21"
        ],
        [
          studentAnswer => {
            let correctAnswer = 2500;
            studentAnswer = studentAnswer.split(" ").join("");
            if (Number(studentAnswer) === correctAnswer) {
              return true;
            }
            let studentAnswers = studentAnswer.split("/");
            if (studentAnswers[0] / studentAnswers[1] === correctAnswer) {
              return true;
            }
            return false;
          },
          "2500"
        ],
        [
          studentAnswer => {
            let correctAnswer = 20;
            studentAnswer = studentAnswer.split(" ").join("");
            if (Number(studentAnswer) === correctAnswer) {
              return true;
            }
            let studentAnswers = studentAnswer.split("/");
            if (studentAnswers[0] / studentAnswers[1] === correctAnswer) {
              return true;
            }
            return false;
          },
          "20"
        ]
      ],
      S4: [
        "B",
        "A",
        "B",
        "C",
        "C",
        "D",
        "B",
        "C",
        "C",
        "D",
        "A",
        "C",
        "C",
        "A",
        "B",
        "C",
        "D",
        "C",
        "D",
        "C",
        "B",
        "D",
        "A",
        "B",
        "A",
        "D",
        "A",
        "D",
        "D",
        "A",
        [
          studentAnswer => {
            let correctAnswer = 6;
            studentAnswer = studentAnswer.split(" ").join("");
            if (Number(studentAnswer) === correctAnswer) {
              return true;
            }
            let studentAnswers = studentAnswer.split("/");
            if (studentAnswers[0] / studentAnswers[1] === correctAnswer) {
              return true;
            }
            return false;
          },
          "6"
        ],
        [
          studentAnswer => {
            let correctAnswer = 146;
            studentAnswer = studentAnswer.split(" ").join("");
            if (Number(studentAnswer) === correctAnswer) {
              return true;
            }
            let studentAnswers = studentAnswer.split("/");
            if (studentAnswers[0] / studentAnswers[1] === correctAnswer) {
              return true;
            }
            return false;
          },
          "146"
        ],
        [
          studentAnswer => {
            let correctAnswer = 2500;
            studentAnswer = studentAnswer.split(" ").join("");
            if (Number(studentAnswer) === correctAnswer) {
              return true;
            }
            let studentAnswers = studentAnswer.split("/");
            if (studentAnswers[0] / studentAnswers[1] === correctAnswer) {
              return true;
            }
            return false;
          },
          "2500"
        ],
        [
          studentAnswer => {
            let correctAnswer = 34;
            studentAnswer = studentAnswer.split(" ").join("");
            if (Number(studentAnswer) === correctAnswer) {
              return true;
            }
            let studentAnswers = studentAnswer.split("/");
            if (studentAnswers[0] / studentAnswers[1] === correctAnswer) {
              return true;
            }
            return false;
          },
          "34"
        ],
        [
          studentAnswer => {
            let correctAnswer = 5 / 2;
            studentAnswer = studentAnswer.split(" ").join("");
            if (Number(studentAnswer) === correctAnswer) {
              return true;
            }
            let studentAnswers = studentAnswer.split("/");
            if (studentAnswers[0] / studentAnswers[1] === correctAnswer) {
              return true;
            }
            return false;
          },
          "5/2 or 2.5"
        ],
        [
          studentAnswer => {
            let correctAnswer = 25 / 4;
            studentAnswer = studentAnswer.split(" ").join("");
            if (Number(studentAnswer) === correctAnswer) {
              return true;
            }
            let studentAnswers = studentAnswer.split("/");
            if (studentAnswers[0] / studentAnswers[1] === correctAnswer) {
              return true;
            }
            return false;
          },
          "25/4 or 6.25"
        ],
        [
          studentAnswer => {
            let correctAnswer = 293;
            studentAnswer = studentAnswer.split(" ").join("");
            if (Number(studentAnswer) === correctAnswer) {
              return true;
            }
            let studentAnswers = studentAnswer.split("/");
            if (studentAnswers[0] / studentAnswers[1] === correctAnswer) {
              return true;
            }
            return false;
          },
          "293"
        ],
        [
          studentAnswer => {
            let correctAnswer = 9;
            studentAnswer = studentAnswer.split(" ").join("");
            if (Number(studentAnswer) === correctAnswer) {
              return true;
            }
            let studentAnswers = studentAnswer.split("/");
            if (studentAnswers[0] / studentAnswers[1] === correctAnswer) {
              return true;
            }
            return false;
          },
          "9"
        ]
      ]
    },
    grading: {
      math: {
        0: 800,
        1: 790,
        2: 770,
        3: 750,
        4: 730,
        5: 710,
        6: 700,
        7: 690,
        8: 680,
        9: 670,
        10: 660,
        11: 650,
        12: 640,
        13: 630,
        14: 620,
        15: 610,
        16: 610,
        17: 600,
        18: 590,
        19: 580,
        20: 580,
        21: 570,
        22: 560,
        23: 550,
        24: 540,
        25: 540,
        26: 530,
        27: 520,
        28: 520,
        29: 510,
        30: 500,
        31: 500,
        32: 490,
        33: 480,
        34: 470,
        35: 460,
        36: 450,
        37: 440,
        38: 430,
        39: 420,
        40: 410,
        41: 400,
        42: 390,
        43: 380,
        44: 370,
        45: 360,
        46: 350,
        47: 340,
        48: 320,
        49: 310,
        50: 300,
        51: 280,
        52: 270,
        53: 250,
        54: 230,
        55: 220,
        56: 210,
        57: 200,
        58: 200
      },
      reading: {
        0: 40,
        1: 39,
        2: 37,
        3: 36,
        4: 36,
        5: 35,
        6: 34,
        7: 33,
        8: 33,
        9: 32,
        10: 32,
        11: 31,
        12: 31,
        13: 31,
        14: 30,
        15: 30,
        16: 29,
        17: 29,
        18: 28,
        19: 28,
        20: 27,
        21: 26,
        22: 26,
        23: 25,
        24: 25,
        25: 24,
        26: 24,
        27: 23,
        28: 23,
        29: 22,
        30: 22,
        31: 21,
        32: 21,
        33: 20,
        34: 20,
        35: 19,
        36: 19,
        37: 18,
        38: 18,
        39: 17,
        40: 17,
        41: 16,
        42: 16,
        43: 15,
        44: 14,
        45: 13,
        46: 13,
        47: 12,
        48: 11,
        49: 10,
        50: 10,
        51: 10,
        52: 10
      },
      writing: {
        0: 40,
        1: 38,
        2: 36,
        3: 34,
        4: 33,
        5: 32,
        6: 31,
        7: 31,
        8: 30,
        9: 29,
        10: 29,
        11: 28,
        12: 27,
        13: 27,
        14: 26,
        15: 25,
        16: 25,
        17: 24,
        18: 24,
        19: 23,
        20: 23,
        21: 22,
        22: 21,
        23: 21,
        24: 20,
        25: 20,
        26: 19,
        27: 19,
        28: 18,
        29: 18,
        30: 18,
        31: 17,
        32: 17,
        33: 16,
        34: 16,
        35: 15,
        36: 14,
        37: 14,
        38: 13,
        39: 12,
        40: 11,
        41: 11,
        42: 10,
        43: 10,
        44: 10
      }
    },
    concepts: {
      S1: [],
      S2: [],
      S3: [
        ["easy_algebra", "plugging_in_answers"],
        [
          [
            <Text style={{ alignSelf: "center" }}>Word Problems</Text>,
            "word_problems"
          ],
          [
            <Text style={{ alignSelf: "center" }}>Linear Equations</Text>,
            "linear_equations"
          ],
          [
            <Text style={{ alignSelf: "center" }}>Plugging Into Formulas</Text>,
            "plugging_into_formulas"
          ],
          [
            <Text style={{ alignSelf: "center" }}>Make It Real</Text>,
            "make_it_real"
          ]
        ],
        [
          "linear_equations_table",
          "linear_equations",
          "plugging_into_formulas",
          "plugging_in_for_x",
          "make_it_real"
        ],
        ["reading_graphs", "f(x) = y"],
        [
          "equivalent/similar/in_terms_of",
          "exponent_rules",
          "plugging_in_for_x"
        ],
        ["plugging_in_answers", "advanced_algebra", "variable_in_denominator"],
        ["reading_graphs", "f(x) = y"],
        ["complementary_angles", "making_equation_from_shape"],
        [
          "linear_equations",
          "check_graph_by_plugging_in",
          "converting_to_y=mx+b"
        ],
        ["graphing_quadratic_equations", "y-intercept"],
        ["equation_of_a_circle"],
        ["similar_triangles", "SOHCAHTOA"],
        [
          "solving_simple_quadratic_equations",
          "answer_the_question_that's_being_asked"
        ],
        ["tricky_math_concepts", "plugging_in_answers"],
        [
          "advanced_system_of_equations",
          "linear_equation_drill",
          "converting_to_y=mx+b"
        ],
        [
          "word_problems",
          "make_it_real",
          "identifying_variables",
          "answer_the_question_that's_being_asked",
          "plugging_into_complicated_formulas"
        ],
        [
          "solving_absolute_value_equations",
          "plugging_in_to_check",
          "answer_the_question_that's_being_asked"
        ],
        ["increase/decrease_in_percent", "hard"],
        [
          "systems_of_equations",
          "look_for_easy_addition/subtraction/elimination"
        ],
        ["look_for_a+b/a-b/(a^2 - b^2)", "special_case_polynomials"]
      ],
      S4: []
    }
  }
];

export default testData;
