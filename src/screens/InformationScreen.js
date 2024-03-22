import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import { TextInput } from "react-native-gesture-handler";
import { IoSettingsOutline } from "react-icons/io5";
import { IoWalletOutline } from "react-icons/io5";
import { CiMusicNote1 } from "react-icons/ci";
import { CiCloudOn } from "react-icons/ci";
import { MdIncompleteCircle } from "react-icons/md";
import { MdSecurity } from "react-icons/md";
import { GrSecure } from "react-icons/gr";
import { MdKeyboardArrowRight } from "react-icons/md";

import { AntDesign } from '@expo/vector-icons';

export default function InformationScreen({navigation}) {
  const handleSetting = () => {
    // Xử lý sự kiện khi người dùng nhấn vào icon Setting
    console.log("Pressed Setting");
  };
  const nameAcc = "Chủ tài khoản";
  return (
    <View style={styles.container}>
      {/* phần header */}
      <View style={styles.header}>
        <PiMagnifyingGlassLight
          style={styles.iconHeader}
        ></PiMagnifyingGlassLight>
        <TextInput style={styles.inputHeader} placeholder="Tìm kiếm" />
        <TouchableOpacity onPress={handleSetting}>
          <AntDesign name="setting" size={30} color={"white"} paddingTop={10} />
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
        <CiMusicNote1 style={styles.icon}></CiMusicNote1>
        <View>
          <Text style={styles.nameAcc}>Nhạc chờ Zaloo</Text>
          <Text style={{ fontSize: 15, fontStyle: "normal", color: "grey" }}>
            {" "}
            Đăng ký nhạc chờ, thể hiện cá tính
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchOther}>
        <IoWalletOutline style={styles.icon}></IoWalletOutline>
        <View>
          <Text style={styles.nameAcc}>Ví QR</Text>
          <Text style={{ fontSize: 15, fontStyle: "normal", color: "grey" }}>
            {" "}
            Lưu trữ và xuất trình các mã QR quan trọng
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchOther}>
        <CiCloudOn style={styles.icon}></CiCloudOn>
        <View>
          <Text style={styles.nameAcc}>Cloud của tôi</Text>
          <Text style={{ fontSize: 15, fontStyle: "normal", color: "grey" }}>
            {" "}
            Lưu trữ đám mây tiện ích
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchOther}>
        <MdIncompleteCircle style={styles.icon}></MdIncompleteCircle>
        <View>
          <Text style={styles.nameAcc}>Dung lượng và dữ liệu</Text>
          <Text style={{ fontSize: 15, fontStyle: "normal", color: "grey" }}>
            {" "}
            Quản lý dữ liệu của bạn
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchOther}>
        <MdSecurity style={styles.icon}></MdSecurity>
        <Text style={styles.nameAcc}>Tài khoản và bảo mật</Text>
        <MdKeyboardArrowRight
          style={{
            color: "gray",
            height: "30px",
            width: "30px",
            paddingLeft: 60,
            paddingTop: 10,
          }}
        ></MdKeyboardArrowRight>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchOther}>
        <GrSecure style={styles.icon}></GrSecure>
        <Text style={styles.nameAcc}>Quyền riêng tư</Text>
        <MdKeyboardArrowRight
          style={{
            color: "gray",
            height: "30px",
            width: "30px",
            paddingLeft: 120,
            paddingTop: 10,
          }}
        ></MdKeyboardArrowRight>
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
    justifyContent: "space-around",
    backgroundColor: "rgb(0,145,255)",
  },
  inputHeader: {
    fontSize: 20,
    color: "white",
    padding: 10,
    borderWidth: 0,
    opacity: 0.8,
  },
  iconHeader: {
    height: "30px",
    width: "30px",
    padding: 10,
    color: "white",
  },
  touchInforAcc: {
    flexDirection: "row",
    height: 85,
    backgroundColor: "white",
  },
  avtImage: {
    width: "60px",
    height: "60px",
    margin: 15,
    borderRadius: 50,
    backgroundColor: "black",
  },
  nameAcc: {
    fontSize: 22,
    color: "black",
    fontStyle: "bold",
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
    height: "30px",
    width: "30px",
    padding: 10,
    color: "rgb(0,145,255)",
  },
});
