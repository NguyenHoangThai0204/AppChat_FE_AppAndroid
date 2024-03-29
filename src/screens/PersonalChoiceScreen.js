import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { IoArrowBackOutline } from "react-icons/io5";
import { RiVideoAddFill } from "react-icons/ri";
import { IoIosCall } from "react-icons/io";
import { MdMenuOpen } from "react-icons/md";
import ChatsScreen from "./ChatsScreen";
import { AiOutlineDelete } from "react-icons/ai";
import { MdGroupAdd } from "react-icons/md";
import { IoSearchSharp, IoPersonCircleOutline } from "react-icons/io5";

export default function PersonalChoiceScreen({ route, navigation }) {
    const { name } = route.params;
  return (
    <View>
      <View style={styles.container}>
        {/* Phần header */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.navigate("ChatsScreen", { name: name })}
          >
            <IoArrowBackOutline style={{ fontSize: 25, color: "white" }} />
          </TouchableOpacity>
          <View>
            <p
              style={{
                fontSize: 25,
                color: "white",
                margin: "0 0 0 8px",
                padding: 0,
              }}
            >
              Tuỳ chọn
            </p>
          </View>
        </View>
        <ScrollView
          style={styles.body}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.headerContent}>
            <View style={styles.avatar}></View>
            <View>
              <Text style={{margin:"25px 0" ,color: "red", fontWeight:500,fontSize: 30 }}>{name}</Text>
            </View>
          </View>
          <View style={styles.body}>
            <View style={{justifyContent:"space-around",flexDirection:"row", margin:0, padding:0,width:"100%"}}>
              <TouchableOpacity style={styles.buttonY}>
                <IoSearchSharp style={styles.icon} />
                <Text style={{ fontSize: 25, marginLeft: 8 }}>
                  Tìm tin nhắn
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonY}>
                <IoPersonCircleOutline style={styles.icon} />
                <Text style={{ fontSize: 25, marginLeft: 8 }}>
                  Trang cá nhân
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.buttonX}>
              <MdGroupAdd style={styles.icon} />
              <Text style={{ fontSize: 28, marginLeft: 8 }}>Tạo group</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonX}>
              <AiOutlineDelete style={styles.icon} />
              <Text style={{ fontSize: 28, marginLeft: 8 }}>Xoá hội thoại</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: "1",
    flexDirection: "column",
    maxHeight: "100vh",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    justifyContent: "left",
    backgroundColor: "rgb(0,145,255)",
    maxHeight: "10vh",
  },
  body: {
    maxHeight: "89vh",
    flex: 1,
    marginTop: 5,
    width: "100%",
  },
  contentContainer: {
    flexGrow: 1,
    alignItems: "center",
  },
  headerContent: {
    display: "flex",
    flexDirection: "column",
    marginTop: "18px",
    alignItems: "center",
  },
  bodyContent: {
    flexDirection: "column",
    flex: 1,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    color: "white",
    backgroundColor: "black",
  },
  icon: {
    height: "32px",
    width: "32px",
    fontWeight: 400,
    padding: "5px",
  },
  buttonX: {
    padding: 15,
    alignItems: "center",
    flexDirection: "row",
    margin: "15px 0",
  },
  buttonY: {
    padding: 15,
    alignItems: "center",
    flexDirection: "column",
    margin: "15px 0",
  },
});
