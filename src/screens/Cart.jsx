import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { usePostOrderMutation } from "../services/shopService";
import { colors } from "../constants/colors";
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation

const Cart = () => {

    const {localId} = useSelector(state => state.auth.value)
    const {items: CartData, total} = useSelector(state => state.cart.value)

    const [triggerPostOrder, result] = usePostOrderMutation()

    const navigation = useNavigation(); // Usa useNavigation

    const onConfirmOrder = async () => {
        await triggerPostOrder({items: CartData, user: localId, total});
        if (!result.error) {
            // Limpia el carrito
            

            // Navega hacia la pantalla inicial
            navigation.reset({
                index: 0,
                routes: [{ name: 'Home' }], 
            });
        }
    }

    console.log(result);

    return (
        <View style={styles.container}>
            <FlatList
                data={CartData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return <CartItem cartItem={item} />
                }}
            />
            <View style={styles.totalContainer}>
                <Pressable onPress={onConfirmOrder} style={styles.ConfirmTotal}>
                    <Text>Confirm</Text>
                </Pressable>
                <Text>Total: ${total}</Text>
            </View>
        </View>
    )
}

export default Cart

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
    },
    ConfirmTotal:{
        backgroundColor: colors.teal600,
    }
})
