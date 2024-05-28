import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { usePostOrderMutation } from "../services/shopService";
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation

const Cart = () => {
    const navigation = useNavigation(); // Usa useNavigation
    const { localId } = useSelector(state => state.auth.value);
    const { items: CartData, total } = useSelector(state => state.cart.value);
    const [triggerPostOrder, { isLoading }] = usePostOrderMutation();

    const onConfirmOrder = async () => {
        await triggerPostOrder({ items: CartData, user: localId, total });
        navigation.navigate('Orders'); // Navega a la pantalla de órdenes
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={CartData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <CartItem cartItem={item} />}
            />
            <View style={styles.totalContainer}>
                <Pressable onPress={onConfirmOrder} disabled={isLoading} style={styles.Confirm}>
                    <Text style={styles.TextConfirm}>Confirm</Text>
                </Pressable>
                <Text style={styles.total}>Total: ${total}</Text>
            </View>
        </View>
    );
};

export default Cart;

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        flex: 1,
        marginBottom: 120,
    },
    totalContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderColor:"red",
    },
    Confirm:{
        backgroundColor: "red",       
    },
    TextConfirm:{
        fontStyle:"bold",
        tintColor: "white",
    },
    total:{
        margin:10,
    },
});
