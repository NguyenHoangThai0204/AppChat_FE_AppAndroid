import { useState } from "react";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
//  impot vào
import { postApiNoneToken } from "../../api/Callapi";
// form nhap ten
export default function SignupScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [birthday, setBirthday] = useState("");
  const [phone, setPhone] = useState("");

  // useEffect(() => {
  //   if (email && pass && confirm && name) {
  //     createAccount();
  //   }
  // }, [name,email, pass,confirm]);
  /// call api
  const createAccount = async () => {
    try {
      const response = await postApiNoneToken("/signup", {
        name: name,
        username: email,
        birthday: birthday,
        phone: phone,
        password: password,
        confirmPassword: confirm,
      });
      alert("Đăng ký thành công");
      navigation.navigate("FirstScreen"); // chuyen ve
    } catch (error) {
      console.error("error for signup", error);
    }
  };

  // check signup

  function checkSignup() {
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    checkEmail = reg.test(email);
    const regName = /^[a-zA-Z]+$/;
    checkName = regName.test(name);
    // pass tam thoi chua reg
    if (!checkName && !checkEmail) {
      alert("Email hoặc tên không hợp lệ");
    } else {
      createAccount();
    }
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, top: 20, width: "90%" }}>
        Nhập các thông tin cần thiết để đăng ký tài khoản
      </Text>
      
      <View style={{ top: 30, width: "90%" }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 20, flex: 3, alignItems:"center", display:"flex" }}>Tên</Text>
          <TextInput
            name="name"
            onChangeText={(text) => setName(text)}
            style={[styles.input, { flex: 7 }]}
            placeholder="Nhập tên"
          />
        </View>
      </View>

      <View style={{ top: 30, width: "90%" }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 20, flex: 3, alignItems:"center", display:"flex" }}>Email</Text>
          <TextInput
            style={[styles.input, { flex: 7 }]}
            onChangeText={(text) => setEmail(text)}
            placeholder="Nhập email"
          />
        </View>
      </View>

      <View style={{ top: 30, width: "90%" }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 20, flex: 3, alignItems:"center", display:"flex" }}>SDT</Text>
          <TextInput
            onChangeText={(text) => setPhone(text)}
            style={[styles.input, { flex: 7 }]}
            placeholder="Nhập số điện thoại"
          />
        </View>
      </View>

      <View style={{ top: 30, width: "90%" }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 20, flex: 3, alignItems:"center", display:"flex" }}>Mật khẩu</Text>
          <TextInput
            onChangeText={(text) => setPassword(text)}
            style={[styles.input, { flex: 7 }]}
            secureTextEntry={true}
            placeholder="Nhập mật khẩu"
          />
        </View>
      </View>

      <View style={{ top: 30, width: "90%" }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 20, flex: 3 , alignItems:"center", display:"flex"}}> Xác nhận </Text>
          <TextInput
            style={[styles.input, { flex: 7 }]}
            onChangeText={(text) => setConfirm(text)}
            secureTextEntry={true}
            placeholder="Nhập lại mật khẩu"
          />
        </View>
      </View>

      <TouchableOpacity onPress={createAccount} style={styles.next}>
        <View>
          <Text style={{ fontSize: 24 }}>Đăng ký</Text>
        </View>
      </TouchableOpacity>

      <View style={{ width: "80%" }}>
        <Text style={{ top: 300, fontSize: 22 }}>
          Tiếp tục nghĩa là bạn đồng ý với các điều khoản sử dụng NVV
        </Text>
      </View>
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
    margin: 8,
    fontSize: 22,
    outline: "none",
    overflow: "hidden",
    border: "none",
  },
  next: {
    top: 90,
    width: "60%",
    borderWidth: 1,
    backgroundColor: "#0099FF",
    alignItems: "center",
    height: 50,
    borderRadius: 15,
    justifyContent: "center",
  },
});
