import React, { Fragment, Component } from "react";
import { TouchableOpacity, TouchableWithoutFeedback, Text } from "react-native";
import { CheckBox } from "react-native-elements";
import CBTestsText from "../Texts/CBTestsText";

export default class SelectedValue extends Component {
  constructor(props) {
    super(props);
  }

  handleOnPress = () => {};

  // Returns an enabled or disabled Checkbox depending on the value of this.props.disabled

  render() {
    if (this.props.pressed) {
      var selectedStyle = {
        alignItems: "center",
        marginBottom: 10,
        borderColor: "blue",
        borderWidth: 2,
        borderRadius: 20
      };
    } else {
      var selectedStyle = {
        alignItems: "center",
        marginBottom: 10,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5
      };
    }

    return (
      <TouchableOpacity
        activeOpacity={1}
        style={selectedStyle}
        onPress={() => this.props.onPress()}
      >
        <CBTestsText text={this.props.item.title} font={"BreeSerif-Regular"} />
      </TouchableOpacity>
    );
  }
}
