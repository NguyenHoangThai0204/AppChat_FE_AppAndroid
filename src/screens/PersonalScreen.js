import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  FlatList,
} from "react-native";
import { MdOutlineSettingsVoice, MdOutlineTopic } from "react-icons/md";
import { IoArrowBackOutline } from "react-icons/io5";
import { PiDotsThreeOutlineLight } from "react-icons/pi";
import ChatsScreen from "./ChatsScreen.js";

export default function PersonalScreen({ route, navigation }) {
  const { name } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.menu}>
          <TouchableOpacity
            style={{ fontSize: "23px", color: "black" }}
            onPress={() => navigation.navigate("ChatsScreen", { name: name })}
          >
            <IoArrowBackOutline />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "65%",
            }}
          ></TouchableOpacity>
          <TouchableOpacity style={{ fontSize: "30px" }}>
            <MdOutlineSettingsVoice style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={{ fontSize: "30px" }}>
            <MdOutlineTopic style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={{ fontSize: "30px" }}>
            <PiDotsThreeOutlineLight style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.avatar}></View>
        <p style={styles.nameStyle}>{name}</p>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
  },
  menu: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0)", // Màu đen với độ trong suốt là 50%
    padding: 10,
    justifyContent: "space-around",
  },
  header: {
    height: "25%",
    backgroundColor: "red",
  },
  content: {
    position: "relative",
    flex: 1,

  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: "50%",
    backgroundColor: "black",
    position: "absolute",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },nameStyle:{
    color: "black",
    fontSize:30,
    width:"100%",
    textAlign:"center",
    position: "absolute",
    left: "50%",
    top:"11%",    
    transform: "translate(-50%, -50%)",
  },
  icon: {
    height: "25px",
    width: "25px",
    padding: "5px",
    color: "black",
  },
});
