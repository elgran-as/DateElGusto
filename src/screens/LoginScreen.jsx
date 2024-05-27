import { Pressable, StyleSheet, Text, View, Platform, ImageBackground } from "react-native";
import React, { useState, useEffect } from "react";
import { colors } from "../constants/colors";
import InputForm from "../components/inputForm";
import SubmitButton from "../components/submitButton";
import { useSignInMutation } from "../services/authService";
import { setUser } from "../features/User/userSlice";
import { useDispatch } from "react-redux";
import { insertSession } from "../persistence";



const LoginScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const [triggerSignIn, result] = useSignInMutation()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    useEffect(() => {
        if (result.isSuccess) {
            console.log("🕵🏻 ~ useEffect ~ result:", result)
            dispatch(
                setUser({
                    email: result.data.email,
                    idToken: result.data.idToken,
                    localId: result.data.localId
                })
            )
        }
    }, [result])

    const onSubmit = () => {
        if (!email.trim() ||!password.trim()) {
            setErrorMessage('Please fill in both fields.')
            return
        }
        triggerSignIn({ email, password })
    }

    return (
        <ImageBackground source={{uri: 'https://st3.depositphotos.com/4006379/15836/v/950/depositphotos_158368554-stock-illustration-cute-cartoon-fast-food-seamless.jpg'}} style={styles.backgroundImage}>
            <View style={styles.main}>
                <View style={styles.container}>
                    <Text style={styles.title}>Login to start</Text>
                    <InputForm label={"email"} onChange={text => {setEmail(text); setErrorMessage('');}} error={errorMessage} />
                    <InputForm
                        label={"password"}
                        onChange={text => {setPassword(text); setErrorMessage('');}}
                        error={errorMessage}
                        isSecure={true}
                    />
                    <SubmitButton onPress={onSubmit} title="Send" />
                    <Text style={[styles.sub, {color: errorMessage? 'red' : 'black'}]}>Not have an account?</Text>
                    <Pressable onPress={() => navigation.navigate("Signup")}>
                        <Text style={styles.subLink}>Sign up</Text>
                    </Pressable>
                </View>
            </View>
        </ImageBackground>

    )
}

export default LoginScreen

const styles = StyleSheet.create({
    backgroundImage: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        resizeMode: "cover",
    },

    main: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        width: "90%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.platinum,
        gap: 15,
        paddingVertical: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 22,
        fontFamily: "Josefin",
    },
    sub: {
        fontSize: 14,
        color: "black",
    },
    subLink: {
        fontSize: 14,
        color: "blue",
    },
})
