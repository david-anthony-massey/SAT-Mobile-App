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
import TitleText from "../Texts/TitleText";
import { allQuestions } from "../useful";
import TestAnswerEntryScreen from "./TestAnswerEntryScreen";
import { color } from "react-native-reanimated";
import { red } from "ansi-colors";

function ConceptsHomeScreen({ navigation }) {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text
          style={{
            marginBottom: 30,
            marginTop: 30,
            textDecorationLine: "underline"
          }}
        >
          <TitleText text="Math Concepts:" />
          <TitleText text="Word Problems" />
        </Text>
        <Text>
          {`Word problems are difficult for many students due to the fact that there can feel like an overload of information with often no clear way to use it. Common concepts that are tested in math word problems are systems of equations, percent increase/decrease, and inequalities.
            
            Steps for solving these questions go as follows:
                1. Identify variables and make sure you note EXACTLY what they represent. There can be tricks in their definitions, like "x is the number of years after 2000". This means if the year is 2000 then x = 0.
                2. Create equations sentence by sentence as you go through the question. Be very careful to create equations that match what is being said and it can help to plug in real numbers for the variables to make sure your equations make sense. The purpose of creating equations is to eventually solve for one variable like in a systems of equations. Whenever you can, try to solve for one variable in terms of another.
                3. Ensure that you answer the question that's being asked and not something you solved for earlier. Boxing the question you care about and looking at it again before you move on can help prevent you from making mistakes.
                
            Lets go over an example question. This one is from the Official SAT® Practice Test 10 - Question 16 on the No Calculator Section
            
                     T = 5c + 12f
            
            A manufacturer shipped units of a certain product to two locations. The equation above shows the total shipping cost T, in dollars, for shipping c units to the closer location and shipping f units to the farther location. If the total shipping cost was $47,000 and 3,000 units were shipped to the farther location, how many units were shipped to the closer location?
            
            Take it one sentence at a time and identify variables and make equations if you can.

            The first sentence, "A manufacturer shipped units of a certain product to two locations." doesn't really matter.

            The second sentence, "The equation above shows the total shipping cost T, in dollars, for shipping c units to the closer location and shipping f units to the farther location." is full of information.
            It clarifies the variables and I would recommend writing to the side "c = number of units shipped to closer location," "f = number of units shipped to farther away location," and "T = total shipping cost, in dollars."
            The fact that there are two variables means that this is probably a "systems of equations" question, which is something you should be very familiar with for this test.
            
            The third sentence, "If the total shipping cost was $47,000 and 3,000 units were shipped to the farther location, how many units were shipped to the closer location." is extremely full of information and should be tackled one piece at a time.
              Starting at the beginning, "the total shipping cost was $47,000" is an equation. The total EQUALS $47,000 and we know that our variable T = total shipping cost, in dollars. Thus we can plug in $47,000 in for T to get the new qeuation:
            $47,500 = 5c + 12f
              Then we can take the next chunk of information in the sentence, "3,000 units were shipped to the farther location," and plug that in for "f" because our variable f = number of units shipped to farther away location. This makes our new equation:
            $47,500 = 5c + 12(3,000)  * remember to always plug in with parentheses *
              Finally the last bit of the sentence is one of the most important, the question that's being asked of you:
            "how many units were shipped to the closer location?" and because "c = the number of units shipped to the closer location," the question wants you to solve for "c"
            
            Because we made and updated our equation along the way it's pretty easy to use algebra to solve. These questions can get very sneaky and may require knowledge of more difficult concepts, but try taking them apart one piece at a time and I guarentee you'll do better than thinking it looks too long and freaking-out/skipping it.`}
        </Text>
        <Button></Button>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "lightblue"
  }
});

export default ConceptHomeScreen;
