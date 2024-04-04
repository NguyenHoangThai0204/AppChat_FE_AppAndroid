import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { TextInput } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/user/UserSelector";
import { useState } from "react";
import placeholder from "../../assets/user.png";
import * as ImagePicker from "expo-image-picker";
import { postApiNoneToken } from "../../api/Callapi";
import  uploadBase64ImageToS3  from "../";

const FormData = global.FormData;

export default function PersonalInformationScreen({ navigation }) {
  const handleSetting = () => {
    // Xử lý sự kiện khi người dùng nhấn vào icon Setting
    console.log("Pressed Setting");
  };
  const currentUser = useSelector(selectCurrentUser);
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
  const [nameValue, setNameValue] = useState(currentUser.name);
  const [uri, setUri] = useState(currentUser.avatar);
  const [aviOnly, setAviOnly] = useState(false);
  const [image, setImage] = useState(null);

  const onPress = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access camera roll is required!");
      return;
    }

    try {
      let result = {};
      result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      console.log(result);

      if (!result.canceled) {
        console.log("Image chọn là : " + result.assets[0].uri);
        alert(result.assets[0].uri);
        // Sử dụng hàm để chuyển đổi base64 và tải hình ảnh lên S3
        // const imageUrl = await uploadBase64ImageToS3(result.assets[0].uri);
        // console.log("Uploaded image URL:", imageUrl);
      }
    } catch (error) {
      console.log("Error picking image: ", error);
    }
  };

  const onButtonPress = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access camera roll is required!");
      return;
    }

    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled) {
        console.log("Image chọn là : " + result.assets[0].uri);
        alert(result.assets[0].uri);
        await saveImage(result.assets[0].uri);
      }
    } catch (error) {
      console.log("Error picking image: ", error);
    }
  };

  // const uploadImageFromCamera = async () => {
  //   try {
  //     await ImagePicker.requestCameraPermissionsAsync();
  //     let result = await ImagePicker.launchCameraAsync({
  //       cameraType: ImagePicker.CameraType.front,
  //       allowsEditing: true,
  //       aspect: [1, 1],
  //       quality: 1,
  //     });
  //     if (!result.canceled) {
  //       await saveImage(result.assets[0].uri);
  //     }

  //   } catch (error) {
  //     alert('Error uploading image: ', error.message);

  //   }
  // }

  const saveImage = async (url) => {
    try {
      const fileExtension = url.split(".").pop();
      console.log("fileExtension: ", fileExtension);

      // update display image
      setUri(url);

      // call api to upload image
      sendToBackend();
    } catch (error) {
      console.log("Error saving image: ", error);
    }
  };

  const removeImage = async () => {
    try {
      setUri(placeholder);
    } catch (error) {
      console.log("Error removing image: ", error);
    }
  };

  const sendToBackend = async () => {
    try {
      const formData = new FormData();
      formData.append("file", {
        uri: url,
        type: "image/jpeg", // Adjust the type based on your requirements
        name: "avatar.jpg",
      });

      const response = await postApiNoneToken("/uploadAvatar", formData);

      if (response.status === 403) {
        alert("Error sending image to backend: " + response.message);
      } else {
        const data = response.data;
        alert("Success sending image to backend: " + data.data.url);
        saveImage(data.data.url);
      }
    } catch (error) {
      console.error("Error sending image to backend: ", error);
    }
  };

  const handleSubmitChanges = () => {
    // Xử lý khi người dùng nhấn nút "Thay đổi"
    console.log("Submit Changes");
    // Thực hiện lưu thông tin đã chỉnh sửa
    sendToBackend();
  };

  return (
    <ScrollView style={styles.container}>
      {/* phần header */}
      <View style={styles.header}>
        <View style={styles.headerIconContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
            <AntDesign name="arrowleft" size={26} color={"#fff"} />
          </TouchableOpacity>
          <Text style={{ fontSize: 17, color: "white", alignItems: "center" }}>
            {" "}
            Chỉnh sửa thông tin cá nhân{" "}
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("FirstScreen")}>
          <Entypo name="log-out" size={30} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.touchInforAcc}>
        <TouchableOpacity onPress={onPress}>
          <Image
            source={uri ? { uri } : placeholder}
            style={[styles.avtImage]}
          />
          {
            <TouchableOpacity style={styles.editButton} onPress={onButtonPress}>
              <MaterialCommunityIcons
                name="camera-outline"
                size={30}
                color={"white"}
              />
            </TouchableOpacity>
          }
        </TouchableOpacity>
        <View>
          <Text style={{ fontSize: 22, color: "black" }}> {nameAcc}</Text>
        </View>
      </View>

      <View
        style={{
          padding: 10,
          marginTop: 20,
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
        <TextInput
          style={styles.nameAcc}
          editable={true}
          value={nameValue}
          onChangeText={setNameValue}
        ></TextInput>
      </View>
      <View
        style={{
          padding: 10,
          marginTop: 20,
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
        <TextInput
          style={styles.nameAcc}
          editable={true}
          value={genderValue}
          onChangeText={setGenderValue}
        ></TextInput>
      </View>
      <View
        style={{
          padding: 10,
          marginTop: 20,
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
        <TextInput
          style={styles.nameAcc}
          editable={true}
          value={dateOfBirthValue}
          onChangeText={setDateOfBirthValue}
        ></TextInput>
      </View>
      <View
        style={{
          padding: 10,
          marginTop: 20,
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
        <TextInput
          style={styles.nameAcc}
          editable={true}
          value={phoneValue}
          onChangeText={setPhoneValue}
        ></TextInput>
      </View>
      <View
        style={{
          padding: 10,
          marginTop: 20,
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
        <TextInput
          style={styles.nameAcc}
          editable={true}
          value={emailValue}
          onChangeText={setEmailValue}
        ></TextInput>
      </View>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleSubmitChanges}
      >
        <Text style={styles.submitButtonText}>Thay đổi</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgb(0,145,255)",
  },
  headerIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
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
    flexDirection: "column",
    height: "20%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  avtImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "black",
    marginTop: 10,
  },
  editButton: {
    position: "absolute",
    right: 5,
    bottom: 5,
    backgroundColor: "rgb(0,145,255)",
    borderRadius: 24,
    padding: 8,
  },
  nameAcc: {
    fontSize: 22,
    color: "black",
    fontStyle: "normal",
    marginLeft: 30,
    marginTop: 13,
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
    width: "90%",
    marginLeft: "5%",
    paddingLeft: 30,
  },
  submitButton: {
    backgroundColor: "rgb(0,145,255)",
    borderRadius: 15,
    padding: 10,
    marginTop: 20,
    width: "60%",
    marginBottom: "20%",
    alignItems: "center",
    marginHorizontal: "20%",
  },
  submitButtonText: {
    fontSize: 22,
    color: "white",
  },
});
