import { StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "../constants/colors";

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
        backgroundColor: hexToRgbA('#F2542D', 0.8),
        width: 140,
        height: 140,
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
