import React, { Component } from "react";
import { Text } from "react-native";

export default class TitleText extends Component {
  render() {
    return <Text style={{ fontSize: 30 }}>{this.props.text}</Text>;
  }
}
