import { Button, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


function phone(){
return(
  <View style={styles.container}>
      
  <Text style={{fontSize:20,top:20,width:'90%'}}>Nhập số điện thoại của bạn để tạo tài khoản mới</Text>
    <View style={{top:50,width : '90%'}}>
    <TextInput style={styles.input} placeholder='nhập SĐT'/>
    </View>

  <TouchableOpacity  style={styles.next}>
    <View><Text style={{fontSize:24}}>Tiếp Theo</Text></View>
     
  </TouchableOpacity>

  <View style={{width:'80%'}}><Text style={{top:360,fontSize:22}}>Tiếp tục nghĩa là bạn đồng ý với các điều khoản sử dụng NVV</Text></View>
  
  </View>
)
}

const styles =  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
     
    }, input:{
      borderWidth:0,
      borderBottomWidth:1,
      borderBottomColor: 'black',
    
      fontSize:24
   
    },
    next:{
      top: 100,
      width:'60%',
      borderWidth:1,
      backgroundColor: '#0099FF',
      alignItems:'center',
      height:50,
      borderRadius:15,
      justifyContent:'center'
    }
   
  })

  export default phone