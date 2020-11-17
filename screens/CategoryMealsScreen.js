import React from "react";

import { View, StyleSheet, Text, FlatList, Platform } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../components/MealList"
import Colors from "../constants/Colors";

const CategoryMealsScreen = (props) => {

  const catId = props.navigation.getParam("categoryId");
  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.includes(catId);
  });

  return (
    <MealList listData={displayedMeals} navigation={props.navigation}></MealList>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
  };
};



export default CategoryMealsScreen;
