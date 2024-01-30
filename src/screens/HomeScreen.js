import React from "react";
import { ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import MessageScreen from "./MessageScreen.js";
import InformationScreen from "./InformationScreen.js";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Message" component={MessageScreen} />
      <Tab.Screen name="Information" component={InformationScreen} />
    </Tab.Navigator>
  );
}

export default function HomeScreen() {
  return (
    <ImageBackground
      style={{ height: "100%", width: "100%" }}
      source={require("../img/image_background.webp")}
      resizeMode="stretch"
    >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={Tabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </ImageBackground>
  );
}
