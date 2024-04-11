import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { TextInput } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from "../../redux_stores/userSlide";
import { useState } from "react";
import placeholder from "../../assets/user.png";
import { postApiNoneToken } from "../../api/Callapi";



export default function InformationScreen({ navigation }) {
  const handleSetting = () => {
    // Xử lý sự kiện khi người dùng nhấn vào icon Setting
    console.log("Pressed Setting");
  };
  const currentUser = useSelector((state) => state.user.currentUser);
  const nameAcc = currentUser.name;
  const [genderValue, setGenderValue] = useState(
    currentUser.gender ? "Nam" : "Nữ"
  );
  // Định dạng ngày sinh
  const formattedDateOfBirth = new Date(
    currentUser.dateOfBirth
  ).toLocaleDateString();
  const [dateOfBirthValue, setDateOfBirthValue] =
    useState(formattedDateOfBirth);
  const [phoneValue, setPhoneValue] = useState(currentUser.phone);
  const [emailValue, setEmailValue] = useState(currentUser.username);
  const [uri, setUri] = useState(currentUser.avatar);
  const dispatch = useDispatch();

  const onPressLogout = () => {
    const logout = async () => {
      try {
        const response = await postApiNoneToken("/logout");
        console.log("Logout response: ", response.data);
        if (response.data.status == "OK") {
          navigation.navigate("FirstScreen");
        }
      } catch (error) {
        console.error("Error logging out: ", error);
      }
    }
    logout();
  }

  return (
    <View style={styles.container}>
      {/* phần header */}
      <View style={styles.header}>
        <View style={styles.headerIconContainer}>
          <MaterialIcons
            name="search"
            size={30}
            color={"white"}
            padding={"5px"}
          />
          <TextInput style={styles.inputHeader} placeholder="Tìm kiếm" />
        </View>
        <TouchableOpacity onPress={onPressLogout}>
          <Text></Text>
          <Entypo name="log-out" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.touchInforAcc}
        onPress={() => navigation.navigate("PersonalInformationScreen")}
      >
        <Image source={uri ? { uri } : placeholder} style={styles.avtImage}></Image>
        <View>
          <Text style={styles.nameAcc}>{nameAcc}</Text>
          <Text style={{ fontSize: 15, fontStyle: "italic", color: "grey" }}>
            {" "}
            Chỉnh sửa trang cá nhân
          </Text>
        </View>
      </TouchableOpacity>


      <View
        style={{
          padding: 10,
          marginTop:20,
          flexDirection: "column",
          justifyContent: "flex-start",
          backgroundColor: "white",
        }}
      >
        <Text
          style={{
            fontSize: 15,
            fontStyle: "normal",
            color: "grey",
            marginHorizontal: 20,
          }}
        >
          {" "}
          Họ và tên:
        </Text>
      </View>
        <View style={styles.info}>
          <FontAwesome6
            name="music"
            size={30}
            color={"grey"}
            padding={"8px"}
          ></FontAwesome6>
          <Text style={styles.nameAcc}>{nameAcc}</Text>
        </View>


        <View
        style={{
          padding: 10,
          marginTop:20,
          flexDirection: "column",
          justifyContent: "flex-start",
          backgroundColor: "white",
        }}
      >
        <Text
          style={{
            fontSize: 15,
            fontStyle: "normal",
            color: "grey",
            marginHorizontal: 20,
          }}
        >
          {" "}
          Giới tính:
        </Text>
      </View>
        <View style={styles.info}>
          <FontAwesome6
            name="music"
            size={30}
            color={"grey"}
            padding={"8px"}
          ></FontAwesome6>
          <Text style={styles.nameAcc}>{genderValue}</Text>
        </View>

        <View
        style={{
          padding: 10,
          marginTop:20,
          flexDirection: "column",
          justifyContent: "flex-start",
          backgroundColor: "white",
        }}
      >
        <Text
          style={{
            fontSize: 15,
            fontStyle: "normal",
            color: "grey",
            marginHorizontal: 20,
          }}
        >
          {" "}
          Ngày tháng năm sinh:
        </Text>
      </View>
        <View style={styles.info}>
          <FontAwesome6
            name="music"
            size={30}
            color={"grey"}
            padding={"8px"}
          ></FontAwesome6>
          <Text style={styles.nameAcc}>{dateOfBirthValue}</Text>
        </View>

        <View
        style={{
          padding: 10,
          marginTop:20,
          flexDirection: "column",
          justifyContent: "flex-start",
          backgroundColor: "white",
        }}
      >
        <Text
          style={{
            fontSize: 15,
            fontStyle: "normal",
            color: "grey",
            marginHorizontal: 20,
          }}
        >
          {" "}
          Số điện thoại:
        </Text>
      </View>
        <View style={styles.info}>
          <FontAwesome6
            name="music"
            size={30}
            color={"grey"}
            padding={"8px"}
          ></FontAwesome6>
          <Text style={styles.nameAcc}>{phoneValue}</Text>
        </View>


        <View
        style={{
          padding: 10,
          marginTop:20,
          flexDirection: "column",
          justifyContent: "flex-start",
          backgroundColor: "white",
        }}
      >
        <Text
          style={{
            fontSize: 15,
            fontStyle: "normal",
            color: "grey",
            marginHorizontal: 20,
          }}
        >
          {" "}
          Email:
        </Text>
      </View>
        <View style={styles.info}>
          <FontAwesome6
            name="music"
            size={30}
            color={"grey"}
            padding={"8px"}
          ></FontAwesome6>
          <Text style={styles.nameAcc}>{emailValue}</Text>
        </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgb(0,145,255)",
  },
  headerIconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputHeader: {
    fontSize: 20,
    color: "white",
    padding: 10,
    borderWidth: 0,
    opacity: 0.8,
  },
  iconHeader: {
    height: 30,
    width: 30,
    padding: 10,
    color: "white",
  },
  touchInforAcc: {
    flexDirection: "row",
    height: 85,
    backgroundColor: "white",
  },
  avtImage: {
    width: 60,
    height: 60,
    margin: 15,
    borderRadius: 50,
    backgroundColor: "black",
  },
  nameAcc: {
    fontSize: 22,
    color: "black",
    fontStyle: "normal",
    marginLeft: 30,
    marginTop: 10,
    marginBottom: 5,
  },
  touchOther: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "white",
  },
  icon: {
    height: 30,
    width: 30,
    padding: 10,
    color: "rgb(0,145,255)",
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D3E3FD",
    borderRadius: 15,
    borderWidth: 0,
    borderColor: "white",
    width:"90%",
    marginLeft:"5%",
    paddingLeft: 30,
  },
});
