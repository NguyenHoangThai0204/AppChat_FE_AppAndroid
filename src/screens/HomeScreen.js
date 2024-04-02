import React from "react";
import { ImageBackground } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MessageScreen from "./MessageScreen.js";
import ContactScreen from "./ContactScreen.js";
import DiscoverScreen from "./DiscoverScreen.js";
import DiaryScreen from "./DiaryScreen.js";
import InformationScreen from "./InformationScreen.js";
// import { FiMessageCircle } from "react-icons/fi";
import { Entypo } from '@expo/vector-icons';
// import { FaAddressBook } from "react-icons/fa";
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
// import { MdAppsOutage ,MdMenuBook,MdOutlinePersonalInjury  } from "react-icons/md";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          padding: "10px", // Điều chỉnh giá trị padding tùy theo nhu cầu của bạn
          borderTopLeftRadius: "10px", // Điều chỉnh giá trị tùy theo nhu cầu của bạn
          borderTopRightRadius: "10px", // Điều chỉnh giá trị tùy theo nhu cầu của bạn
        },
        labelStyle: {
          fontSize: 13, // Điều chỉnh giá trị fontSize tùy theo nhu cầu của bạn
        },
        safeAreaInsets: {
          bottom: 0, // Cố định vùng an toàn phía dưới
        },
      }}
    >

        <Tab.Screen
          name="Tin nhắn"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              // <FiMessageCircle color={color} size={size} />
              <Entypo name="message" size={size} color={color} />
            ),
          }}
          component={MessageScreen}
        />
        <Tab.Screen
          name="Danh bạ"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              // <FaAddressBook color={color} size={size} />
              <FontAwesome name="address-book" size={size} color={color} />
            ),
          }}
          component={ContactScreen}
        />
        <Tab.Screen
          name="Khám phá"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              // <MdAppsOutage color={color} size={size} />
              <AntDesign name="appstore1" size={size} color={color} />
            ),
          }}
          component={DiscoverScreen}
        />
        <Tab.Screen
          name="Nhật kí"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              // <MdMenuBook  color={color} size={size} />
              <MaterialIcons name="menu-book" size={size} color={color} />
            ),
          }}
          component={DiaryScreen}
        />
        <Tab.Screen
          name="Cá nhân"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              // <MdOutlinePersonalInjury  color={color} size={size} />
              <Ionicons name="person" size={size} color={color} />
            ),
          }}
          component={InformationScreen}
        />
    </Tab.Navigator>
  );
};

export default HomeScreen;
