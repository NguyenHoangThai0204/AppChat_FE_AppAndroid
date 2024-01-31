import React from "react";
import { ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import MessageScreen from "./MessageScreen.js";
import InformationScreen from "./InformationScreen.js";
import { HeaderShownContext } from "@react-navigation/elements";
import DiaryScreen from "./DiaryScreen.js";
import DiscoverScreen from "./DiscoverScreen.js";
import ContactScreen from "./ContactScreen.js";
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Tin nhắn"
        options={{ headerShown: false }}
        component={MessageScreen}
      />
      <Tab.Screen
        name="Danh bạ"
        options={{ headerShown: false }}
        component={ContactScreen}
      />
      <Tab.Screen
        name="Khám phá"
        options={{ headerShown: false }}
        component={DiscoverScreen}
      />
      <Tab.Screen
        name="Nhật kí"
        options={{ headerShown: false }}
        component={DiaryScreen}
      />
      <Tab.Screen
        name="Cá nhân"
        options={{ headerShown: false }}
        component={InformationScreen}
      />
    </Tab.Navigator>
  );
};
export default HomeScreen;
