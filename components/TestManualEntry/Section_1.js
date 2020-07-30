import React, { memo } from 'react';
import {
  StyleSheet, Text, View, FlatList,
} from 'react-native';
import { s1Questions, FetchAsyncStorageResource } from '../useful';
import S1QuestionRow from '../CustomUI/S1QuestionRow';

function TestFormS1() {
  const questionRows = [];
  const answerArr = FetchAsyncStorageResource(s1Questions);

  if (answerArr !== 'Loading...') {
    const answerObj = {};
    for (let i = 0; i < answerArr.length; i++) {
      answerObj[answerArr[i][0]] = answerArr[i][1];
    }

    for (let i = 0; i < 52; i++) {
      const val = answerObj[`S1${i}`];
      if (val !== null) {
        questionRows.push([<S1QuestionRow qNumber={i} initial={val} />]);
      } else {
        questionRows.push([<S1QuestionRow qNumber={i} initial={-1} />]);
      }
    }

    return (
      <FlatList
        removeClippedSubviews={false}
        windowSize={7}
        initialNumToRender={10}
        data={questionRows}
        renderItem={({ item }) => <View style={styles.container}>{item}</View>}
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

export default memo(TestFormS1);
