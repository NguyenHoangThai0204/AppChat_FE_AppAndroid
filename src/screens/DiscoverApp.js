import React from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function DiscoverApp({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Phần header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={{ fontSize: 30, color: "white" }}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Ionicons name="arrow-back-outline" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={{ width: "55%", fontSize: 20, color: "white" }}>
          <TextInput style={styles.inputHeader} placeholder="Tìm kiếm" />
        </TouchableOpacity>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    justifyContent: "space-around",
    backgroundColor: "rgb(0, 145, 255)",
  },
  inputHeader: {
    fontSize: 20,
    color: "white",
    padding: 10,
    borderWidth: 0, // Đặt giá trị của borderWidth là 0 để không hiển thị border
    opacity: 0.8,
  },
});
