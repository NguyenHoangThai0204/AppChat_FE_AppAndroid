import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const FriendList = ({ friends }) => {
  const navigation = useNavigation();

  const handleChatPress = (phone) => {
    navigation.navigate('ChatsScreen', { phone: phone});
  };
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <View style={styles.userItem}>
        <View style={styles.avatar}></View>
        <TouchableOpacity style={styles.info}>
          <Text>{item.name}</Text>
          <Text>{item.phone}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ fontSize: 30 }}>
          <Feather
            name="phone"
            size={28}
            color={"rgb(0,145,255)"}
            padding={"10px"}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ fontSize: 30, marginLeft:20}}
          onPress={() => handleChatPress(item.phone)}
        >
          <Ionicons
            name="chatbubble-ellipses-outline"
            size={28}
            color={"rgb(0,145,255)"}
            padding={"10px"}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={friends}
      renderItem={renderItem}
      keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  userItem: {
    borderBottomWidth: 0,
    padding: 2,
    flexDirection: "row",
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  avatar: {
    width: 55,
    height: 55,
    padding: 15,
    borderRadius: 50,
    backgroundColor: "black",
  },
  info: {
    width:"40%",
    flexDirection: "column",
    justifyContent: "space-between",
    marginLeft: 15,
    marginRight: 70,
  },
});

export default FriendList;
