import { Pressable, StyleSheet, Text, View, Platform, ImageBackground } from "react-native";
import React, { useState, useEffect } from "react";
import { colors } from "../constants/colors";
import InputForm from "../components/inputForm";
import SubmitButton from "../components/submitButton";
import { useSignInMutation } from "../services/authService";
import { setUser } from "../features/User/userSlice";
import { useDispatch } from "react-redux";
import { insertSession } from "../persistence";

// Función para convertir un color hexadecimal a rgba con opacidad
const hexToRgbA = (hex, opacity) => {
  let c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = `0x${c.join('')}`;
    return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',')},${opacity})`;
  }
  throw new Error('Bad Hex');
};

const LoginScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [triggerSignIn, result] = useSignInMutation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(""); // errores de email
    const [passwordError, setPasswordError] = useState(""); // errores de contraseña

    useEffect(() => {
        if (result?.data && result.isSuccess) {
            (async () => {
                try {
                    if (Platform.OS!== 'web') {
                        const response = await insertSession({
                            email: result.data.email,
                            localId: result.data.localId,
                            token: result.data.idToken,
                        });
                    }
                    dispatch(
                        setUser({
                            email: result.data.email,
                            idToken: result.data.idToken,
                            localId: result.data.localId,
                        })
                    );
                } catch (error) {
            
                }
            })();
        }
    }, [result]);

    const onSubmit = () => {
      
        if (!email ||!password) {
            setEmailError(email? "" : "Email is required");
            setPasswordError(password? "" : "Password is required");
            return;
        }

        triggerSignIn({ email, password });
    };

    return (
        <ImageBackground source={{ uri: 'https://st3.depositphotos.com/4006379/15836/v/950/depositphotos_158368554-stock-illustration-cute-cartoon-fast-food-seamless.jpg' }} style={styles.backgroundImage}>
            <View style={styles.main}>
                <View style={[styles.container, { backgroundColor: hexToRgbA('#F2542D', 0.8) }]}>
                    <Text style={styles.title}>Login to start</Text>
                    <InputForm 
                        label={"email"} 
                        onChange={(text) => {
                            setEmail(text);
                            if (!text) {
                                setEmailError("Email is required");
                            } else {
                                setEmailError("");
                            }
                        }} 
                        error={emailError} 
                    />
                    <InputForm
                        label={"password"}
                        onChange={(text) => {
                            setPassword(text);
                            if (!text) {
                                setPasswordError("Password is required");
                            } else {
                                setPasswordError("");
                            }
                        }}
                        error={passwordError}
                        isSecure={true}
                    />
                    <SubmitButton onPress={onSubmit} title="Send" />
                    <Text style={styles.sub}>Not have an account?</Text>
                    <Pressable onPress={() => navigation.navigate("Signup")}>
                        <Text style={styles.subLink}>Sign up</Text>
                    </Pressable>
                </View>
            </View>
        </ImageBackground>
    );
};

export default LoginScreen;

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
});
