import React, { Component } from "react";
import { View, TouchableOpacity, Platform, Text, Image } from "react-native";
import { Button } from "react-native-elements";
import { Buffer } from "buffer";
import { Camera } from "expo-camera";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons
} from "@expo/vector-icons";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import { isUnaryLike } from "@babel/types";

export default class CameraScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
      photo: "null",
      photoId: "",
      stall: true,
      tryImage: true
    };
  }
  async componentDidMount() {
    this.getPermissionAsync();
  }
  getPermissionAsync = async () => {
    // Camera roll Permission
    if (Platform.OS === "ios") {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
    // Camera Permission
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  };
  handleCameraType = () => {
    const { type } = this.state;

    this.setState({
      type:
        type === Camera.Constants.Type.back
          ? Camera.Constants.Type.front
          : Camera.Constants.Type.back
    });
  };
  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images
    });
  };
  takePicture = async function() {
    if (this.state.tryImage) {
      this.setState({ tryImage: false }, () => {
        setInterval(
          function() {
            this.camera
              .takePictureAsync({ skipProcessing: true, quality: 1 })
              .then(data => {
                console.log(data.height, data.width);
                this.setState(
                  {
                    //takeImageText: "PICTURE TAKEN",
                    photo: data
                  },
                  () => {
                    let data = new FormData();
                    data.append("photo", {
                      name: "image.jpg",
                      type: "image/jpeg",
                      uri:
                        Platform.OS === "android"
                          ? this.state.photo.uri
                          : this.state.photo.uri.replace("file://", "")
                    });

                    fetch(`http://reku68.pythonanywhere.com/grade-test`, {
                      method: `POST`,
                      headers: {
                        "Content-Type": "multipart/form-data"
                      },
                      body: data
                    })
                      .then(response => response.text())
                      .then(response => {
                        console.log(response);
                        this.setState({
                          photo: {
                            ...this.state.photo,
                            uri: "data:image/jpeg;base64," + response
                          }
                        });
                      })
                      // .then(image => {
                      //   //   console.log("upload success", image);
                      //   alert("Upload success!");
                      // })
                      .catch(error => {
                        console.log("upload error", error);
                        alert("Upload failed!");
                      });
                  }
                );
              });
          }.bind(this),
          4000
        );
      });
    }
  };
  render() {
    const { hasCameraPermission } = this.state;

    if (this.state.photo !== "null") {
      var selectedImage = (
        <Image
          style={{ height: 200, width: 180, alignSelf: "center" }}
          source={{
            uri: this.state.photo.uri
          }}
        ></Image>
      );
    } else {
      var selectedImage = <View></View>;
    }

    console.log(hasCameraPermission);
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 20
          }}
        >
          <Camera
            style={{ flex: 1 }}
            type={this.state.type}
            ref={ref => {
              this.camera = ref;
            }}
          >
            <TouchableOpacity
              style={{
                alignSelf: "flex-end",
                alignItems: "center",
                backgroundColor: "transparent"
              }}
              onPress={() => this.pickImage()}
            >
              <Ionicons
                name="ios-photos"
                style={{ color: "#fff", fontSize: 40 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                alignSelf: "flex-end",
                alignItems: "center",
                backgroundColor: "transparent"
              }}
              onPress={() => this.takePicture()}
            >
              <FontAwesome
                name="camera"
                style={{ color: "#fff", fontSize: 40 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                alignSelf: "flex-end",
                alignItems: "center",
                backgroundColor: "transparent"
              }}
              onPress={() => this.handleCameraType()}
            >
              <MaterialCommunityIcons
                name="camera-switch"
                style={{ color: "#fff", fontSize: 40 }}
              />
            </TouchableOpacity>

            <Button
              buttonStyle={{ color: "blue", fontSize: 40 }}
              title={`Choose Image`}
              onPress={() => {
                let data = new FormData();
                data.append("photo", {
                  name: "image.jpg",
                  type: "image/jpeg",
                  uri:
                    Platform.OS === "android"
                      ? this.state.photo.uri
                      : this.state.photo.uri.replace("file://", "")
                });

                fetch(`http://reku68.pythonanywhere.com/grade-test`, {
                  method: `POST`,
                  headers: {
                    "Content-Type": "multipart/form-data"
                  },
                  body: data
                })
                  .then(response => response.text())
                  .then(response => {
                    console.log(response);
                    this.setState({
                      photo: {
                        ...this.state.photo,
                        uri: "data:image/jpeg;base64," + response
                      }
                    });
                  })
                  .then(image => {
                    //   console.log("upload success", image);
                    alert("Upload success!");
                  })
                  .catch(error => {
                    console.log("upload error", error);
                    alert("Upload failed!");
                  });
              }}
            />
            {selectedImage}
          </Camera>
        </View>
      );
    }
  }
}
