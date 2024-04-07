import React, { useState, useRef } from "react";
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

export default function ChatsScreen({ route, navigation }) {
  const { name } = route.params;
  const [inputText, setInputText] = useState("");
  const [listData, setListData] = useState([]);
  const flatListRef = useRef(null);

  const handleSend = () => {
    if (inputText.trim() !== "") {
      setListData([...listData, inputText]);
      setInputText("");
      flatListRef.current.scrollToEnd();
    }
  };

  return (
    <View style={styles.container}>
      {/* Phần header */}
      <View style={styles.header}>
        <TouchableOpacity style={{ fontSize: 23, color: "white" }} onPress={() => navigation.navigate("HomeScreen")}>
          <Text></Text>
          <AntDesign name="arrowleft" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ width: "65%", flexDirection: "column" }}
          onPress={() => navigation.navigate("PersonalScreen", { name: name })}
        >
          <View style={styles.inputHeader}>
            <Text style={{ fontSize: 23,  fontWeight:550,color: "white" }}>{name}</Text>
            <Text style={{ fontSize: 15, fontStyle: "italic", color: "black" }}>Hoạt động 15 phút trước</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ fontSize: 30, color: "white" }}>
          <Entypo name="phone" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={{ fontSize: 30, color: "white" }}>
          <Entypo name="video-camera" size={30} color="white" />
        </TouchableOpacity>
        {/* Phần menu cá nhân */}
        <TouchableOpacity
          style={{ fontSize: 30, color: "white" }}
          onPress={() => navigation.navigate("PersonalChoiceScreen", { name: name })}
        >
          <MaterialCommunityIcons name="dots-vertical" size={23} color="white" />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          ref={flatListRef}
          data={listData}
          renderItem={({ item }) => <Text style={styles.itemText}>{item}</Text>}
          showsVerticalScrollIndicator={true}
          onContentSizeChange={() => flatListRef.current.scrollToEnd({ animated: true })}
        />
      </View>
      {/* Phần footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={{ fontSize: 23, color: "white" }}>
          <MaterialCommunityIcons name="emoticon-happy-outline" size={23} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={{ width: "55%", fontSize: 20, color: "white" }}>
          <TextInput
            style={styles.inputFooter}
            placeholder="Soạn tin nhắn"
            keyboardType="default"
            value={inputText}
            onChangeText={setInputText}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ fontSize: 30, color: "white" }} onPress={handleSend}>
          <Entypo name="direction" size={23} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={{ fontSize: 30, color: "white" }}>
          <Entypo name="mic" size={23} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={{ fontSize: 30, color: "white" }}>
          <Entypo name="attachment" size={23} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={{ fontSize: 30, color: "white" }}>
          <MaterialCommunityIcons name="dots-vertical" size={23} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemText: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: "cyan",
    fontSize: 20,
    marginBottom: 5,
    fontWeight: "bold",
    textAlign: "right",
  },
  footer: {
    width: "100%",
    height: 60,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "rgb(0, 145, 255)",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 1,
    justifyContent: "space-around",
    backgroundColor: "rgb(0, 145, 255)",
  },
  inputHeader: {
    fontSize: 23,
    padding: 8,
    borderWidth: 0,
  },
  inputFooter: {
    fontSize: 20,
    color: "black",
    backgroundColor: "white",
    borderRadius: 5,
    padding: 5,
  },
});
