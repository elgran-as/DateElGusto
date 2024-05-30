import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../constants/colors";
import Card from "./Card";
import {useDispatch, useSelector} from "react-redux";
import { setCategorySelected } from "../features/Shop/shopSlice";

const CategoryItem = ({ category, navigation }) => {

  const dispatch = useDispatch()

  const handleNavigate = () => {
    dispatch(setCategorySelected(category))
    navigation.navigate('ItemListCategory', {category})
  }

  return (
     <Card style={{ 
      marginVertical: 10,
      marginHorizontal: 10,
      borderColor: 'rgba(255, 165, 0, 0.5)',
      borderWidth: 1,
      borderRadius:70 
      }}
      >
      <Pressable onPress={handleNavigate} style={styles.cardContainer}>
        <View style={styles.circleContainer}>
          <Text style={styles.text}>{category}</Text>
        </View>
      </Pressable>
    </Card>

  )
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: colors.platinum,
  },
  text: {
    color: colors.white,
    textAlign: "center",
    fontSize: 20,
  },
});

export default CategoryItem;
