import { StyleSheet } from "react-native"
import React from "react"
<<<<<<< HEAD
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import MyProfile from "../screens/MyProfile"
import ImageSelector from "../screens/ImageSelector"
import LocationSelector from "../screens/LocationSelector"
import ListAddress from "../screens/ListAddress"
=======
import Home from "../screens/Home"
import ItemListCategory from "../screens/ItemListCategory"
import ItemDetail from "../screens/ItemDetail"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import MyProfile from "../screens/MyProfile"
import ImageSelector from "../screens/ImageSelector"
>>>>>>> 7430ad11cd450a5776989bbcdab77068bc9e8779

const Stack = createNativeStackNavigator()

const MyProfileStackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="My profile Stack"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen component={MyProfile} name="My Profile Stack" />
            <Stack.Screen component={ImageSelector} name="Image selector" />
<<<<<<< HEAD
            <Stack.Screen component={ListAddress} name="List Address"/>
            <Stack.Screen component={LocationSelector} name="Location Selector"/>

=======
>>>>>>> 7430ad11cd450a5776989bbcdab77068bc9e8779
        </Stack.Navigator>
    )
}

export default MyProfileStackNavigator

const styles = StyleSheet.create({})
