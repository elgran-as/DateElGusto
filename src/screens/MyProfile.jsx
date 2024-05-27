<<<<<<< HEAD
import { Image, Platform, StyleSheet, View } from "react-native";
import React from "react";
import AddButton from "../components/AddButton";
import { useDispatch, useSelector } from "react-redux";
import { useGetProfileImageQuery } from "../services/shopService";
import { clearUser } from "../features/User/userSlice";
import { truncateSessionsTable } from "../persistence";

const MyProfile = ({ navigation }) => {
    /* const {localId, imageCamera} = useSelector(state => state.auth.value)
    const {data: imageFromBase} = useGetProfileImageQuery(localId) */

    const dispatch = useDispatch()

    const { imageCamera, localId } = useSelector((state) => state.auth.value)
    const { data: imageFromBase } = useGetProfileImageQuery(localId)

    const launchCamera = async () => {
        navigation.navigate("Image selector")
    }

    const launchLocation = async () => {
        navigation.navigate('List Address')
    }

    const signOut = async () => {
        try {
            if (Platform.OS !== 'web') await truncateSessionsTable()
            dispatch(clearUser())
        } catch (error) {
            console.log({errorSignOutDB: error});
        }
    }
=======
import { Image, StyleSheet, View } from "react-native";
import React from "react";
import AddButton from "../components/AddButton";
import { useSelector } from "react-redux";
import { useGetProfileImageQuery } from "../services/shopService";

const MyProfile = ({navigation}) => {
    /* const {localId, imageCamera} = useSelector(state => state.auth.value)
    const {data: imageFromBase} = useGetProfileImageQuery(localId) */
    
    const {imageCamera, localId} = useSelector(state => state.auth.value)
    const {data: imageFromBase} = useGetProfileImageQuery(localId)

    const launchCamera = async () => {
        navigation.navigate('Image selector')
    };
>>>>>>> 7430ad11cd450a5776989bbcdab77068bc9e8779

    const defaultImageRoute = "../../assets/images/defaultProfile.png"

    return (
        <View style={styles.container}>
<<<<<<< HEAD
            {imageFromBase || imageCamera ? (
                <Image
                    source={{ uri: imageFromBase?.image || imageCamera }}
=======
            {imageFromBase || imageCamera  ? (
                <Image
                    source={{uri: imageFromBase?.image || imageCamera}}
>>>>>>> 7430ad11cd450a5776989bbcdab77068bc9e8779
                    style={styles.image}
                    resizeMode="cover"
                />
            ) : (
                <Image
                    source={require(defaultImageRoute)}
                    style={styles.image}
                    resizeMode="cover"
                />
            )}
<<<<<<< HEAD
            <AddButton
                onPress={launchCamera}
                title={
                    imageFromBase || imageCamera
                        ? "Modify profile picture"
                        : "Add profile picture"
                }
            />
            <AddButton onPress={launchLocation} title="My address" />
            <AddButton onPress={signOut} title="Sign out" />
        </View>
    )
}

export default MyProfile
=======
            <AddButton onPress={launchCamera} title="Add profile picture" />
        </View>
    );
};

export default MyProfile;
>>>>>>> 7430ad11cd450a5776989bbcdab77068bc9e8779

const styles = StyleSheet.create({
    container: {
        padding: 10,
        gap: 15,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
<<<<<<< HEAD
})
=======
});
>>>>>>> 7430ad11cd450a5776989bbcdab77068bc9e8779
