import {
  View,
  Text,
  TextInput,
  FlatList,
  Button,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import FriendList from "../components/FriendList";
import { getApiNoneToken } from "../../api/Callapi.js";
import { useSelector, useDispatch } from "react-redux";
import { addFriend } from "../../redux_stores/friendSlide";
import { useEffect } from "react";

function Friend() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const id = currentUser._id;
  console.log("id", id);

  const dispatch = useDispatch();
  const friends = useSelector((state) => state.friends);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await getApiNoneToken(`/getAllFriend/${id}`,{
            _id: id,
        }) // Gọi hàm getAllFriend từ backend
        const friendList = response.data.data;
        friendList.forEach(friend => {
          dispatch(addFriend(friend)); // Dispatch action để thêm bạn bè vào Redux Store
        });
      } catch (error) {
        console.error('Error fetching friends:', error);
      }
    };

    fetchFriends(); // Gọi hàm fetchFriends khi component mount
  }, [dispatch]);

  // const friends = [
  //     { id: 1, name: 'John Doe', phone: '123456789' },
  //     { id: 2, name: 'Jane Smith', phone: '987654321' },
  //     { id: 3, name: 'Alice Johnson', phone: '555555555' },
  //     { id: 4, name: 'John Doe', phone: '123456789' },
  //     { id: 5, name: 'Jane Smith', phone: '987654321' },
  //     { id: 6, name: 'Alice Johnson', phone: '555555555' },
  //     { id: 7, name: 'John Doe', phone: '123456789' },
  //     { id: 8, name: 'Jane Smith', phone: '987654321' },
  //     { id: 9, name: 'Alice Johnson', phone: '555555555' }
  //   ];
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          backgroundColor: "rgb(0,145,255)",
        }}
      >
        {/* icon tìm kiếm */}
        <TouchableOpacity
          style={{
            backgroundColor: "rgb(0,145,255)",
            width: "10%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MaterialIcons
            name="search"
            size={30}
            color={"white"}
            padding={"5px"}
          />
        </TouchableOpacity>
        <TextInput
          style={{
            height: 50,
            width: "80%",
            backgroundColor: "rgb(0,145,255)",
            color: "white",
            padding: "5px",
            fontSize: 20,
          }}
          placeholder="Tìm kiếm"
        />
        <TouchableOpacity
          style={{
            width: "10%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AntDesign name="qrcode" size={30} color={"white"} padding={"5px"} />
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "column" }}>
        <TouchableOpacity style={styles.listadd}>
          <View>
            <Text style={{ fontSize: 20, paddingLeft: 30 }}>
              Lời mời kết bạn
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listadd}>
          <View>
            <Text style={{ fontSize: 20, paddingLeft: 30 }}>Danh bạ máy</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listadd}>
          <View>
            <Text style={{ fontSize: 20, paddingLeft: 30 }}>
              Lịch sinh nhật
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.showlist}>
          <View style={{ alignContent: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 20, paddingLeft: 25 }}>Tất cả</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.showlist}>
          <View style={{ alignContent: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 20 }}>Mới truy cập</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1 }}>
        <FriendList friends={friends} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  listadd: {
    height: 20,
    width: "100%",
    padding: 30,
  },
  showlist: {
    margin: 15,
    borderRadius: 15,
    borderColor: "gray",
    borderWidth: 1,
    top: 15,
    width: "30%",
    justifyContent: "center",
    alignContent: "center",
  },
});

export default Friend;
