import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { TextInput } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/UserSelector';

export default function InformationScreen({navigation}) {
  const handleSetting = () => {
    // Xử lý sự kiện khi người dùng nhấn vào icon Setting
    console.log("Pressed Setting");
  };
  const currentUser = useSelector(selectCurrentUser);
  const nameAcc = currentUser.name;
  return (
    <View style={styles.container}>
      {/* phần header */}
      <View style={styles.header}>
        <View style={styles.headerIconContainer}>
        <MaterialIcons name="search" size={30} color={"white"} padding={"5px"} />
          <TextInput style={styles.inputHeader} placeholder="Tìm kiếm" />
        </View>
        <TouchableOpacity onPress={()=> navigation.navigate("FirstScreen")}>
          <Entypo name="log-out" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.touchInforAcc} onPress={() => navigation.navigate("PersonalInformationScreen")}>
        <Image style={styles.avtImage}></Image>
        <View>
            <Text style={styles.nameAcc}>{nameAcc}</Text>
            <Text style={{ fontSize: 15, fontStyle: "italic", color: "grey" }}>
              {" "}
              Xem trang cá nhân
            </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchOther}>
        <FontAwesome6 name="music" size={30} color={"white"} padding={"5px"}></FontAwesome6>
        <View>
          <Text style={styles.nameAcc}>Nhạc chờ Zaloo</Text>
          <Text style={{ fontSize: 15, fontStyle: "normal", color: "grey" }}>
            {" "}
            Đăng ký nhạc chờ, thể hiện cá tính
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchOther}>
        <Entypo name="wallet" size={30} color={"white"} padding={"5px"}></Entypo>
        <View>
          <Text style={styles.nameAcc}>Ví QR</Text>
          <Text style={{ fontSize: 15, fontStyle: "normal", color: "grey" }}>
            {" "}
            Lưu trữ và xuất trình các mã QR quan trọng
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchOther}>
       <Entypo name="cloud" size={30} color={"white"} padding={"5px"}></Entypo>
        <View>
          <Text style={styles.nameAcc}>Cloud của tôi</Text>
          <Text style={{ fontSize: 15, fontStyle: "normal", color: "grey" }}>
            {" "}
            Lưu trữ đám mây tiện ích
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchOther}>
        <MaterialCommunityIcons name="circle-slice-5" size={30} color={"white"} padding={"5px"}></MaterialCommunityIcons>
        <View>
          <Text style={styles.nameAcc}>Dung lượng và dữ liệu</Text>
          <Text style={{ fontSize: 15, fontStyle: "normal", color: "grey" }}>
            {" "}
            Quản lý dữ liệu của bạn
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchOther}>
        <MaterialCommunityIcons name="security" size={30} color={"white"} padding={"5px"}></MaterialCommunityIcons>
        <Text style={styles.nameAcc}>Tài khoản và bảo mật</Text>
        <SimpleLineIcons name="arrow-right" size={30} color={"gray"} paddingLeft= {60}  paddingTop= {10}></SimpleLineIcons>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchOther}>
        <MaterialIcons name="privacy-tip" size={30} color={"white"} padding={"5px"}></MaterialIcons>
        <Text style={styles.nameAcc}>Quyền riêng tư</Text>
        <SimpleLineIcons name="arrow-right" size={30} color={"gray"} paddingLeft= {60}  paddingTop= {10}></SimpleLineIcons>
      </TouchableOpacity>
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
});
