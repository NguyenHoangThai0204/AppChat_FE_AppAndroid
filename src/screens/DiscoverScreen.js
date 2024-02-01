import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  FlatList,
  Image
} from "react-native";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import { FaQrcode } from "react-icons/fa";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { TextInput } from "react-native-gesture-handler";
import { CiGrid41 } from "react-icons/ci";
import DiscoverApp from "./DiscoverApp";

export default function DiscoverScreen({navigation}) {
  const miniApps = [
    {
      id: "1",
      name: "Zaloo Game",
      icon: "../assets/miniApp1.png",
      url: "https://zaloweb.me/",
    },
    {
      id: "2",
      name: "Zaloo Pay",
      icon: "../assets/miniApp1.png",
      url: "https://zaloweb.me/",
    },
    {
      id: "3",
      name: "Zaloo Video",
      icon: "../assets/miniApp1.png",
      url: "https://zaloweb.me/",
    },
    {
      id: "4",
      name: "Fizza",
      icon: "../assets/miniApp1.png",
      url: "https://zaloweb.me/",
    },
    {
      id: "5",
      name: "Tìm Việc",
      icon: "../assets/miniApp1.png",
      url: "https://zaloweb.me/",
    },
    {
      id: "6",
      name: "Nạp đt",
      icon: "../assets/miniApp1.png",
      url: "https://zaloweb.me/",
    }
    // Thêm thông tin người dùng khác nếu cần
  ];
  const handleEditMiniApp = () => {
    // Xử lý sự kiện khi người dùng nhấn vào "Chỉnh sửa" ở tab Mini App yêu thích
    console.log("Pressed Chỉnh sửa");
  };
  // render mini app
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate("DiscoverApp")}>
      <View style={styles.appItem}>
        <Image
          source={{ uri:item?.icon }}
          style={styles.iconApp}
        />
        <View style={styles.nameApp}>
          <Text style={{ fontSize: "18px" }}>{item.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* phần header */}
      <View style={styles.header}>
        <PiMagnifyingGlassLight
          style={styles.iconHeader}
        ></PiMagnifyingGlassLight>
        <TextInput style={styles.inputHeader} placeholder="Tìm kiếm" />
        <FaQrcode style={styles.icon} />
      </View>
      {/* Tab Zalo Video */}
      <View style={{ alignItems: "center", margin: 10 }}>
        <TouchableOpacity style={styles.tabVideo}>
          <MdOutlineVideoLibrary style={styles.icon} />
          <Text style={styles.text}>Zaloo Video</Text>
          <MdKeyboardArrowRight
            style={{
              color: "gray",
              height: "30px",
              width: "30px",
              marginLeft: "35%",
            }}
          ></MdKeyboardArrowRight>
        </TouchableOpacity>
      </View>
      {/* {Tab Mini app} */}
      {/* header */}
      <View style={styles.tabVideo}>
        <CiGrid41 style={styles.icon} />
        <Text style={styles.text}>Mini App Yêu thích</Text>
        <TouchableOpacity onPress={handleEditMiniApp}>
          <Text style={{ fontSize: 15, fontStyle: "normal" }}>Chỉnh sửa</Text>
        </TouchableOpacity>
      </View>
        {/* danh sách mini app */}
        <View style={styles.tabMiniApp}>
        <FlatList
          data={miniApps}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={true}
          numColumns={3}
        />
        </View>
            {/* Tab Zalo Video */}
      <View style={{ alignItems: "center", paddingTop:10}}>
        <TouchableOpacity style={styles.tabVideo}>
          <MdOutlineVideoLibrary style={styles.icon} />
          <Text style={styles.text}>Zaloo Video</Text>
          <Text style={{ fontSize: 15, fontStyle: "normal" }}>Gợi ý cho bạn</Text>
          <MdKeyboardArrowRight
            style={{
              color: "gray",
              height: "30px",
              width: "30px",
              marginLeft: 10
            }}
          ></MdKeyboardArrowRight>
        </TouchableOpacity>
        <View>
          
        </View>
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
    paddingVertical: 10,
  },
  iconHeader: {
    height: "30px",
    width: "30px",
    padding: "5px",
    color: "white",
  },
  inputHeader: {
    fontSize: 20,
    color: "white",
    padding: 10,
    borderWidth: 0,
    opacity: 0.8,
  },
  icon: {
    height: "30px",
    width: "30px",
    color: "#00FFFF",
  },
  text: {
    fontSize: 24,
    fontFamily: "outfit-medium",
    color: "black",
  },
  tabVideo: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderWidth: 0,
    backgroundColor: "white",
  },
  tabMiniApp: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems:"center",
    borderWidth: 0,
    backgroundColor: "white",
  },
  appItem: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: 20,
    marginVertical: 10,
    
  },
  iconApp: {
    width: "75px",
    height: "75px",
    padding: "15px",
    borderRadius: 50,
  },
  nameApp: {},
});
