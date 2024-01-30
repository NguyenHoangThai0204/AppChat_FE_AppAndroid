import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { ArrowLeft } from 'react-native-feather';
import FirstScreen from "./FirstScreen.js";

function LoginScreen({navigation}) {
    const handleBackButton = () => {
        navigation.goBack();
      };
  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
       {/* Nút quay lại */}
       <TouchableOpacity style={styles.buttonBack} onPress={()=>navigation.navigate('FirstScreen')}>
          <ArrowLeft color="white" size={24} style={{marginLeft:10}} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Đăng nhập</Text>
      </View>

      {/* Phần nhập số điện thoại */}
      <TextInput
        style={styles.input}
        placeholder="Số điện thoại"
        keyboardType="phone-pad"
      />

      {/* Phần nhập mật khẩu */}
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        secureTextEntry={true}
      />

      {/* Nút "Lấy lại mật khẩu" */}
      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Quên mật khẩu?</Text>
      </TouchableOpacity>

      {/* Nút Đăng nhập */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Đăng nhập</Text>
      </TouchableOpacity>
    
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#28A0F7",
    paddingVertical: 10,
  },
  headerText: {
    color: "white",
    fontSize: 20,
    style:'bold',
    marginLeft: 10
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  forgotPassword: {
    alignSelf:'flex-start',
    margin: 20,
  },
  forgotPasswordText: {
    color: "#28A0F7",
    textDecorationLine: "underline",
  },
  loginButton: {
    backgroundColor: "#28A0F7",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    borderRadius: 5,
    marginTop: 20,
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default LoginScreen;
