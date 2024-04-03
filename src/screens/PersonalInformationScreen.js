import React, { useState } from "react";
import { TouchableOpacity, TextInput, Text } from "react-native";
import { View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/user/UserSelector";
import { Dimensions } from 'react-native';


export default function PersonalInformationScreen({ navigation }) {
  const currentUser = useSelector(selectCurrentUser);
  const nameAcc = currentUser.name;


  // Định dạng ngày sinh 
  const formattedDateOfBirth = new Date(
    currentUser.dateOfBirth
  ).toLocaleDateString();

  const [editName, setEditName] = useState(false);
  const [editGender, setEditGender] = useState(false);
  const [editPhone, setEditPhone] = useState(false);
  const [editDateOfBirth, setEditDateOfBirth] = useState(false);
  const [nameValue, setNameValue] = useState(currentUser.name);
  const [genderValue, setGenderValue] = useState(
    currentUser.gender ? "Nam" : "Nữ"
  );
  const [phoneValue, setPhoneValue] = useState(currentUser.phone);
  const [dateOfBirthValue, setDateOfBirthValue] =
    useState(formattedDateOfBirth);

  const handleEdit = (fieldName) => {
    // Xử lý logic chỉnh sửa thông tin cá nhân ứng với fieldName
    switch (fieldName) {
      case "name":
        setEditName(true);
        break;
      case "gender":
        setEditGender(true);
        break;
      case "phone":
        setEditPhone(true);
        break;
      case "dateOfBirth":
        setEditDateOfBirth(true);
        break;
      default:
        break;
    }
  };

  const handleSave = (fieldName) => {
    // Xử lý logic lưu thông tin chỉnh sửa ứng với fieldName
    switch (fieldName) {
      case "name":
        setEditName(false);
        break;
      case "gender":
        setEditGender(false);
        break;
      case "phone":
        setEditPhone(false);
        break;
      case "dateOfBirth":
        setEditDateOfBirth(false);
        break;
      default:
        break;
    }
  };

  return (
    <View style={style.container}>
      <View style={style.header}>
        <View style={style.headerIconContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
            <AntDesign name="arrowleft" size={26} color={"#fff"} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.coverImage}></View>
      <View style={style.content}>
        <TouchableOpacity style={style.avatarAcc}></TouchableOpacity>
        <Text style={style.nameAcc}>{nameAcc}</Text>
        <Text style={style.headerInformation}>Thông tin cá nhân</Text>

        <View style={style.userInfo}>
          <Text style={style.userInfoTitle}>Họ và tên:</Text>
          <TextInput
            style={style.userInfoText}
            editable={editName}
            value={nameValue}
            onChangeText={setNameValue}
          />
          {editName ? (
            <TouchableOpacity onPress={() => handleSave("name")}>
              <AntDesign name="checkcircle" size={20} color={"#000"} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => handleEdit("name")}>
              <AntDesign name="edit" size={20} color={"#000"} />
            </TouchableOpacity>
          )}
        </View>

        <View style={style.userInfo}>
          <Text style={style.userInfoTitle}>Giới tính:</Text>
          <TextInput
            style={style.userInfoText}
            editable={editGender}
            value={genderValue}
            onChangeText={setGenderValue}
          />
          {editGender ? (
            <TouchableOpacity onPress={() => handleSave("gender")}>
              <AntDesign name="checkcircle" size={30} color={"#000"} pad />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => handleEdit("gender")}>
              <AntDesign name="edit" size={30} color={"#000"} />
            </TouchableOpacity>
          )}
        </View>
        <View style={style.userInfo}>
          <Text style={style.userInfoTitle}>Ngày sinh:</Text>
          <TextInput
            style={style.userInfoText}
            editable={editDateOfBirth}
            value={dateOfBirthValue}
            onChangeText={setDateOfBirthValue}
          />
          {editDateOfBirth ? (
            <TouchableOpacity onPress={() => handleSave("dateOfBirth")}>
              <AntDesign name="checkcircle" size={20} color={"#000"} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => handleEdit("dateOfBirth")}>
              <AntDesign name="edit" size={20} color={"#000"} />
            </TouchableOpacity>
          )}
        </View>
        <View style={style.userInfo}>
          <Text style={style.userInfoTitle}>Số điện thoại:</Text>
          <TextInput
            style={style.userInfoText}
            editable={editPhone}
            value={phoneValue}
            onChangeText={setPhoneValue}
          />
          {editPhone ? (
            <TouchableOpacity onPress={() => handleSave("phone")}>
              <AntDesign name="checkcircle" size={20} color={"#000"} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => handleEdit("phone")}>
              <AntDesign name="edit" size={20} color={"#000"} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    top: 20,
    height: 65,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgb(0,145,255)",
    padding:20,
    marginBottom: 20,
  },
  headerIconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  coverImage: {
    height: "25%",
    backgroundColor: "yellow",
  },
  content: {
    position: "relative",
    flex: 1,
  },
  avatarAcc: {
    width: 130,
    height: 130,
    borderRadius: 70,
    backgroundColor: "black",
    position: "absolute",
    left: "85%",
    top: "27%",
    transform: [{ translateX: -0.5 * Dimensions.get("window").width }, { translateY: -0.5 * Dimensions.get("window").width}],
  },
  nameAcc: {
    color: "black",
    fontSize: 30,
    width: "100%",
    textAlign: "center",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: [{ translateX: -0.5 * Dimensions.get("window").width }, { translateY: -0.5 * Dimensions.get("window").width}],
  },
  headerInformation: {
    color: "black",
    fontSize: 24,
    width: "100%",
    textAlign: "center",
    marginTop: "40%",
  },
  viewInfo: {
    flexDirection: "column",
    alignItems: "baseline",
    marginTop: 10,
    marginLeft: "10%",
    paddingVertical: 10,
  },
  userInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginLeft: "10%",
    marginRight: "10%",
  },
  userInfoTitle: {
    fontSize: 20,
    color: "black",
  },
  userInfoText: {
    fontSize: 20,
    color: "gray",
    flex: 1,
    padding: 5,
  },
});
