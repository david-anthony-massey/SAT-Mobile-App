import React, { Component } from "react";
import { StyleSheet, View, Image, Button, Text } from "react-native";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ForgotForm from "./ForgotForm";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleRegisterClick = this.handleRegisterClick.bind(this);
    this.handleForgotClick = this.handleForgotClick.bind(this);

    this.state = {
      Login: true,
      Register: false
    };
  }

  handleLoginClick() {
    this.setState({ Login: true, Register: false });
  }
  handleRegisterClick() {
    this.setState({ Login: false, Register: true });
  }
  handleForgotClick() {
    this.setState({ Login: false, Register: false });
  }

  render() {
    const isLogin = this.state.Login;
    const isRegister = this.state.Register;

    let option;
    let buttons;

    if (isLogin) {
      option = <LoginForm />;
      buttons = (
        <View>
          <Button title="Submit" onPress={() => this.handleLoginClick}></Button>
          <View>
            <Button
              title="Forgot Password?"
              onPress={() => this.handleForgotClick()}
            ></Button>
            <Button
              title="Register New Account"
              onPress={() => this.handleRegisterClick()}
            ></Button>
          </View>
        </View>
      );
    } else if (isRegister) {
      option = <RegisterForm />;
      buttons = (
        <View>
          <Button
            title="Submit"
            onPress={() => this.handleLoginClick()}
          ></Button>
          <View>
            <Button
              title="Login"
              onPress={() => this.handleLoginClick()}
            ></Button>
          </View>
        </View>
      );
    } else {
      option = <ForgotForm />;
      buttons = (
        <View>
          <Button
            title="Submit"
            onPress={() => this.handleLoginClick()}
          ></Button>
          <View>
            <Button
              title="Login"
              onPress={() => this.handleLoginClick()}
            ></Button>
            <Button
              title="Register New Account"
              onPress={() => this.handleRegisterClick()}
            ></Button>
          </View>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("./e.png")} />

          <Text style={styles.title}> Supz </Text>
        </View>
        {option}
        {buttons}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3498db"
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center"
  },
  logo: {
    width: 100,
    height: 100
  },
  title: {
    color: "#FFF",
    marginTop: 10,
    width: 160,
    textAlign: "center",
    opacity: 0.6
  }
});
