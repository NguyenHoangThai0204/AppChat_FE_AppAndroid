import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View, StyleSheet  } from "react-native";

export default function PersonalInformationScreen({navigation}) {
    const nameAcc = "Chủ tài khoản";
    return (
       <View style={style.container} >
        <View style={style.content}>
            <View style={style.avatarAcc}></View>
            <p style={style.nameAcc}>{nameAcc}</p>
        </View>
       </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "yellow",
    },
    content: {
        position: "relative",
        flex: 1,
    },
    avatarAcc:{
        width: 120,
        height: 120,
        borderRadius: "50%",
        backgroundColor: "black",
        position: "absolute",
        left: "50%",
        transform: "translate(-50%, -50%)",
    },
    nameAcc:{
        color: "black",
        fontSize:30,
        width: "100%",
        textAlign: "center",
        position: "absolute",
        left: "50%",
        top: "11%",
        transform: "translate(-50%, -50%)",
    }
});
