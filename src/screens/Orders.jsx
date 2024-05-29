import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import OrderItem from "../components/OrderItem";
import { useGetOrdersQuery } from "../services/shopService";
import { useSelector } from "react-redux";

const OrderScreen = () => {
  const { localId } = useSelector((state) => state.auth.value);
  const { data: orders, isSuccess } = useGetOrdersQuery(localId);
  const [ordersFiltered, setOrdersFiltered] = useState([]);

  useEffect(() => {
    if (isSuccess && orders) {
      const responseTransformed = Object.values(orders);

      const ordersFiltered = responseTransformed.filter(
        (order) => order.user === localId
      );
      setOrdersFiltered(ordersFiltered);
    }
  }, [orders, isSuccess, localId]);

  return (
    <View style={styles.container}>
      <FlatList
        data={ordersFiltered}
        renderItem={({ item }) => {
          return (
            <View style={styles.itemContainer}>
              <OrderItem order={item} />
            </View>
          );
        }}
      />
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  itemContainer: {
    marginBottom: 20,
  },
});
