import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions
} from "react-native"
<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { useGetProductByIdQuery } from "../services/shopService";
import { useDispatch } from "react-redux";
import { addCartItem } from "../features/Cart/cartSlice";
import Counter from "../components/Counter";
=======
import React, { useEffect, useState } from "react"
// import allProducts from "../data/products.json"
import { useGetProductByIdQuery } from "../services/shopService"
import { useDispatch } from "react-redux"
import { addCartItem } from "../features/Cart/cartSlice"
>>>>>>> 7430ad11cd450a5776989bbcdab77068bc9e8779

const ItemDetail = ({ route, navigation }) => {

  const dispatch = useDispatch()
<<<<<<< HEAD
=======
  // const [product, setProduct] = useState(null)
>>>>>>> 7430ad11cd450a5776989bbcdab77068bc9e8779
  const [orientation, setOrientation] = useState("portrait")
  const { width, height } = useWindowDimensions()

  const {productId: idSelected} = route.params

  const {data: product, error, isLoading} = useGetProductByIdQuery(idSelected)

<<<<<<< HEAD
=======
  //Landscape = horizontal
  //Portrait = vertical

>>>>>>> 7430ad11cd450a5776989bbcdab77068bc9e8779
  useEffect(() => {
    if (width > height) setOrientation("landscape")
    else setOrientation("portrait")
  }, [width, height])

<<<<<<< HEAD
=======
  /* useEffect(() => {
    //Encontrar el producto por su id
    const productSelected = allProducts.find(
      (product) => product.id === idSelected
    )
    setProduct(productSelected)
  }, [idSelected]) */
>>>>>>> 7430ad11cd450a5776989bbcdab77068bc9e8779

  const handleAddCart = () => {
    dispatch(addCartItem({...product, quantity: 1}))
  }

  return (
    <View>
      <Button onPress={() => navigation.goBack()} title="Go back" />
      {product ? (
        <View
          style={
            orientation === "portrait"?
            styles.mainContainer
            : styles.mainContainerLandscape
          }
        >
          <Image
            source={{ uri: product.images[0] }}
            style={orientation === "portrait" ? styles.image : styles.imageLandscape}
            resizeMode="cover"
          />
          <View style={orientation === "portrait" ? styles.textContainer : styles.textContainerLandscape}>
            <Text>{product.title}</Text>
            <Text>{product.description}</Text>
            <Text style={styles.price}>${product.price}</Text>
            <Button title="Add cart" onPress={handleAddCart}></Button>
          </View>
<<<<<<< HEAD
          {/* <Counter/> */}
=======
>>>>>>> 7430ad11cd450a5776989bbcdab77068bc9e8779
        </View>
      ) : null}
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
  },
  mainContainerLandscape: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
    gap: 10,
  },
  image: {
    width: '100%',
<<<<<<< HEAD
    height: 200,
=======
    height: 250,
>>>>>>> 7430ad11cd450a5776989bbcdab77068bc9e8779
  },
  imageLandscape: {
    width: '45%',
    height: 200
  },
  textContainer: {
    flexDirection: "column",
  },

  textContainerLandscape: {
    width: '50%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
    gap: 10,
  },
  price: {
    textAlign: 'right',
    width: '100%'
  }
})
