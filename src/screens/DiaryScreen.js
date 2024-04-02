import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
export default function DiaryScreen() {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          backgroundColor: "rgb(0,145,255)",
        }}
      >
        {/* icon tìm kiếm */}
        <TouchableOpacity
          style={{
            width: "10%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MaterialIcons
            name="search"
            size={30}
            color={"white"}
            padding={"5px"}
          />
        </TouchableOpacity>
        <TextInput
          style={{
            height: 50,
            width: "80%",
            backgroundColor: "rgb(0,145,255)",
            color: "white",
            padding: "5px",
            fontSize: 20,
          }}
          placeholder="Tìm kiếm"
        />
        <TouchableOpacity
          style={{
            width: "10%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AntDesign name="qrcode" size={30} color={"white"} padding={"5px"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
