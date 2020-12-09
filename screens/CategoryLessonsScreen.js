import React from 'react';

import { CATEGORIES, LESSONS } from '../data/dummy-data';
import LessonList from '../components/LessonList';

const CategoryLessonScreen = props => {
  
  const catId = props.navigation.getParam('categoryId');
  const filters = props.navigation.getParam('save');
  console.log(props.navigation)

  const displayedLessons = LESSONS.filter(
    lesson => lesson.categoryIds.indexOf(catId) >= 0
  );

  return <LessonList listData={displayedLessons} navigation={props.navigation} />;
};

CategoryLessonScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title
  };
};

export default CategoryLessonScreen;
