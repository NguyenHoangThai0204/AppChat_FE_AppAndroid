import React, { useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Friend from "./Friend.js";
import Group from "./Group.js";
import OA from "./OA.js";

// tab ở trên
// npm install @react-navigation/material-top-tabs react-native-tab-view
const Tab = createMaterialTopTabNavigator();

// tab ở dưới
// const Tab = createBottomTabNavigator();

export default function ContactScreen() {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  return (
    
    <Tab.Navigator
      tabBarOptions={{
        style: {
          // top:100,
          padding: 10, // Điều chỉnh giá trị padding tùy theo nhu cầu của bạn
          borderTopLeftRadius: 10, // Điều chỉnh giá trị tùy theo nhu cầu của bạn
          borderTopRightRadius: 10, // Điều chỉnh giá trị tùy theo nhu cầu của bạn
        },
        labelStyle: {
          fontSize: 13, // Điều chỉnh giá trị fontSize tùy theo nhu cầu của bạn
        },
      }}
    >
      <Tab.Screen
        name="Bạn bè"
        options={{
          headerShown: false,
        }}
        component={Friend}
      />
      <Tab.Screen
        name="Nhóm"
        options={{
          headerShown: false,
        }}
        component={Group}
      />
      <Tab.Screen
        name="OA"
        options={{
          headerShown: false,
        }}
        component={OA}
      />
    </Tab.Navigator>
    // </View>
  );
}
