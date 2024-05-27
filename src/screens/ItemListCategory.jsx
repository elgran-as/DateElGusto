<<<<<<< HEAD
import { FlatList, StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";
import { useState, useEffect } from "react";
import { useGetProductsByCategoryQuery } from "../services/shopService";
=======
import { FlatList, StyleSheet, Text, View } from "react-native"
import { colors } from "../constants/colors"
// import products from "../data/products.json"
import ProductItem from "../components/ProductItem"
import Search from "../components/Search"
import { useState, useEffect } from "react"
import { useGetProductsByCategoryQuery } from "../services/shopService"
>>>>>>> 7430ad11cd450a5776989bbcdab77068bc9e8779

const ItemListCategory = ({
  setCategorySelected = () => {},
  navigation,
  route
}) => {
  const [keyWord, setKeyword] = useState("")
  const [productsFiltered, setProductsFiltered] = useState([])
  const [error, setError] = useState("")

  const {category: categorySelected} = route.params

  const {data: productsFetched, error: errorFromFetch, isLoading} = useGetProductsByCategoryQuery(categorySelected)

<<<<<<< HEAD
=======
  /* console.log(errorFromFetch);
  console.log(isLoading); */

>>>>>>> 7430ad11cd450a5776989bbcdab77068bc9e8779
  useEffect(() => {
    //Products filtered by category

    //No digits validation
    const regexDigits = /\d/
    const hasDigits = regexDigits.test(keyWord)
    if (hasDigits) {
      setError("Don't use digits")
      return
    }
    //3 or more characters
    const regexThreeOrMore = /[a-zA-Z]{3,}/
    const hasThreeOrMoreChars = regexThreeOrMore.test(keyWord)

    if (!hasThreeOrMoreChars && keyWord.length) {
      setError("Type 3 or more characters")
      return
    }

<<<<<<< HEAD
=======
    /* const productsPrefiltered = products.filter(
      (product) => product.category === categorySelected
    ) */
>>>>>>> 7430ad11cd450a5776989bbcdab77068bc9e8779
    //Product filtered by name
    if (!isLoading) {
      const productsFilter = productsFetched.filter((product) =>
        product.title.toLocaleLowerCase().includes(keyWord.toLocaleLowerCase())
      )
      setProductsFiltered(productsFilter)
      setError("")
    }
  }, [keyWord, categorySelected, productsFetched, isLoading])

  return (
    <View style={styles.flatListContainer}>
      <Search
        error={error}
        onSearch={setKeyword}
        goBack={() => navigation.goBack()}
      />
      <FlatList
        data={productsFiltered}
        renderItem={({ item }) => (
          <ProductItem product={item} navigation={navigation}/>
        )}
        keyExtractor={(producto) => producto.id}
<<<<<<< HEAD
        numColumns={2}
=======
>>>>>>> 7430ad11cd450a5776989bbcdab77068bc9e8779
      />
    </View>
  )
}

export default ItemListCategory

const styles = StyleSheet.create({
  flatListContainer: {
    width: "100%",
    backgroundColor: colors.teal400,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
})
