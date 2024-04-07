import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  FlatList,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
import { getApiNoneToken } from "../../api/Callapi.js";

export default function MessageScreen({ props, navigation }) {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const users = [
    { id: "1", name: "Người dùng 1", email: "user1@example.com" },
    { id: "2", name: "Hồ Trọng Mến", email: "user2@example.com" },
    { id: "3", name: "Nguyễn Hoàng Thái", email: "user1@example.com" },
    { id: "4", name: "Lê Thị Ngọc Mai", email: "user2@example.com" },
    { id: "5", name: "Nguyễn Văn Việt", email: "user1@example.com" },
    { id: "6", name: "Nguyễn Văn Long", email: "user2@example.com" },

  ];
  // tìm kiếm
  const search = async () => {
    const response = await getApiNoneToken("/getDetailsByPhone/" + phone, {
      phone: phone,
    });
    // alert(response.data.data)
    console.log(response.data.data);
    alert(response.data.data.phone);
    alert(response.data.data.name);
    // alert(response.data.data.avatar)
    setName(response.data.data.name);
    return response.data.data.phone;
  };
  // render người dùng
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("ChatsScreen", { name: item.name })}
    >
      <View style={styles.userItem}>
        <View style={styles.avatar}></View>
        <View style={styles.inforUser}>
          <Text style={{ fontSize: 18 }}>{item.name}</Text>
          <Text style={{ fontSize: 16 }}>{item.email}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* phần header */}
      <View style={styles.header}>
        <MaterialIcons
          onPress={() => search()}
          name="search"
          size={30}
          color={"white"}
          padding={5}
        />
        <TextInput
          onChangeText={setPhone}
          value={phone}
          style={styles.inputHeader}
          placeholder="Tìm kiếm"
        ></TextInput>
        <AntDesign name="qrcode" size={30} color={"white"} padding={"5px"} />
        <FontAwesome5 name="plus" size={30} color={"white"} padding={"5px"} />
      </View>
      {/* Phần content */}
      <View style={styles.content}>
        {/* danh sách người đang sử dụng */}
        {!phone ? (
          <>
            <FlatList
              data={users}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={true}
            />
          </>
        ) : (
          <>
            {/* <FlatList
           data={search()}
            renderItem={renderSearch}
            keyExtractor={(item) => item.phone}
          showsVerticalScrollIndicator={true}
           /> */}
            {/* <TextInput value={search}/> */}
            <View style={styles.userItem}>
              <View style={styles.avatar}></View>
              <View style={styles.inforUser}>
                <Text style={{ fontSize: 18 }}>{phone}</Text>
                <Text style={{ fontSize: 16 }}>{name}</Text>
                <TouchableOpacity
                  style={{
                    borderColor: "blue",
                    height: 40,
                    borderWidth: 1,
                    borderRadius: 10,
                    marginLeft: 200,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <View>
                    {" "}
                    <Text style={{ fontSize: 18, color: "blue" }}>
                      Kết bạn
                    </Text>{" "}
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "rgb(0,145,255)",
  },
  icon: {
    height: 30,
    width: 30,
    padding: 5,
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
    width: 55,
    height: 55,
    padding: 15,
    borderRadius: 50,
    backgroundColor: "black",
  },
  inforUser: {
    marginLeft: 15,
    textAlign: "left",
  },
  userItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    padding: 8,
    flexDirection: "row",
  },
});
