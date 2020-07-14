export const testData = [
  {
    title: "Official SAT Practice Test 1",
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
    }
  },
  {
    title: "Official SAT Practice Test 2",
    answers: {
      S1: [],
      S2: [],
      S3: [],
      S4: []
    }
  },
  {
    title: "Official SAT Practice Test 3",
    answers: {
      S1: [],
      S2: [],
      S3: [],
      S4: []
    }
  },
  {
    title: "Official SAT Practice Test 4",
    answers: {
      S1: [],
      S2: [],
      S3: [],
      S4: []
    }
  },
  {
    title: "Official SAT Practice Test 5",
    answers: {
      S1: [],
      S2: [],
      S3: [],
      S4: []
    }
  },
  {
    title: "Official SAT Practice Test 6",
    answers: {
      S1: [],
      S2: [],
      S3: [],
      S4: []
    }
  },
  {
    title: "Official SAT Practice Test 7",
    answers: {
      S1: [],
      S2: [],
      S3: [],
      S4: []
    }
  },
  {
    title: "Official SAT Practice Test 8",
    answers: {
      S1: [],
      S2: [],
      S3: [],
      S4: []
    }
  },
  {
    title: "Official SAT Practice Test 9",
    answers: {
      S1: [],
      S2: [],
      S3: [],
      S4: []
    }
  },
  {
    title: "Official SAT Practice Test 10",
    answers: {
      S1: [],
      S2: [],
      S3: [],
      S4: []
    }
  }
];

export default testData;
