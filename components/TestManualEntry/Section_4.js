import React, { memo } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { s4Questions, FetchAsyncStorageResource } from '../useful';
import S4QuestionRow from '../CustomUI/S4QuestionRow';
import S4ManualQuestionRow from '../CustomUI/S4ManualQuestionRow';

function TestFormS4() {
  const questionRows = [];
  const answerArr = FetchAsyncStorageResource(s4Questions);

  if (answerArr !== 'Loading...') {
    const answerObj = {};
    for (let i = 0; i < answerArr.length; i++) {
      answerObj[answerArr[i][0]] = answerArr[i][1];
    }

    for (let i = 0; i < 30; i++) {
      const val = answerObj[`S4${i}`];
      if (val !== null) {
        questionRows.push([<S4QuestionRow qNumber={i} initial={val} />]);
      } else {
        questionRows.push([<S4QuestionRow qNumber={i} initial={-1} />]);
      }
    }

    for (let i = 30; i < 38; i++) {
      const val = answerObj[`S4${i}`];
      if (val !== null) {
        questionRows.push([<S4ManualQuestionRow qNumber={i} initial={val} />]);
      } else {
        questionRows.push([<S4ManualQuestionRow qNumber={i} initial="" />]);
      }
    }

    return (
      <FlatList
        data={questionRows}
        renderItem={({ item }) => <View style={styles.container}>{item}</View>}
        removeClippedSubviews={false}
        windowSize={10}
      />
    );
  }
  return <Text>Loading</Text>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 2,
  },
});

export default memo(TestFormS4);
