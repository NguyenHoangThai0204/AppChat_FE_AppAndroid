import React from "react";
import { ImageBackground } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MessageScreen from "./MessageScreen.js";
import ContactScreen from "./ContactScreen.js";
import DiscoverScreen from "./DiscoverScreen.js";
import DiaryScreen from "./DiaryScreen.js";
import InformationScreen from "./InformationScreen.js";
import { FiMessageCircle } from "react-icons/fi";
import { FaAddressBook } from "react-icons/fa";
import { MdAppsOutage ,MdMenuBook,MdOutlinePersonalInjury  } from "react-icons/md";

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
          fontSize: "13px", // Điều chỉnh giá trị fontSize tùy theo nhu cầu của bạn
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
              <FiMessageCircle color={color} size={size} />
            ),
          }}
          component={MessageScreen}
        />
        <Tab.Screen
          name="Danh bạ"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <FaAddressBook color={color} size={size} />
            ),
          }}
          component={ContactScreen}
        />
        <Tab.Screen
          name="Khám phá"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MdAppsOutage color={color} size={size} />
            ),
          }}
          component={DiscoverScreen}
        />
        <Tab.Screen
          name="Nhật kí"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MdMenuBook  color={color} size={size} />
            ),
          }}
          component={DiaryScreen}
        />
        <Tab.Screen
          name="Cá nhân"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MdOutlinePersonalInjury  color={color} size={size} />
            ),
          }}
          component={InformationScreen}
        />
    </Tab.Navigator>
  );
};

export default HomeScreen;
