import React, { Component } from "react";
import { Text } from "react-native";

export default class CBTestsText extends Component {
  render() {
    return (
      <Text
        style={{
          fontFamily: this.props.font,
          fontSize: 15,
          fontWeight: "bold"
        }}
      >
        {this.props.text}
      </Text>
    );
  }
}
