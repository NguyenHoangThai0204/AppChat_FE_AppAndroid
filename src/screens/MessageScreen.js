import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  FlatList,
} from "react-native";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import { FaQrcode } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import ChatsScreen from "./ChatsScreen.js";

const users = [
  { id: "1", name: "Người dùng 1", email: "user1@example.com" },
  { id: "2", name: "Người dùng 2", email: "user2@example.com" },
  // Thêm thông tin người dùng khác nếu cần
];
export default function MessageScreen({ props, navigation }) {
  // render người dùng
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate("ChatsScreen")}>
      <View style={styles.userItem}>
        <View style={styles.avatar}></View>
        <View style={styles.inforUser}>
          <Text style={{ fontSize: "18px" }}>{item.name}</Text>
          <Text style={{ fontSize: "16px" }}>{item.email}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* phần header */}
      <View style={styles.header}>
        <PiMagnifyingGlassLight style={styles.icon} />
        <TextInput
          style={styles.inputHeader}
          placeholder="Tìm kiếm"
        ></TextInput>
        <FaQrcode style={styles.icon} />
        <IoMdAdd style={styles.icon} />
      </View>
      {/* Phần content */}
      <View style={styles.content}>
        {/* Phần tab */}
        <View>
          
        </View>
        {/* danh sách người đang sử dụng */}
        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: "1",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "rgb(0,145,255)",
    paddingVertical: 10,
  },
  icon: {
    height: "30px",
    width: "30px",
    padding: "5px",
    color: "white",
  },
  inputHeader: {
    fontSize: 20,
    color: "white",
    padding: 10,
    borderWidth: 0, // Đặt giá trị của borderWidth là 0 để không hiển thị border
    opacity: 0.8,
  },

  content: {
    flex: 1,
  },
  avatar: {
    width: "55px",
    height: "55px",
    padding: "15px",
    borderRadius: 50,
    backgroundColor: "black",
  },
  inforUser: {
    marginLeft: "15px",
    textAlign: "left",
  },
  userItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    padding: "8px",
    flexDirection: "row",
  },
});
