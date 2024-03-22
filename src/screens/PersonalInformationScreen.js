import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function PersonalInformationScreen({ navigation }) {
  const nameAcc = "Chủ tài khoản";
  return (
    <View style={style.container}>
      <View style={style.header}>
        <TouchableOpacity onPress={() => navigation.navigate("InformationScreen")}>
          <AntDesign name="arrowleft" size={26} color={"#fff"} />
        </TouchableOpacity>
      </View>
      <View style={style.coverImage}></View>
      <View style={style.content}>
        <View style={style.avatarAcc}></View>
        <p style={style.nameAcc}>{nameAcc}</p>
        <p style={style.headerInformation}>
          Thông tin cá nhân
        </p>
        <p style={{marginTop: 10, marginLeft: "10%", fontSize: 20, color:"gray"}}>Ngày sinh:  </p>
        <p style={{marginTop: 10, marginLeft: "10%", fontSize: 20, color:"gray"}}>Giới tính:  </p>
        <p style={{marginTop: 10, marginLeft: "10%", fontSize: 20, color:"gray"}}>Số điện thoại:  </p>
        <p style={{marginTop: 10, marginLeft: "5%", marginRight: "5%", textAlign: "center", fontSize: 20, color:"gray"}}>Chỉ có bạn bè có lưu số của bạn trong danh bạ máy xem được số này. </p>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgb(0,145,255)",
    padding: 15,
  },
  coverImage: {
    height: "25%",
    backgroundColor: "yellow",
  },
  content: {
    position: "relative",
    flex: 1,
  },
  avatarAcc: {
    width: 120,
    height: 120,
    borderRadius: "50%",
    backgroundColor: "black",
    position: "absolute",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  nameAcc: {
    color: "black",
    fontSize: 30,
    width: "100%",
    textAlign: "center",
    position: "absolute",
    left: "50%",
    top: "11%",
    transform: "translate(-50%, -50%)",
  },
  headerInformation: {
    color: "black",
    fontSize: 24,
    width: "100%",
    marginTop: "40%",
    marginLeft: "10%",
  },
});
