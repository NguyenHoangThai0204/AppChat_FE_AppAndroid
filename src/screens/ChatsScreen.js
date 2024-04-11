import React, { useState, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { AntDesign, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { getApiNoneToken } from "../../api/Callapi.js";
import { getApiMessageNoneToken } from "../../api/Callapi.js";
import { postApiMessageNoneToken } from "../../api/Callapi.js";
import { useEffect, useCallback } from "react";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { addMessage } from "../../redux_stores/messageSlide"; // Import thêm action addTime ở messageSlide
// import { addTime } from "../../redux_stores/timeSlide"; // Import thêm action addTime ở messageSlide
import io from "socket.io-client";

import ChatItem from "../components/ChatItem";

export default function ChatsScreen({ route, navigation }) {
  const { phone } = route.params;
  const [inputText, setInputText] = useState("");
  const [listData, setListData] = useState([]);
  const flatListRef = useRef(null);
  const [name, setName] = useState("");
  const currentUser = useSelector((state) => state.user.currentUser);

  const messages = useSelector((state) => state.messages.messages);
  // const times = useSelector((state) => state.times.times);

  const dispatch = useDispatch();
  const [newReceiverId, setNewReceiverId] = useState("");

  // test thu
  
  
  // const [currentTime, setCurrentTime] = useState(new Date());


  // useEffect(() => {
    
    
  // }, [currentTime]);
 
  
  useEffect(() => {
    const socket = io("http://localhost:3001")
  
    socket.on("connect", () => {
      console.log("Connected to server");
    });
  
    socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });
  
    socket.on("newMessage", (message) => {
      console.log("newMessage: ", message);
      setListData([...listData, message]);
      flatListRef.current.scrollToEnd();
    });
  
    return () => {
      socket.disconnect();
    };
  }, []);
  
  

  useEffect(() => {
    const fetchReceiverUser = async () => {
      // const interval = setInterval(() => {
      //   setCurrentTime(new Date());
      // }, 5000);
      // console.log(currentTime.getTime());
        // return () => clearInterval(interval);
     
      try {
        const response = await getApiNoneToken(`/getDetailsByPhone/${phone}`, {
          phone: phone,
        });
        console.log("receiver user: ", response.data.data);
        const receiverData = response.data.data;
        if (receiverData) {
          setName(receiverData.name);
          const senderId = currentUser._id;
          console.log("senderId: ", senderId);
          console.log("receiverData: ", receiverData);
          const receiverId = receiverData._id;
          setNewReceiverId(receiverId);
          console.log("receiverId: ", receiverId);
          console.log("NewReceiverId: ", newReceiverId);
          const messagesResponse = await getApiMessageNoneToken(
            "/getMessages/" + receiverId + "?senderId=" + senderId
          );
          console.log("messages: ", messagesResponse.data);
          messagesResponse.data.forEach((message) => {
            dispatch(addMessage(message));
          });
          // messagesResponse.data.forEach((createdAt) => {
          //   dispatch(addTime(createdAt));
          // });
          // console.log("createdAt: ", times);
          setListData(messagesResponse.data);
          
        } else {
          console.error("No data received for receiver user.");
        }
      } catch (error) {
        console.error("Error fetching receiver user:", error);
      }
    };

    fetchReceiverUser();
  
  // }, [phone, currentUser._id]);currentTime
  // setCurrentTime(new Date());
}, [dispatch, phone, currentUser._id, newReceiverId]);
  
useEffect(() => {
  console.log("Updated messages:", messages);
}, [messages]);


  useEffect(() => {
    flatListRef.current.scrollToEnd();
  }, [listData]);


  const handleSend = async (newReceiverId, currentUserId) => {
    if (inputText.trim() !== "") {
      const responseSendMess = postApiMessageNoneToken(
        "/sendMessage/" + newReceiverId,
        {
          message: inputText,
          userId: currentUserId,
        }
      );

      const newMessage = (await responseSendMess.then()).data;
        
      console.log("responseSendMess: ", newMessage);
      if(newMessage!=null){
        console.log("newMessage: ", newMessage);
        setListData([...listData, newMessage]);
        flatListRef.current.scrollToEnd();
        setInputText("");
      }
      
    }
  };

  return (
    <View style={styles.container}>
      {/* Phần header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={{ fontSize: 23, color: "white" }}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Text></Text>
          <AntDesign name="arrowleft" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ width: "65%", flexDirection: "column" }}
          onPress={() => navigation.navigate("PersonalScreen", { name: name })}
        >
          <View style={styles.inputHeader}>
            <Text style={{ fontSize: 23, fontWeight: 550, color: "white" }}>
              {name}
            </Text>
            <Text style={{ fontSize: 15, fontStyle: "italic", color: "black" }}>
              Hoạt động 15 phút trước
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ fontSize: 30, color: "white" }}>
          <Entypo name="phone" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={{ fontSize: 30, color: "white" }}>
          <Entypo name="video-camera" size={30} color="white" />
        </TouchableOpacity>
        {/* Phần menu cá nhân */}
        <TouchableOpacity
          style={{ fontSize: 30, color: "white" }}
          onPress={() =>
            navigation.navigate("PersonalChoiceScreen", { name: name })
          }
        >
          <MaterialCommunityIcons
            name="dots-vertical"
            size={23}
            color="white"
          />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          ref={flatListRef}
          data={listData}
          renderItem={({ item }) => (
            // <View
            //   style={{ flex: 1, margin: 10, alignContent: "space-between" }}
            // >
            //   <Text style={styles.itemText}>{item.message}</Text>
            // </View>
            <ChatItem
              currentUserId={currentUser._id}
              senderId={item.senderId}
              receiverId={item.receiverId}
              message={item.message}  
              createdAt={item.createdAt}
            />
          )}
          showsVerticalScrollIndicator={true}
          onContentSizeChange={() =>
            flatListRef.current.scrollToEnd({ animated: true })
          }
        />
      </View>
      {/* Phần footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={{ fontSize: 23, color: "white" }}>
          <MaterialCommunityIcons
            name="emoticon-happy-outline"
            size={23}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ width: "55%", fontSize: 20, color: "white" }}
        >
          <TextInput
            style={styles.inputFooter}
            placeholder="Soạn tin nhắn"
            keyboardType="default"
            value={inputText}
            onChangeText={setInputText}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ fontSize: 30, color: "white" }}
          onPress={()=>handleSend(newReceiverId, currentUser._id)}
        >
          <Entypo name="direction" size={23} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={{ fontSize: 30, color: "white" }}>
          <Entypo name="mic" size={23} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={{ fontSize: 30, color: "white" }}>
          <Entypo name="attachment" size={23} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={{ fontSize: 30, color: "white" }}>
          <MaterialCommunityIcons
            name="dots-vertical"
            size={23}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemText: {
    maxWidth: "99%", // Đặt chiều rộng tối đa là 100%
    width: "max-content", // Đặt chiều rộng là tối đa của nội dung
    padding: 10,
    borderRadius: 7,
    backgroundColor: "#D3E3FD",
    fontSize: 20,
    marginBottom: 5,
    textAlign: "justify",
  },
  footer: {
    width: "100%",
    height: 60,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "rgb(0, 145, 255)",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 1,
    justifyContent: "space-around",
    backgroundColor: "rgb(0, 145, 255)",
  },
  inputHeader: {
    fontSize: 23,
    padding: 8,
    borderWidth: 0,
  },
  inputFooter: {
    fontSize: 20,
    color: "black",
    backgroundColor: "white",
    borderRadius: 5,
    padding: 5,
  },
});
