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


function LoginScreen({ navigation }) {
  // call api để đăng nhập
  let [token, setToken] = useState('')
  const [email, setEmail] = useState('')
  const [pass,setPass]= useState('')

  const getToken = async () => {
    await postApiNoneToken('/login', {
      "username": email,
      "password": pass,
    }).then(res => {
      setToken(res.data.accessToken)
    }).catch(err => {
      console.log(err);
      setToken('no token')
    })
  }

  useEffect(() => {
      getToken()
      console.log(token);
  },[email,pass])

  // check login
  function login(){
    if(token!=null){
      alert(token)
      console.log(token)
      navigation.navigate('HomeScreen')
      // console.log(email)
      // console.log(pass)
    }
    else{
      alert(token)
      alert(pass)
    }
  }


  return (
    <View style={styles.container}>
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
      <View style={{ top: 40, width: "90%", justifyContent:"space-around" }}>
        <TextInput
          style={styles.input}
          placeholder="Số email"
          keyboardType="email-address"
          onChangeText={text=>setEmail(text)}
          value={email}
        />

        {/* Phần nhập mật khẩu */}
        <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          secureTextEntry={true}
          onChangeText={text=>setPass(text)}
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
