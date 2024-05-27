<<<<<<< HEAD
import { StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "../constants/colors";
=======
import { StyleSheet, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
>>>>>>> 7430ad11cd450a5776989bbcdab77068bc9e8779

const Card = ({children, style}) => {
  return (
    <View style={{...styles.container, ...style}}>
        {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.teal600,
<<<<<<< HEAD
        width: 200,
=======
        width: 250,
>>>>>>> 7430ad11cd450a5776989bbcdab77068bc9e8779
        height: 40,
        shadowColor: colors.platinum,
        shadowOffset: {
          width: 4,
          height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 4,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
