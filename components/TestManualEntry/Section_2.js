import React, { memo } from 'react';
import {
  StyleSheet, Text, View, FlatList,
} from 'react-native';
import { s2Questions, FetchAsyncStorageResource } from '../useful';
import S2QuestionRow from '../CustomUI/S2QuestionRow';

function TestFormS2() {
  const questionRows = [];
  const answerArr = FetchAsyncStorageResource(s2Questions);

  if (answerArr !== 'Loading...') {
    const answerObj = {};
    for (let i = 0; i < answerArr.length; i++) {
      answerObj[answerArr[i][0]] = answerArr[i][1];
    }

    for (let i = 0; i < 44; i++) {
      const val = answerObj[`S2${i}`];
      if (val !== null) {
        questionRows.push([<S2QuestionRow qNumber={i} initial={val} />]);
      } else {
        questionRows.push([<S2QuestionRow qNumber={i} initial={-1} />]);
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

export default memo(TestFormS2);
