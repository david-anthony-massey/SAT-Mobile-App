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
          "2",
          "2.0",
          "2.00",
          "2.000"
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
          "4/5",
          ".8",
          "0.8",
          "00.80",
          "0.80"
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
          "between",
          "4",
          "6"
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
          "5/8",
          ".625"
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
