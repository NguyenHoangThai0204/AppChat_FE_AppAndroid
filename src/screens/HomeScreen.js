import React from "react";
import { ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import MessageScreen from "./MessageScreen.js";
import InformationScreen from "./InformationScreen.js";
import { HeaderShownContext } from "@react-navigation/elements";

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
        name="Tin nhắn"
        options={{ headerShown: false }}
        component={MessageScreen}
      />
      <Tab.Screen
        name="Tin nhắn"
        options={{ headerShown: false }}
        component={MessageScreen}
      />
      <Tab.Screen
        name="Tin nhắn"
        options={{ headerShown: false }}
        component={MessageScreen}
      />
      <Tab.Screen
        name="Tin nhắn"
        options={{ headerShown: false }}
        component={MessageScreen}
      />
    </Tab.Navigator>
  );
};
export default HomeScreen;
