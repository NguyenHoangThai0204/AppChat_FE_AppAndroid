import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import HomeScreen from "./HomeScreen.js";
import { IoArrowBackOutline } from "react-icons/io5";
import { RiVideoAddFill } from "react-icons/ri";
import { IoIosCall } from "react-icons/io";
import {
  MdMenuOpen,
  MdOutlineSettingsVoice,
  MdOutlineTopic,
} from "react-icons/md";
import { SiIconify } from "react-icons/si";
import { PiDotsThreeOutlineLight } from "react-icons/pi";
import PersonalScreen from "./PersonalScreen.js";
import PersonalChoiceScreen from "./PersonalChoiceScreen.js";

export default function ChatsScreen({ route, navigation }) {
  const { name } = route.params;

  return (
    <View style={styles.container}>
      {/* Phần header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={{ fontSize: "23px", color: "white" }}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <IoArrowBackOutline />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "65%",
            fontSize: "20px",
            color: "white",
            flexDirection: "column",
          }}
          onPress={() => navigation.navigate("PersonalScreen", { name: name })}
        >
          <View style={styles.inputHeader}>
            {name}
            <p
              style={{
                fontSize: "15px",
                fontStyle: "italic",
                margin: 0,
                color:"black",
                padding: 0,
              }}
            >
              Hoạt động 15 phút trước
            </p>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ fontSize: 30, color: "white" }}>
          <IoIosCall style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={{ fontSize: 30, color: "white" }}>
          <RiVideoAddFill style={styles.icon} />
        </TouchableOpacity>
        {/* Phần menu cá nhân */}
        <TouchableOpacity
          style={{ fontSize: 30, color: "white" }}
          onPress={() => navigation.navigate("PersonalChoiceScreen",{name: name})}
        >
          <MdMenuOpen style={styles.icon}></MdMenuOpen>
        </TouchableOpacity>
      </View>
      <View></View>

      {/* Phần footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={{ fontSize: 23, color: "white" }}>
          <SiIconify />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ width: "55%", fontSize: 20, color: "white" }}
        >
          <TextInput
            style={styles.inputFooter}
            placeholder="Soạn tin nhắn"
            secureTextEntry={true}
          ></TextInput>
        </TouchableOpacity>
        <TouchableOpacity style={{ fontSize: 30, color: "white" }}>
          <MdOutlineSettingsVoice style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={{ fontSize: 30, color: "white" }}>
          <MdOutlineTopic style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={{ fontSize: 30, color: "white" }}>
          <PiDotsThreeOutlineLight style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: "1",
    backgroundColor: "black",
  },
  drawer: {
    position: "absolute",
    zIndex: 1,
    width: "80%", // Điều chỉnh kích thước Drawer theo ý muốn
    backgroundColor: "white", // Điều chỉnh màu sắc của Drawer theo ý muốn
  },
  footer: {
    width: "100%",
    position: "absolute",
    bottom: "0",
    flexDirection: "row",
    alignItems: "center",
    padding:"8px",
    justifyContent: "space-around",
    backgroundColor: "rgb(0,145,255)",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 1,
    justifyContent: "space-around",
    backgroundColor: "rgb(0,145,255)",
  },
  icon: {
    height: "23px",
    width: "23px",
    padding: "5px",
    color: "white",
  },
  inputHeader: {
    fontSize: 23,
    padding: "8px",
    borderWidth: 0, // Đặt giá trị của borderWidth là 0 để không hiển thị border
  },
  inputFooter: {
    fontSize: 20,
    color: "white",
    padding: 5,
  },
});
