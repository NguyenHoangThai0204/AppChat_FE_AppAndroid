import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  FlatList,
} from "react-native";
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function PersonalScreen({ route, navigation }) {
  const { name } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.menu}>
          <TouchableOpacity
            onPress={() => navigation.navigate("ChatsScreen", { name: name })}
          >
            <AntDesign name="arrowleft" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "65%",
            }}
          ></TouchableOpacity>
          <TouchableOpacity style={{ fontSize: 30 }}>
            <Feather name="phone-call" size={28} color={"white"} padding={"5px"}/>
          </TouchableOpacity>
          <TouchableOpacity style={{ fontSize: 30 }}>
           <MaterialIcons name="videocam" size={28} color={"white"}  padding={"5px"}/>
          </TouchableOpacity>
          <TouchableOpacity style={{ fontSize: 30 }}>
            <Entypo name="dots-three-horizontal" size={28} color={"white"}  padding={"5px"}/>
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
  },
  nameStyle:{
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
