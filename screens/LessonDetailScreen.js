import React from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  Button,
  StyleSheet
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { LESSONS } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';

import DownloadButtonHandler from '../constants/DownloadButtonHandler';


const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const LessonDetailScreen = props => {
  const lessonId = props.navigation.getParam('lessonId');

  const selectedLesson = LESSONS.find(lesson => lesson.id === lessonId);

  return (
    <ScrollView>
      <Image source={{ uri: selectedLesson.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectedLesson.duration} lessons </DefaultText>
        <DefaultText>{selectedLesson.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedLesson.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Download</Text>
      <Button 
      onPress={() => DownloadButtonHandler(selectedLesson.download,'name')}
      title='Download'
      />  
      <Text style={styles.title}>Description</Text>
      <DefaultText>{selectedLesson.description} </DefaultText>
    </ScrollView>
  );
};

LessonDetailScreen.navigationOptions = navigationData => {
  const lessonId = navigationData.navigation.getParam('lessonId');
  const selectedLesson = LESSONS.find(lesson => lesson.id === lessonId);
  return {
    headerTitle: selectedLesson.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => {
            console.log('Mark as favorite!');
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center'
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10
  }
});

export default LessonDetailScreen;
