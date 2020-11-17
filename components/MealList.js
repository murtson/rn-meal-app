import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import MealItem from './MealItem'

const MealList = (props) => {

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

    return (
        <View style={styles.list}>
            <FlatList
                data={props.listData}
                renderItem={renderMealItem}
                style={{ width: "100%" }}
            ></FlatList>
        </View>);
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
});

export default MealList; 