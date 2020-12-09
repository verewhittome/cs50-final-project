import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import LessonList from '../components/LessonList';
import { LESSONS } from '../data/dummy-data';

const FavoritesScreen = props => {
  const favLessons = LESSONS.filter(lesson => lesson.id === 'm1' || lesson.id === 'm2');
  return <LessonList listData={favLessons} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Your Favorites',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};

export default FavoritesScreen;
