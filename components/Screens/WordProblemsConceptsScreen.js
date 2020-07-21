import * as React from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  AsyncStorage
} from "react-native";
import { Button, ListItem } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { testData } from "../../assets/data/testData";
import SelectedValue from "../CustomUI/SelectedValue";
import CBTestsText from "../Texts/CBTestsText";
import Katex from "react-native-katex";
import TitleText from "../Texts/TitleText";
import NormalText from "../Texts/NormalText";
import { allQuestions } from "../useful";
import TestAnswerEntryScreen from "./TestAnswerEntryScreen";
import { color } from "react-native-reanimated";
import { red, underline } from "ansi-colors";
import { ScrollView } from "react-native-gesture-handler";

function WordProblemsConceptScreen({ navigation }) {
  const [expression, setExpression] = React.useState("T = 5c + 12f");
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View
            style={{ marginBottom: 20, marginTop: 20, alignSelf: "center" }}
          >
            <Text
              style={{
                textDecorationLine: "underline",
                marginBottom: 10,
                alignSelf: "center"
              }}
            >
              <NormalText text={`Math Concepts`} />
            </Text>
            <TitleText text={`Word Problems`} />
          </View>
          <Text
            style={{
              marginLeft: 10,
              marginRight: 10,
              paddingTop: 5,
              paddingBottom: 5,
              alignSelf: "center"
            }}
          >
            {`   Word problems are difficult for many students due to the fact that there can feel like an overload of information with no clear way to use it.`}
          </Text>
          <Text
            style={{
              paddingLeft: 10,
              paddingRight: 10,
              alignSelf: "center"
            }}
          >
            {`   Common concepts that are tested in math word problems are systems of equations, percent increase/decrease, and inequalities.`}
          </Text>
          <Text
            style={{
              marginTop: 15,
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 5,
              paddingBottom: 5,
              alignSelf: "center",
              fontSize: 14,
              textDecorationLine: "underline"
            }}
          >
            {`Steps for solving these questions go as follows:`}
          </Text>
          <Text
            style={{
              marginLeft: 10,
              marginRight: 10,
              marginTop: 5,
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 5,
              paddingBottom: 5,
              alignSelf: "center",
              borderColor: "black",
              borderWidth: 2
            }}
          >
            {`   1. Identify variables and make sure you note EXACTLY what they represent. There can be tricks in their definitions, like "x is the number of years after 2000". This means that if the year is 2000, then x = 0.

    2. Create equations sentence by sentence as you go through the question. Be very careful to create equations that match what is being said, and it can help to plug in real numbers for the variables to make sure your equations make sense. The purpose of creating equations is to eventually solve for one variable like in a systems of equations. Whenever you can, try to solve for one variable in terms of another.

    3. Ensure that you answer the question that's being asked and not something you solved for earlier. Boxing the question you care about and looking at it again before you move on can help prevent you from making mistakes.`}
          </Text>
          <Text
            style={{
              marginTop: 10,
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 5,
              paddingBottom: 5,
              alignSelf: "center"
            }}
          >
            {`Lets go over an example question. This one is from the Official SAT® Practice Test 10 - Question 16 on the No-Calculator Section`}
          </Text>
          <View
            style={{
              marginTop: 20,
              height: 220,
              width: 350,
              alignSelf: "center",
              borderColor: "black",
              borderWidth: 3,
              borderRadius: 10,
              borderTopLeftRadius: 7,
              borderTopRightRadius: 7
            }}
          >
            <Katex
              expression={`T = 5c + 12f`}
              style={styles.katex}
              inlineStyle={inlineStyle}
              displayMode={false}
              throwOnError={false}
              errorColor="#f00"
              macros={{}}
              colorIsTextColor={false}
              onLoad={() => {
                setExpression(true);
              }}
              onError={() => console.error("Error")}
            />

            <Text style={{ height: 170, width: 300, alignSelf: "center" }}>
              {`A manufacturer shipped units of a certain product to two locations. The equation above shows the total shipping cost T, in dollars, for shipping c units to the closer location and shipping f units to the farther location. If the total shipping cost was $47,000 and 3,000 units were shipped to the farther location, how many units were shipped to the closer location?`}
            </Text>
          </View>
          <Text
            style={{
              marginTop: 10,
              paddingLeft: 5,
              paddingRight: 5,
              paddingTop: 5,
              paddingBottom: 5,
              alignSelf: "center"
            }}
          >
            {`Take it one sentence at a time and identify variables and make equations if you can.`}
          </Text>
          <Text
            style={{
              marginTop: 10,
              paddingLeft: 25,
              paddingRight: 25,
              paddingTop: 5,
              paddingBottom: 5,
              alignSelf: "center"
            }}
          >
            {`  The first sentence, "A manufacturer shipped units of a certain product to two locations." doesn't really matter.
            
    The second sentence, "The equation above shows the total shipping cost T, in dollars, for shipping c units to the closer location and shipping f units to the farther location." is full of information.
    It clarifies the variables and I would recommend writing to the side "c = number of units shipped to closer location," "f = number of units shipped to farther away location," and "T = total shipping cost, in dollars."
    The fact that there are two variables means that this is probably a "systems of equations" question, which is something you should be very familiar with for this test.
            
    The third sentence, "If the total shipping cost was $47,000 and 3,000 units were shipped to the farther location, how many units were shipped to the closer location." is extremely full of information and should be tackled one piece at a time.
    Starting at the beginning, "the total shipping cost was $47,000" is an equation. The total EQUALS $47,000 and we know that our variable T = total shipping cost, in dollars. Thus we can plug in $47,000 in for T to get the new equation:`}
          </Text>
          <Katex
            expression={`\\$47,500 = 5c + 12f`}
            style={styles.katexBorder}
            inlineStyle={inlineStyle}
            displayMode={false}
            throwOnError={false}
            errorColor="#f00"
            macros={{}}
            colorIsTextColor={false}
            onLoad={() => {
              setExpression(true);
            }}
            onError={() => console.error("Error")}
          />
          <Text
            style={{
              marginTop: 10,
              paddingLeft: 25,
              paddingRight: 25,
              paddingTop: 5,
              paddingBottom: 5,
              alignSelf: "center"
            }}
          >
            {`   Then we can take the next chunk of information in the sentence, "3,000 units were shipped to the farther location," and plug that in for "f" because our variable f equals the number of units shipped to the farther away location. This makes our new equation:`}
          </Text>
          <Katex
            expression={`\\$47,500 = 5c + 12(3,000)`}
            style={styles.katexBorder}
            inlineStyle={inlineStyle}
            displayMode={false}
            throwOnError={false}
            errorColor="#f00"
            macros={{}}
            colorIsTextColor={false}
            onLoad={() => {
              setExpression(true);
            }}
            onError={() => console.error("Error")}
          />
          <Text style={{ alignSelf: "center", marginTop: 3 }}>
            * remember to always plug in with parentheses *
          </Text>

          <Text
            style={{
              marginTop: 10,
              paddingLeft: 25,
              paddingRight: 25,
              paddingTop: 5,
              paddingBottom: 5,
              alignSelf: "center"
            }}
          >
            {`Finally the last bit of the sentence is one of the most important: the question that's being asked of you.
  
  "how many units were shipped to the closer location?" and because "c = the number of units shipped to the closer location," the question wants you to solve for "c"`}
          </Text>
          <Katex
            expression={`\\begin{gathered}
            47,000 = 5c + 12(3,000) 
            \\\\ 47,000 = 5c + 36,000
            \\\\ 11,000 = 5c \\\\
            2,200 = c
        \\end{gathered}`}
            style={styles.katexLargeBorder}
            inlineStyle={inlineStyle}
            displayMode={false}
            throwOnError={false}
            errorColor="#f00"
            macros={{}}
            colorIsTextColor={false}
            onLoad={() => {
              setExpression(true);
            }}
            onError={() => console.error("Error")}
          />

          <Text
            style={{
              marginTop: 10,
              paddingLeft: 25,
              paddingRight: 25,
              paddingTop: 5,
              paddingBottom: 5,
              alignSelf: "center"
            }}
          >
            {`Because we created and updated our equation along the way, it's pretty easy to use simple algebra to solve. 

These questions can get very sneaky and may require knowledge of more difficult concepts, but try taking them apart one piece at a time, and I guarentee you'll do better than thinking it looks too long and freaking-out/skipping it.`}
          </Text>
          <Button
            style={{ alignSelf: "center", height: 70, width: 100 }}
            onPress={() => {}}
            title={"Back to Concepts"}
          ></Button>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const inlineStyle = `
html, body {
  display: flex;
  background-color: lightblue;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0;
  padding: 0;
}
.katex {
  font-size: 4em;
  margin: 0;
  display: flex;
}
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue"
  },
  katex: {
    alignSelf: "center",
    flex: 1,
    height: 30,
    width: 300
  },
  katexBorder: {
    marginTop: 10,
    alignSelf: "center",
    flex: 1,
    height: 30,
    width: 300,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10
  },
  katexLargeBorder: {
    marginTop: 10,
    alignSelf: "center",
    flex: 1,
    height: 200,
    width: 300,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10
  }
});

export default WordProblemsConceptScreen;
