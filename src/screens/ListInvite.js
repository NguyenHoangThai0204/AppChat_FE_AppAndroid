import { View, Text, TextInput, FlatList ,Button, TouchableOpacity, StyleSheet} from 'react-native';
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { getApiNoneToken } from "../../api/Callapi.js";
// import { useDispatch} from 'react-redux';
import { putApiNoneToken } from '../../api/Callapi.js';





export default function ListInvite(){
  const currentUser = useSelector((state) => state.user.currentUser);

const [data,setData] = useState([])

// const nameAcc = currentUser.name;

useEffect(() => {
    search();
}, [currentUser]);

const addFriend=async(name, phone,id)=>{
  const response = await getApiNoneToken("/getDetailsByPhone/"+currentUser.phone);

  // thêm sdt của bạn vào phonebooks của mình
  const response1 = await putApiNoneToken("/addFriend/"+currentUser._id, {
    name:name,
   phone:phone
  });
// thêm sdt của mình vào phonebooks của bạn
  const response2 = await putApiNoneToken("/addFriend/"+id, {
    name:currentUser.name,
   phone:currentUser.phone
  })
  console.log(name)
  console.log(phone)
  
  alert("thêm bạn thành công")
  
}



const search=async()=>{
    const response = await getApiNoneToken("/getDetailsByPhone/"+currentUser.phone);
    setData(response.data.data.invite)
    console.log(response.data.data.invite)
  }

const renderItem = ({ item }) => (
   
      <View style={styles.userItem}>
        <View style={styles.avatar}></View>
        <View style={styles.inforUser}>
          <Text style={{ fontSize: 18 }}>{item.name}</Text>
          <Text style={{ fontSize: 16 }}>{item.phone}</Text>
          <TouchableOpacity onPress={() => addFriend(item.name, item.phone,item.id)}
            style={{borderWidth:1,borderColor:"green",borderRadius:10,marginLeft:100,width:70}}> 
            <View > <Text style={{fontSize:18}}>Đồng ý</Text> </View>
             </TouchableOpacity>


          <TouchableOpacity    style={{borderWidth:1,borderColor:"green",
          borderRadius:10,marginLeft:200,width:90
          }}> 
            <View> <Text style={{fontSize:18}}>Từ chối</Text> </View>
            </TouchableOpacity>
        </View>
      </View>
    
  );
    return(
        <View>
         <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={true}
        />

          
            {/* <Text>{currentUser.phone}</Text>
            <Text>{currentUser.id}</Text> */}

        
        </View>
    )
}

const styles=  StyleSheet.create({
    avatar: {
        width: 55,
        height: 55,
        padding: 15,
        borderRadius: 50,
        backgroundColor: "black",
      },
      inforUser: {
        marginLeft: 15,
        textAlign: "left",
      },
      userItem: {
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        padding: 8,
        flexDirection: "row",
      },
})