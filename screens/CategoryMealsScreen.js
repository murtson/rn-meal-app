import React from "react";

import { View, StyleSheet, Text, FlatList, Platform } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import Colors from "../constants/Colors";

const CategoryMealsScreen = (props) => {
  const selectMealHandler = (itemdata) => {
    props.navigation.navigate({
      routeName: "MealDetail",
      params: {
        mealId: itemdata.item.id,
      },
    });
  };

  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={selectMealHandler.bind(this, itemData)}
      ></MealItem>
    );
  };

  const catId = props.navigation.getParam("categoryId");
  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.includes(catId);
  });

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      ></FlatList>
    </View>
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});

export default CategoryMealsScreen;
