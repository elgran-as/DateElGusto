import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Entypo } from '@expo/vector-icons';
import { removeCartItem } from '../features/Cart/cartSlice';

const CartItem = ({ cartItem, onDelete }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(removeCartItem(cartItem.id)); 
        onDelete(); 
    };

    return (
        <View style={styles.card} onPress={() => {}}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{cartItem.title} ({cartItem.quantity})</Text>
                <Text style={styles.text2}>{cartItem.discountPercentag}% off</Text>
                <Text style={styles.text2}>${cartItem.price}</Text>
            </View>
            <TouchableOpacity onPress={handleDelete}>
                <Entypo name="trash" size={30} color="white" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        height: 100,
        backgroundColor: '#008080', 
        padding: 10,
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textContainer: {
        width: "70%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    text: {
        fontFamily: "Josefin", 
        fontSize: 19,
        color: '#4B8BBE', 
    },
    text2: {
        fontFamily: "Josefin",
        fontSize: 14,
        color: '#008080', 
    },
});

export default CartItem;