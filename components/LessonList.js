import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import LessonItem from './LessonItem';

const LessonList = props => {
  const renderLessonItem = itemData => {
    return (
      <LessonItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectLesson={() => {
          props.navigation.navigate({
            routeName: 'LessonDetail',
            params: {
              lessonId: itemData.item.id
            }
          });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderLessonItem}
        style={{ width: '100%' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  }
});

export default LessonList;
