<<<<<<< HEAD
import { Image, StyleSheet, Text, Pressable } from "react-native";
import React from "react";
import Card from "./Card";
import { colors } from "../constants/colors";
import { useDispatch } from "react-redux";
import { setIdSelected } from "../features/Shop/shopSlice";
=======
import { Image, StyleSheet, Text, Pressable } from "react-native"
import React from "react"
import Card from "./Card"
import { colors } from "../constants/colors"
import { useDispatch } from "react-redux"
import { setIdSelected } from "../features/Shop/shopSlice"
>>>>>>> 7430ad11cd450a5776989bbcdab77068bc9e8779

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
<<<<<<< HEAD
=======
        <Text style={styles.textCategory}>{product.title}</Text>
>>>>>>> 7430ad11cd450a5776989bbcdab77068bc9e8779
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{ uri: product.images[0] }}
        />
<<<<<<< HEAD
        <Text style={styles.textCategory}>{product.title}</Text>
=======
>>>>>>> 7430ad11cd450a5776989bbcdab77068bc9e8779
      </Pressable>
    </Card>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  image: {
<<<<<<< HEAD
    height: 90,
    width: 150,
    borderRadius: 10,
   
  },
  additionalStylesCard: {
    height: 130,
    width: 170,
    margin: 10,
  },
  textCategory: {
    width: "96%",
    color: colors.platinum,
    justifyContent:"center",
    textAlign: "center",
    marginTop: 8,
  },
  pressable: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
=======
    height: 120,
    width: "30%",
    borderRadius: 8,
  },
  additionalStylesCard: {
    height: 120,
    width: 300,
    margin: 10,
  },
  textCategory: {
    width: "70%",
    color: colors.teal200,
  },
  pressable: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
>>>>>>> 7430ad11cd450a5776989bbcdab77068bc9e8779
  },
})
