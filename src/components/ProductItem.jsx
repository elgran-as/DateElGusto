import { Image, StyleSheet, Text, Pressable } from "react-native";
import React from "react";
import Card from "./Card";
import { colors } from "../constants/colors";
import { useDispatch } from "react-redux";
import { setIdSelected } from "../features/Shop/shopSlice";

const ProductItem = ({
  product,
  setProductSelected = () => {},
  navigation,
}) => {

  const dispatch = useDispatch()
  const handleNavigate = () => {
    dispatch(setIdSelected(product.title))
    navigation.navigate('ItemDetail', {productId: product.id})
  }
  return (
    <Card style={styles.additionalStylesCard}>
      <Pressable
        style={styles.pressable}
        onPress={handleNavigate}
      >
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{ uri: product.images[0] }}
        />
        <Text style={styles.textCategory}>{product.title}</Text>
      </Pressable>
    </Card>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  image: {
    height: 90,
    width: "90%",
    borderRadius: 8,
  },
  additionalStylesCard: {
    height: 150,
    width: 150,
    margin: 10,
  },
  textCategory: {
    width: "80%",
    color: colors.platinum,
    justifyContent:"center",
  },
  pressable: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
  },
})
