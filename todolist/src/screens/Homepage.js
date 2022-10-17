import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, Platform, TextInput, TouchableOpacity, FlatList, Alert,ImageBackground, Image } from "react-native"
import { Card } from "../components"
import { COLORS, SIZES, FONTS, SHADOW } from "../constants"
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "ios" ? 40 : StatusBar.currentHeight + 20,
        flex: 1,
        backgroundColor: COLORS.Tosca,
        padding: 15,
    },
    textBoxWrapper: {
        width: "100%",
        position: "absolute",
        bottom: 0,
        left: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: SIZES.padding,
        backgroundcolor: COLORS.Tosca
    },
    textInput: {
        ...SHADOW,
        borderRadius: SIZES.textBoxRadius,
        backgroundColor: COLORS.DarkTosca,
        height: 42,
        paddingLeft: 15,
        width: "90%",
        color: "#ffffff",
        marginRight: 15,
        ...FONTS.h2_semiBold,
    },
    btn: {
        ...SHADOW,
        backgroundColor: COLORS.DarkTosca,
        height: 42,
        width: 42,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
    },
    Judul:{ 
        ...FONTS.h1_semiBold,
        color:COLORS.Tosca ,
        marginBottom: 35 ,
        alignItems: "center",
        textAlign: "center",
        borderRadius: SIZES.textBoxRadius,
        backgroundColor: COLORS.DarkTosca,
        fontSize:30,
        fontWeight:'bold'
    }
})

export default function Display() {
    const [list, setList] = useState([])
    const [value, setValue] = useState("")

    function addText(text) {
        if (value !== "") {
            setList(prev => {
                return [
                    ...prev,
                    { text: text, isSelected: false } 
                ]
            })
            setValue("")
        } else {
            alert("tolong ketikan sesuatu!")
        }
    }
    function setIsSelected(index, value) {
        let data = []

        for (let i = 0; i < list.length; i++) {
            if (index === i) {
                data.push({ ...list[i], isSelected: value }) 
            } else {
                data.push(list[i])
            }
        }

        setList(data) 
}
    function HapusItem(idx) {
        Alert.alert(
            "Hapus Tugas",
            "apa kamu yakin menghapus tugas?",
            [
                {
                    text: "batal",
                    style: "batal"
                },
                {
                    text: "Yes", onPress: () => {
                        const data = list.filter((item, index) => index !== idx)
                        setList(data)
                    }
                }
            ])
    }


    return <View style={styles.container}>
        <Text style={styles.Judul}>TO DO LIST</Text>
        <FlatList style={{ flex: 1 }}
            data={list}
            renderItem={({ item, index }) => <Card data={item} index={index} setIsSelected={setIsSelected} HapusItem={HapusItem} />}
            keyExtractor={(item, index) => index.toString()}
        />

        <View style={styles.textBoxWrapper}>
            <TextInput
                style={styles.textInput}
                placeholder="New Task"
                placeholderTextColor={COLORS.Tosca}
                onChangeText={text => setValue(text)}
                value={value} />
            <TouchableOpacity
                style={styles.btn}
                onPress={() => addText(value)}>
                <Text style={{ fontSize: 34, color: COLORS.Tosca }}>+</Text>
            </TouchableOpacity>

        </View>
    </View>
}
