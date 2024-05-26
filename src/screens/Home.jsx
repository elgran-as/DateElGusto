
import { FlatList, StyleSheet, Text, View, ImageBackground } from "react-native";
import { colors } from "../constants/colors";
import CategoryItem from "../components/CategoryItem";
import { useGetCategoriesQuery } from "../services/shopService";

const Home = ({ route, navigation }) => {
  const { data: categories, error, isLoading } = useGetCategoriesQuery();

  return (
    <ImageBackground source={{ uri: 'https://thumbs.dreamstime.com/z/fondo-de-cocina-con-mesa-madera-blanca-alimentos-marco-comida-sobre-verduras-frescas-especias-hierbas-y-aceite-ingredientes-para-187070339.jpg' }} style={styles.backgroundImage}>
      <View style={styles.contentContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(element) => element.id}
          data={categories}
          renderItem={({ item }) => (
            <CategoryItem
              navigation={navigation}
              category={item}
            />
          )}
        />
      </View>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    width: '100%',
    backgroundColor: colors.teal400,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});
