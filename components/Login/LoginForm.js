import React, { Component, useEffect, useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function LoginForm() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch("http://223d255349ca.ngrok.io/grade-test");
    // .then(res => res.text()) // convert to plain text
    // .then(text => console.log(text));
    // .then(res => res.json())
    // .then(data => {
    //   console.log(data.time);
    //   setCurrentTime(data.time);
    // });
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="username/email"
        placeholderTextColor="rgba(255,255,255,0.7)"
        style={styles.input}
      />
      <TextInput
        placeholder="password"
        placeholderTextColor="rgba(255,255,255,0.7)"
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: "rgba(255,255,255,0.2)",
    marginBottom: 20,
    color: "#FFF",
    paddingHorizontal: 10
  }
});
