import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';

const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColor }}
        thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const FiltersScreen = props => {
  const { navigation } = props;

  const [isGCSE, setIsGCSE] = useState(false);
  const [isPrimary, setIsPrimary] = useState(false);
  const [isKindergarten, setIsKindergarten] = useState(false);
  const [isFourthGrade, setIsFourthGrade] = useState(false);
  const [isFifthGrade, setIsFifthGrade] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      GCSE: isGCSE,
      Primary: isPrimary,
      Kindergarten: isKindergarten,
      FourthGrade: isFourthGrade,
      FifthGrade: isFifthGrade,
    };

    console.log(appliedFilters);
  }, [isGCSE, isPrimary, isKindergarten, isFourthGrade, isFifthGrade]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
      }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label="GCSE"
        state={isGCSE}
        onChange={newValue => setIsGCSE(newValue)}
      />
      <FilterSwitch
        label="Primary"
        state={isPrimary}
        onChange={newValue => setIsPrimary(newValue)}
      />
      <FilterSwitch
        label="Kindergarten"
        state={isKindergarten}
        onChange={newValue => setIsKindergarten(newValue)}
      />
      <FilterSwitch
        label="FourthGrade"
        state={isFourthGrade}
        onChange={newValue => setIsFourthGrade(newValue)}
      />
      <FilterSwitch
        label="FifthGrade"
        state={isFifthGrade}
        onChange={newValue => setIsFifthGrade(newValue)}
      />
    </View>
  );
};

FiltersScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Filter Lessons',
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
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={navData.navigation.getParam('save')}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center'
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 15
  }
});

export default FiltersScreen;
