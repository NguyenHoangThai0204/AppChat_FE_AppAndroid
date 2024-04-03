import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import CustomAlert from "../components/CustomAlert";

//  impot
import { postApiNoneToken } from "../../api/Callapi";
// form nhap ten
export default function SignupScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [dateOfBirth, setDayOfBirth] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState(false); // false la nu, true la nam
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [textMessage, setTextMessage] = useState([]);

  const handleDayChange = (itemValue) => {
    setDay(itemValue);
  };

  const handleMonthChange = (itemValue) => {
    setMonth(itemValue);
  };

  const handleYearChange = (itemValue) => {
    setYear(itemValue);
  };

  // Thêm thông báo vào mảng textMessage
  const addMessage = (message) => {
    setTextMessage((prevMessages) => [...prevMessages, message]);
  };

  const RadioButton = ({ value, selected, onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.radioButton}>
      {selected && <View style={styles.radioButtonSelected} />}
    </TouchableOpacity>
  );

  const createAccount = async () => {
    try {
      const selectedDate = new Date(year, month - 1, day);
      const response = await postApiNoneToken("/signup", {
        name: name,
        username: email,
        gender: gender,
        // dateOfBirth: dateOfBirth,
        dateOfBirth: selectedDate,
        phone: phone,
        password: password,
        confirmPassword: confirm,
      });
      if (response.data.status === "ERR") {
        addMessage("Đăng ký thất bại " + response.data.message);
        return;
      } else {
        addMessage("Đăng ký thành công " + response.data.message);
        addMessage("Tài khoản mới" + response.data.data.name + "đã được tạo");
        navigation.navigate("FirstScreen"); // chuyen ve
      }
    } catch (error) {
      console.error("error for signup", error);
      addMessage("Đã xảy ra lỗi khi đăng ký");
    }
  };

  function checkAge() {
    const selectedDate = new Date(year, month - 1, day);
    setDayOfBirth(selectedDate);
    const today = new Date();
    let age = today.getFullYear() - selectedDate.getFullYear(); 
    const monthCheck = today.getMonth() - selectedDate.getMonth();
    if (
      monthCheck < 0 ||
      (monthCheck === 0 && today.getDate() < selectedDate.getDate())
    ) {
      age--;
    }
    return age;
  }

  // check signup

  function checkSignup() {
    const regPhone = /^\d{10,}$/;
    const regMail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const regName = /^[a-zA-Z]+$/;
    const regPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
    checkEmail = regMail.test(email);
    checkNamein = regName.test(name);
    checkPhone = regPhone.test(phone);
    checkPass = regPass.test(password);
    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      password === "" ||
      confirm === "" ||
      day === "" ||
      month === "" ||
      year === ""
    ) {
      addMessage("Vui lòng nhập đầy đủ thông tin");
    } else if (!checkNamein) {
      addMessage("Tên không hợp lệ phải là chữ cái");
    } else if (gender === "") {
      addMessage("Vui lòng chọn giới tính");
    } else if (!checkEmail) {
      addMessage("Email không hợp lệ");
    } else if (!checkPhone) {
      addMessage("Số điện thoại không hợp lệ phải là số và có ít nhất 10 số");
    } else if (!checkPass) {
      addMessage(
        "Mật khẩu không hợp lệ phải có ít nhất 8 ký tự, 1 chữ số, 1 chữ hoa, 1 ký tự đặc biệt"
      );
    } else if (!checkNamein && !checkEmail && !checkPhone) {
      addMessage("Email hoặc tên hoặc sđt hoặc  không hợp lệ");
    } else {
      const age = checkAge();
      if (age < 18) {
        addMessage("Tuổi phải lớn hơn 18");
      } else {
        createAccount();
      }
    }
  }

  return (
    <View style={styles.container}>
      {textMessage.map((mess, index) => (
        <CustomAlert key={index} message={mess} />
      ))}
      <Text style={{ fontSize: 20, top: 20, width: "90%" }}>
        Nhập các thông tin cần thiết để đăng ký tài khoản
      </Text>

      <View style={{ top: 30, width: "90%" }}>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 20,
              flex: 3,
              alignItems: "center",
              display: "flex",
            }}
          >
            Tên
          </Text>
          <TextInput
            name="name"
            onChangeText={(text) => setName(text)}
            style={[styles.input, { flex: 7 }]}
            placeholder="Nhập tên"
          />
        </View>
      </View>

      <View style={{ top: 30, width: "90%" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              fontSize: 20,
              flex: 3,
              alignItems: "center",
              display: "flex",
            }}
          >
            Giới tính
          </Text>
          <View style={{ flexDirection: "row", flex: 7, marginLeft: 20 }}>
            <RadioButton
              value="Nam"
              selected={gender === true}
              onPress={() => setGender(true)}
            />
            <Text style={{ fontSize: 18, marginRight: 10 }}>Nam</Text>

            <RadioButton
              value="Nữ"
              selected={gender === false}
              onPress={() => setGender(false)}
            />
            <Text style={{ fontSize: 18 }}>Nữ</Text>
          </View>
        </View>
      </View>

      <View style={{ top: 30, width: "90%" }}>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 20,
              flex: 3,
              alignItems: "center",
              display: "flex",
            }}
          >
            Email
          </Text>
          <TextInput
            style={[styles.input, { flex: 7 }]}
            onChangeText={(text) => setEmail(text)}
            placeholder="Nhập email"
          />
        </View>
      </View>

      <View style={{ top: 30, width: "90%" }}>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 20,
              flex: 3,
              alignItems: "center",
              display: "flex",
            }}
          >
            SĐT
          </Text>
          <TextInput
            onChangeText={(text) => setPhone(text)}
            style={[styles.input, { flex: 7 }]}
            placeholder="Nhập số điện thoại"
          />
        </View>
      </View>

      <View style={{ top: 30, width: "90%" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontSize: 20, flex: 6 }}>Ngày sinh:</Text>
          <Picker
            style={[styles.input, { flex: 1 }]}
            selectedValue={day}
            onValueChange={(itemValue) => handleDayChange(itemValue)}
          >
            <Picker.Item label="Ngày" value="" />
            {Array.from({ length: 31 }, (_, index) => index + 1).map((day) => (
              <Picker.Item
                key={day}
                label={day.toString()}
                value={day.toString()}
              />
            ))}
          </Picker>
          <Picker
            style={[styles.input, { flex: 1 }]}
            selectedValue={month}
            onValueChange={(itemValue) => handleMonthChange(itemValue)}
          >
            <Picker.Item label="Tháng" value="" />
            {Array.from({ length: 12 }, (_, index) => index + 1).map(
              (month) => (
                <Picker.Item
                  key={month}
                  label={month.toString()}
                  value={month.toString()}
                />
              )
            )}
          </Picker>
          <Picker
            style={[styles.input, { flex: 1 }]}
            selectedValue={year}
            onValueChange={(itemValue) => handleYearChange(itemValue)}
          >
            <Picker.Item label="Năm" value="" />
            {Array.from({ length: 122 }, (_, index) => index + 1900).map(
              (year) => (
                <Picker.Item
                  key={year}
                  label={year.toString()}
                  value={year.toString()}
                />
              )
            )}
          </Picker>
        </View>
      </View>

      <View style={{ top: 30, width: "90%" }}>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 20,
              flex: 3,
              alignItems: "center",
              display: "flex",
            }}
          >
            Mật khẩu
          </Text>
          <TextInput
            onChangeText={(text) => setPassword(text)}
            style={[styles.input, { flex: 7 }]}
            secureTextEntry={true}
            placeholder="Nhập mật khẩu"
          />
        </View>
      </View>

      <View style={{ top: 30, width: "90%" }}>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 20,
              flex: 3,
              alignItems: "center",
              display: "flex",
            }}
          >
            {" "}
            Xác nhận{" "}
          </Text>
          <TextInput
            style={[styles.input, { flex: 7 }]}
            onChangeText={(text) => setConfirm(text)}
            secureTextEntry={true}
            placeholder="Nhập lại mật khẩu"
          />
        </View>
      </View>

      <TouchableOpacity onPress={checkSignup} style={styles.next}>
        <View>
          <Text style={{ fontSize: 24, color: "white" }}>Đăng ký</Text>
        </View>
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
    margin: 8,
    fontSize: 19,
    outline: 0,
    overflow: "hidden",
    border: 0,
  },
  next: {
    top: 90,
    width: "60%",
    borderWidth: 0,
    backgroundColor: "#0099FF",
    alignItems: "center",
    height: 50,
    borderRadius: 15,
    justifyContent: "center",
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#999",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  radioButtonSelected: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#0099FF",
  },
});
