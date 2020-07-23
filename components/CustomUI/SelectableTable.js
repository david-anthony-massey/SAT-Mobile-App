import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity
} from "react-native";
import { Table, TableWrapper, Row } from "react-native-table-component";
import { NavigationActions } from "react-navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TitleText from "../Texts/TitleText";

class SelectableTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data[0],
      origData: props.data[0],
      tableHead: props.headers,
      widthArr: [90, 90, 110],
      concepts: props.concepts,
      showTable: false,
      pressedRow: {}
    };
  }

  render() {
    const state = this.state;
    const data = this.state.data;
    console.log("data", data);
    console.log("showTable", this.state.showTable);

    if (this.state.showTable) {
      return (
        <View style={styles.tableContainer}>
          <Text
            style={{ alignSelf: "center", marginBottom: 20 }}
            onPress={() => {
              this.setState({ showTable: !this.state.showTable });
            }}
          >
            <TitleText text={this.props.title} />
          </Text>
          <ScrollView horizontal={true} nestedScrollEnabled>
            <View>
              <Table borderStyle={{ borderColor: "#C1C0B9" }}>
                <Row
                  data={state.tableHead}
                  widthArr={state.widthArr}
                  style={styles.head}
                  textStyle={styles.text}
                />
              </Table>
              <ScrollView style={styles.dataWrapper} nestedScrollEnabled>
                <Table borderStyle={{ borderColor: "#C1C0B9" }}>
                  {data.map((dataRow, index) => {
                    if (dataRow.length === 3) {
                      return (
                        <TouchableOpacity
                          onPress={() => {
                            console.log(this.state.pressedRow);
                            if (this.state.pressedRow[index] === undefined) {
                              let dataStart = this.state.data.slice(
                                0,
                                index + 1
                              );
                              let dataEnd = this.state.data.slice(index + 1);
                              for (
                                let i = 0;
                                i < this.state.concepts[index].length;
                                i++
                              ) {
                                dataStart = dataStart.concat([
                                  [this.state.concepts[index][i]]
                                ]);
                              }
                              dataStart = dataStart.concat(dataEnd);
                              this.setState({
                                data: dataStart,
                                pressedRow: {
                                  ...this.state.pressedRow,
                                  [index]: true
                                }
                              });
                            } else {
                              this.setState({
                                data: this.state.origData,
                                pressedRow: {}
                              });
                            }
                          }}
                        >
                          <Row
                            key={index}
                            data={dataRow}
                            widthArr={state.widthArr}
                            style={[
                              styles.row,
                              index % 2 && { backgroundColor: "#ffffff" }
                            ]}
                            textStyle={styles.text}
                          />
                        </TouchableOpacity>
                      );
                    } else {
                      console.log("dataRow[0][1]", dataRow[0][1]);
                      let concept = [
                        <TouchableOpacity
                          onPress={() => {
                            this.props.navigation.navigate("Concepts", {
                              screen: dataRow[0][1]
                            });
                          }}
                        >
                          {dataRow[0][0]}
                        </TouchableOpacity>
                      ];
                      return (
                        <Row
                          key={index}
                          data={concept}
                          widthArr={[290]}
                          style={[
                            styles.row,
                            index % 2 && { backgroundColor: "#ffffff" }
                          ]}
                          textStyle={styles.text}
                        />
                      );
                    }
                  })}
                </Table>
              </ScrollView>
            </View>
          </ScrollView>
        </View>
      );
    } else {
      return (
        <View style={styles.textContainer}>
          <Text
            style={{ alignSelf: "center" }}
            onPress={() => {
              this.setState({ showTable: !this.state.showTable });
            }}
          >
            <TitleText text={this.props.title} />
          </Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  textContainer: {
    alignSelf: "center",
    padding: 16,
    backgroundColor: "#ffffff",
    marginBottom: 20,
    width: 340
  },
  tableContainer: {
    alignSelf: "center",
    padding: 16,
    backgroundColor: "#ffffff",
    height: 550,
    width: 340
  },
  head: {
    height: 50,
    backgroundColor: "#6F7BD9"
  },
  text: {
    textAlign: "center",
    fontWeight: "200"
  },
  dataWrapper: {
    marginTop: -1
  },
  row: {
    height: 40,
    backgroundColor: "#F7F8FA"
  }
});

export default SelectableTable;
