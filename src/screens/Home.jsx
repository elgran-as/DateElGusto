import React from 'react';
import { ImageBackground, FlatList, StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";
import CategoryItem from "../components/CategoryItem";
import { useGetCategoriesQuery } from "../services/shopService";
import { FontAwesome6 } from '@expo/vector-icons';

const Home = ({ route, navigation }) => {
  const { data: categories, error, isLoading } = useGetCategoriesQuery();

  const image = { uri: 'https://images.unsplash.com/photo-1576867757603-05b134ebc379?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' };

  return (
    <>
      <View style={styles.headerContainer}>
          <FontAwesome6 name="pizza-slice" size={24} color="white" />
          <FontAwesome6 name="burger" size={24} color="white" />
          <FontAwesome6 name="cheese" size={24} color="white" />
          <FontAwesome6 name="bread-slice" size={24} color="white" />
          <FontAwesome6 name="hotdog" size={24} color="white" />
          <FontAwesome6 name="bowl-food" size={24} color="white" />
      </View>
      <View style={styles.flatListContainer}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={(element) => element}
            data={categories}
            renderItem={({ item }) => (
              <CategoryItem navigation={navigation} category={item} />
            )}
          />
        </ImageBackground>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center', 
    backgroundColor:colors.teal600,
    padding: 5,
  },
  flatListContainer: {
    width: "100%",
    backgroundColor: colors.teal400,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: "100%",
    borderRadius:5,
  },
});
