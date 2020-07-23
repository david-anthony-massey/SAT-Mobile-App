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

function PunctuationRulesConceptScreen({ navigation }) {
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
              <NormalText text={`Writing Concepts`} />
            </Text>
            <TitleText text={`Punctuation Rules`} />
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
            {`   Punctuation questions are one of the easiest writing concepts to study for because they rely on formula based rules that can be memorized. Just like you (should) know the pathagorean theorem, you can know what a comma can and cannot do in a sentence`}
          </Text>
          <Text
            style={{
              paddingLeft: 10,
              paddingRight: 10,
              alignSelf: "center"
            }}
          >
            {`   Punctuation rules are mostly tested in questions that don't have a question, meaning that you are only choosing A, B, C, or D and not trying to do anything specific for the question. A very important note about punctuation questions is that you should ALWAYS check for other punctuation in the sentence, even if there are no punctuation marks in the answer choices. Determine what the other punctuation is doing in the sentence to figure out which answer choice works best with the punctuation that's already there.`}
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
            {`Below are the most important punctuation rules to memorize:`}
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
            {`   1. A semicolon ( ; ) separates two independent clauses. Independent clauses are complete sentences, and they can stand alone as a sentence. The other punctuation marks used to separate two independent clauses are periods and a comma paired with an appropriate coordinating conjuction (FANBOYS - for, and, nor, but, or, yet, and so).
    
    Because these all perform the same function, they should be considered to be exactly the same on this test. Meaning that if I had the following answer choices on my test,
    
    A. lied. Then
    B. lied; then
    C. lied then
    D. lied, then
    
    Answer choice C or D would have to be the correct answer because A and B are using punctuation that does the same thing, and there can't be multiple correct answers, so they must both be wrong.
    On this test you will frequently see answer choices that are exactly the same except they will replace a period with a semicolon or a comma with an appropriate FANBOYS. Don't be fooled! Both answers choices must be wrong because a period and a semicolon do exactly the same thing.

    2. A colon ( : ) is used after an independent clause and before a direct example or explanation of what the previous sentence was discussing. A colon can be used before a list, but it can also be used before an independent clause or a single word. An easy way to determine if a colon is being used incorrectly is to determine if what came before it was an independent clause or not.

    Correct -   If I could have one wish come true, I would only want one thing: a new car.
    Correct -   I have three pets: Max, Dilby, and Cinnamon.
    Correct -   I only agree with one theory of relativity: Einstein's theory of relativity which states all matter is made of energy.
    Incorrect - I love only certain types of pizza, including: pepperoni, mushroom, and olive.
    
    "I love to eat many different types of pizza, including" came before the colon, and because it is not an independent clause, the colon is being used incorrectly. Words like "including", "such as", "like", and "for example" usually don't belong before a colon because saying them at the end of a sentence would make the sentence no longer be independent.

    3. `}
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
              height: 300,
              width: 350,
              alignSelf: "center",
              textAlignVertical: "center",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              borderColor: "black",
              borderWidth: 3,
              borderRadius: 10,
              borderTopLeftRadius: 7,
              borderTopRightRadius: 7,
              flex: 1,
              lineHeight: 13,
              textAlignVertical: "center"
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

            <Text
              style={{
                paddingLeft: 20,
                paddingBottom: 20,
                paddingRight: 20,
                alignSelf: "center",
                justifyContent: "center",
                alignItems: "center",
                textAlignVertical: "center",
                textAlign: "justify"
              }}
            >
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
          <Text style={{ alignSelf: "center", marginTop: 3, fontSize: 8 }}>
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
            onPress={() => {
              navigation.navigate("Concepts Home");
            }}
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
    justifyContent: "center",
    alignItems: "center",
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

export default PunctuationRulesConceptScreen;
