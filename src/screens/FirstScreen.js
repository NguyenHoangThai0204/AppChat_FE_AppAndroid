import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import Swiper from "react-native-swiper";

function IntroductionSlide() {
  return (
    <Swiper autoplay duration={2000} loop>
      <View style={styles.slide}>
        <Text style={styles.textZaloo}>Zaloo</Text>
      </View>
      <View style={styles.slide}>
        <Text style={styles.textZaloo}>Zaloo</Text>
      </View>
      <View style={styles.slide}>
        <Text style={styles.textZaloo}>Zaloo</Text>
      </View>
      <View style={styles.slide}>
        <Text style={styles.textZaloo}>Zaloo</Text>
      </View>
      <View style={styles.slide}>
        <Text style={styles.textZaloo}>Zaloo</Text>
      </View>
    </Swiper>
  );
}

export default function FirstScreen({ navigation }) {
  return (
    <ImageBackground style={{height:'100%', width:'100%'}} source={require('../img/image_background.webp')} resizeMode='stretch'>
      <View style={styles.container}>
        {/* Slide giới thiệu ứng dụng */}
        <IntroductionSlide />

        {/* Phần nút Đăng nhập */}
        <TouchableOpacity
          onPress={() => navigation.navigate("LoginScreen")}
          style={styles.login}
        >
          <View>
            <Text style={{ fontSize: 20, color: "white" }}>Đăng nhập</Text>
          </View>
        </TouchableOpacity>

        {/* Phần nút Đăng ký */}
        <TouchableOpacity
          onPress={() => navigation.navigate("dangky")}
          style={styles.signup}
        >
          <View>
            <Text style={{ fontSize: 20, color: "black" }}>Đăng ký</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width:'100%',
    height:'100%',
    justifyContent: "flex-end", // Đưa nội dung xuống cuối màn hình
    paddingBottom: 50, // Khoảng cách bottom với cuối màn hình
  },
  login: {
    width: 200,
    borderColor: "white",
    backgroundColor: "#28A0F7",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
  },
  signup: {
    width: 200,
    borderColor: "white",
    backgroundColor: "#F7EEF7",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 20,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  textZaloo: {
    color: "#28A0F7",
    fontStyle: "italic",
    fontSize: 50,
    position: "absolute",
    top: 5,
  },
});
