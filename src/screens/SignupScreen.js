import { useState } from 'react';
import { Button, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
//  impot vào
import { postApiNoneToken } from "../../api/Callapi";
// form nhap ten
export default function SignupScreen({navigation}){


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  // useEffect(() => {
  //   if (email && pass && confirm && name) {
  //     createAccount();
  //   }
  // }, [name,email, pass,confirm]);
/// call api
  const createAccount = async () => {
    try {
      const response = await postApiNoneToken('/signup', {
        "name" : name,
        "username": email,
        "password": password,
        "confirmPassword": confirm,
      })
      alert(name);
      alert(email);
      alert(password);
      alert(confirm);
      alert(response.data);
      alert('Đăng ký thành công');
      navigation.navigate('FirstScreen'); // chuyen ve 
    } catch (error) {
      console.error("error for signup", error);
     
    }
  }

  // check signup

  function checkSignup(){
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    checkEmail = reg.test(email);
    const regName = /^[a-zA-Z]+$/;
    checkName = regName.test(name);
    // pass tam thoi chua reg
    if (!checkName && !checkEmail) {
      alert('Email hoặc tên không hợp lệ');
    }else{
      createAccount();

    }
  
  }

    return(
      <View style={styles.container}>
      
      <Text style={{fontSize:20,top:20,width:'90%'}}>Nhập các thông tin cần thiết để đăng ký tài khoản</Text>
        <View style={{top:50,width : '90%'}}>

        <label for="name">Name</label>
        <TextInput onChangeText={t=>setName(t)} style={styles.input} placeholder='Name' />
        </View>

        <label for="email">Email</label>
        <View style={{top:50,width : '90%'}}>
        <TextInput style={styles.input} onChangeText={t=>setEmail(t)} keyboardType='email' placeholder='Email'/>
        </View>

        <label for="password">Password</label>
        <View style={{top:50,width : '90%'}}>
        <TextInput onChangeText={t=>setPassword(t)} style={styles.input} secureTextEntry='true' placeholder='Password'/>
        </View>

        <label for="confirm">Confirm</label>
        <View style={{top:50,width : '90%'}}>
        <TextInput style={styles.input} onChangeText={t=>setConfirm(t)} secureTextEntry='true' placeholder='Confirm Password'/>
        </View>





      <TouchableOpacity onPress={createAccount}style={styles.next}>
        <View><Text  style={{fontSize:24}}>Đăng ký</Text></View>
         
      </TouchableOpacity>

      <View style={{width:'80%'}}><Text style={{top:340,fontSize:22}}>Tiếp tục nghĩa là bạn đồng ý với các điều khoản sử dụng NVV</Text></View>
      
      </View>
    )
  }




  const styles =  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
     
    },
    input:{
      borderWidth:0,
      borderBottomWidth:1,
      borderBottomColor: 'black',
      marginBottom:15,
      fontSize:24
   
    },
    next:{
      top: 90,
      width:'60%',
      borderWidth:1,
      backgroundColor: '#0099FF',
      alignItems:'center',
      height:50,
      borderRadius:15,
      justifyContent:'center'
    }
  })