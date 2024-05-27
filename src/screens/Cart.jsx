<<<<<<< HEAD
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
=======
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native"
import React from "react"
// import CartData from "../data/cart.json"
import CartItem from "../components/CartItem"
import { useSelector } from "react-redux"
import { usePostOrderMutation } from "../services/shopService"
// import { useSelector } from "react-redux"
// import { usePostOrderMutation } from "../services/shopService"

const Cart = () => {
    // console.log(CartData);

    const {items: CartData, total} = useSelector(state => state.cart.value)

    const [triggerPostOrder, result] = usePostOrderMutation()
    /* const { items: cartItems, total } = useSelector((state) => state.cart.value)
    const [triggerPost, result] = usePostOrderMutation()

    console.log(cartItems)
    console.log(result) */

    /* let total = 0
    for (const currentItem of CartData) {
        console.log(currentItem.id);
        total += currentItem.price * currentItem.quantity
    } */

    /* onConfirm = () => {
        triggerPost({
            total,
            items: cartItems,
            user: "userLoggedId",
            date: new Date().toLocaleString(),
        })
    } */

    const onConfirmOrder = () => {
        triggerPostOrder({items: CartData, user: 'Rafael', total})
>>>>>>> 7430ad11cd450a5776989bbcdab77068bc9e8779
    }

    console.log(result);

    return (
        <View style={styles.container}>
            <FlatList
                data={CartData}
<<<<<<< HEAD
                keyExtractor={(item) => item.id}
=======
                keyExtractor={(pepe) => pepe.id}
>>>>>>> 7430ad11cd450a5776989bbcdab77068bc9e8779
                renderItem={({ item }) => {
                    return <CartItem cartItem={item} />
                }}
            />
            <View style={styles.totalContainer}>
<<<<<<< HEAD
                <Pressable onPress={onConfirmOrder} style={styles.ConfirmTotal}>
=======
                <Pressable onPress={onConfirmOrder}>
>>>>>>> 7430ad11cd450a5776989bbcdab77068bc9e8779
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
<<<<<<< HEAD
    ConfirmTotal:{
        backgroundColor: colors.teal600,
    }
})
=======
})
>>>>>>> 7430ad11cd450a5776989bbcdab77068bc9e8779
