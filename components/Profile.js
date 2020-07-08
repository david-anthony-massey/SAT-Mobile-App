import * as React from "react";
import { StyleSheet, View, SafeAreaView, Text, Alert } from "react-native";
import { Button, ListItem } from "react-native-elements";
export default function Home({ navigation }) {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() => navigation.navigate("Profile", { name: "Jane" })}
    />
  );
}
