import React, { memo } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { s3Questions, FetchAsyncStorageResource } from '../useful';
import S3QuestionRow from '../CustomUI/S3QuestionRow';
import S3ManualQuestionRow from '../CustomUI/S3ManualQuestionRow';

function TestFormS3() {
  const questionRows = [];
  const answerArr = FetchAsyncStorageResource(s3Questions);

  if (answerArr !== 'Loading...') {
    const answerObj = {};
    for (let i = 0; i < answerArr.length; i++) {
      answerObj[answerArr[i][0]] = answerArr[i][1];
    }

    for (let i = 0; i < 15; i++) {
      const val = answerObj[`S3${i}`];
      if (val !== null) {
        questionRows.push([<S3QuestionRow qNumber={i} initial={val} />]);
      } else {
        questionRows.push([<S3QuestionRow qNumber={i} initial={-1} />]);
      }
    }

    for (let i = 15; i < 20; i++) {
      const val = answerObj[`S3${i}`];
      if (val !== null) {
        questionRows.push([<S3ManualQuestionRow qNumber={i} initial={val} />]);
      } else {
        questionRows.push([<S3ManualQuestionRow qNumber={i} initial="" />]);
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

export default memo(TestFormS3);
