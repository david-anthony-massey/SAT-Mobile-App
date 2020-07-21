import React, { Component } from "react";
import { Text } from "react-native";

export default class NormalText extends Component {
  render() {
    return <Text style={{ fontSize: 20 }}>{this.props.text}</Text>;
  }
}
