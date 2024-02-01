import {
    View,
    Text,
    FlatList,
    TextInput,
    TouchableOpacity,
    StyleSheet,
  } from "react-native";
  import { IoArrowBackOutline } from "react-icons/io5";
  import DiscoverScreen from "./DiscoverScreen";
  
  export default function DiscoverApp({ navigation }) {
    return (
      <View style={styles.container}>
        {/* Phần header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={{ fontSize: "30px", color: "white" }}
            onPress={() => navigation.navigate("DiscoverScreen")}
          >
            <IoArrowBackOutline />
          </TouchableOpacity>
          <TouchableOpacity style={{width:"55%", fontSize: "20px", color: "white" }}>
            <TextInput
              style={styles.inputHeader}
              placeholder="Tìm kiếm"
            ></TextInput>
          </TouchableOpacity>
        </View>
        <View></View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: "1",
      backgroundColor: "black",
    },
    header: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      padding: "5px",
      justifyContent: "space-around",
      backgroundColor: "rgb(0,145,255)",
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
  });
  