import React, { Component } from "react";
import Checkbox from "../CustomUI/CheckBox";
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

export default class TestFormS3 extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);

    this.state = {
      checkBoxes: [],
      radioArr: [],
      studentAnswers: this.props.studentAnswers
    };
  }

  render() {
    if (this.state.checkBoxes[0] === undefined) {
      let checkBoxes = [];
      for (let i = 0; i < 15; i++) {
        checkBoxes.push([
          <Checkbox checked={false} size={30} question={i} />,
          <Checkbox checked={false} size={30} question={i} />
        ]);
      }
      this.setState({ checkBoxes: checkBoxes });
    }

    if (this.state.radioArr[0] === undefined) {
      var radioArr = [];
      for (let i = 0; i < 15; i++) {
        radioArr.push([
          <Text>{`#${i + 1}`}</Text>,
          <RadioButtonProject
            question={i}
            studentAnswers={this.props.studentAnswers}
            onUpdate={this.props.onUpdate}
          />
        ]);
      }
      console.log(radioArr);
      this.setState({ radioArr: radioArr });
      console.log(this.state);
    }
    let checkBoxes = this.state.checkBoxes;
    console.log(this.state);
    return (
      <>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.container}>
            {this.state.radioArr.map(function(radioButton, i) {
              return (
                <View style={styles.box}>
                  {radioButton[0]}
                  {radioButton[1]}
                  <View style={{ marginLeft: 20 }}>
                    {checkBoxes[i][0]}
                    <Text>Blank</Text>
                  </View>
                  <View>
                    {checkBoxes[i][1]}
                    <Text>Guess</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </>
    );
  }
}

var radio_props = [
  { label: "A", value: 1 },
  { label: "B", value: 2 },
  { label: "C", value: 3 },
  { label: "D", value: 4 }
];

class RadioButtonProject extends React.Component {
  render() {
    return (
      <RadioForm
        radio_props={radio_props}
        formHorizontal={true}
        labelHorizontal={false}
        initial={-1}
        onPress={value => {
          console.log(this.props.studentAnswers);
          this.props.studentAnswers[this.props.question] = value;
          this.props.onUpdate(this.props.studentAnswers);
          this.setState({ value: value });
        }}
      />
    );
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
