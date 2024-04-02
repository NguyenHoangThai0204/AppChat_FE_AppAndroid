import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
// import api
import { postApiNoneToken } from "../../api/Callapi";
// import use state
import { useState, useEffect } from "react";
import { setCurrentUser } from "../../redux/user/UserActions";
import { useDispatch } from 'react-redux';
import CustomAlert from "../components/CustomAlert";

function LoginScreen({ navigation }) {
  // call api để đăng nhập
  let [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [fetchingToken, setFetchingToken] = useState(false);
  const dispatch = useDispatch();
  const [textMessage, setTextMessage] = useState([]);

  // Thêm thông báo vào mảng textMessage
  const addMessage = (message) => {
    setTextMessage((prevMessages) => [...prevMessages, message]);
  };

  // login
  const login = async () => {
    if (fetchingToken) {
      addMessage("Đang xác thực...");
    } else {
      try {
        setFetchingToken(true);
        const response = await postApiNoneToken("/login", {
          username: email,
          password: pass,
        });
        setFetchingToken(false);
        if (response.data.status === 'ERR') {
          // Phản hồi từ backend cho biết có lỗi xảy ra
          addMessage("Đăng nhập không thành công: " + response.data.message);
        } else if (response.data.userLogin) {
          // Phản hồi từ backend cho biết đăng nhập thành công
          addMessage(response.data.userLogin.name + " đã đăng nhập thành công");
          //lấy thông tin người dùng và dispatch action để cập nhật trạng thái
          const user = response.data.userLogin;
          dispatch(setCurrentUser(user));
          navigation.navigate("HomeScreen");
        } else {
          // Phản hồi từ backend không chứa userLogin
          addMessage("Tài khoản không tồn tại");
        }
      } catch (error) {
        console.error("Error while login:", error);
        addMessage("Đã xảy ra lỗi khi đăng nhập");
        setFetchingToken(false);
      }
    }
  };
  

  return (
    <View style={styles.container}>
      {textMessage.map((message, index) => (
        <CustomAlert key={index} message={message} />
      ))}
      <View
        style={{
          top: 20,
          height: 60,
          width: "100%",
          backgroundColor: "#0099FF",
          flexDirection: "row",
          padding: 15,
        }}
      >
        {/* Phần tiêu đề */}
        <TouchableOpacity onPress={() => navigation.navigate("FirstScreen")}>
          <AntDesign name="arrowleft" size={24} color={"#fff"} />
        </TouchableOpacity>

        <Text
          style={{
            paddingLeft: 10,
            fontSize: 24,
            width: "90%",
            color: "white",
          }}
        >
          Đăng nhập
        </Text>
      </View>

      {/* Phần nhập số điện thoại */}
      <View style={{ top: 40, width: "90%", justifyContent: "space-around" }}>
        <TextInput
          style={styles.input}
          placeholder="Số email"
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />

        {/* Phần nhập mật khẩu */}
        <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          secureTextEntry={true}
          onChangeText={(text) => setPass(text)}
          value={pass}
        />
        <TouchableOpacity
          style={styles.forgotPassword}
          onPress={() => navigation.navigate("ForgotPasswordScreen")}
        >
          <Text style={styles.forgotPasswordText}>Quên mật khẩu?</Text>
        </TouchableOpacity>
      </View>

      {/* Nút "Lấy lại mật khẩu" */}

      {/* Nút Đăng nhập */}
      <TouchableOpacity
        // onPress={() => navigation.navigate("HomeScreen")}
        onPress={login}
        style={styles.loginButton}
      >
        <Text style={styles.loginButtonText}>Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#28A0F7",
    borderRadius: 15,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  forgotPassword: {
    marginLeft: 15,
    marginTop: 20,
  },
  forgotPasswordText: {
    color: "#28A0F7",
    textDecorationLine: "underline",
  },
  loginButton: {
    top: 100,
    backgroundColor: "#28A0F7",
    alignItems: "center",
    justifyContent: "center",
    width: "60%",
    height: 50,
    borderRadius: 15,
    justifyContent: "center",
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default LoginScreen;
