import React from 'react';
import { View, Text, StyleSheet, Pressable } from "react-native"
import CheckBox from "expo-checkbox"
import { SIZES, FONTS, COLORS, SHADOW } from "../constants"
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
    view: {
        ...SHADOW,
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 19,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        borderRadius: SIZES.textBoxRadius,
        backgroundColor:"#11738a"
    },
    text: {
        ...FONTS.h2_semiBold,
        color: COLORS.Tosca,
        borderColor: COLORS.Tosca
    },
    checkbox: {
        marginRight: 15
    }
})

export default function Card(props) {
    return <Pressable style={styles.view} onLongPress={() => props.HapusItem(props.index)}>
        <CheckBox style={styles.checkbox}
            value={props.data.isSelected}
            onValueChange={(value) => props.setIsSelected(props.index, value)}
        />
        <Text style={styles.text}>{props.data.text}</Text>
    </Pressable>
}