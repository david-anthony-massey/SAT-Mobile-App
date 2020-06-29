import React, { Fragment, Component } from "react";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { CheckBox } from "react-native-elements";

export default class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.checked
    };
  }

  handleOnPress = () => {
    this.setState(
      { checked: !this.state.checked },
      this.props.onCheck(this.state.checked)
    );
  };

  // Returns an enabled or disabled Checkbox depending on the value of this.props.disabled
  isDisabled = () => {
    if (this.props.disabled) {
      return (
        <CheckBox
          Component={TouchableWithoutFeedback}
          size={this.props.size}
          title={this.props.title}
          iconRight={false}
          center={true}
        />
      );
    }
    return (
      <CheckBox
        Component={TouchableOpacity}
        size={this.props.size}
        checked={this.state.checked}
        onPress={this.handleOnPress}
        title={this.props.title}
        center={true}
        containerStyle={{ marginLeft: 0, marginRight: 0, padding: 0 }}
      />
    );
  };

  render() {
    return <Fragment>{this.isDisabled()}</Fragment>;
  }
}
