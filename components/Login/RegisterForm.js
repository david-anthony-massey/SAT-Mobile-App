import React, { Component } from "react";
import { StyleSheet, View, Image, Button, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default class RegisterForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="email"
          placeholderTextColor="rgba(255,255,255,0.7)"
          style={styles.input}
        />
        <TextInput
          placeholder="username"
          placeholderTextColor="rgba(255,255,255,0.7)"
          style={styles.input}
        />
        <TextInput
          placeholder="password"
          placeholderTextColor="rgba(255,255,255,0.7)"
          style={styles.input}
        />
        <TextInput
          placeholder="confirm password"
          placeholderTextColor="rgba(255,255,255,0.7)"
          style={styles.input}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddint: 20
  },
  input: {
    height: 40,
    backgroundColor: "rgba(255,255,255,0.2)",
    marginBottom: 20,
    color: "#FFF",
    paddingHorizontal: 10
  }
});
