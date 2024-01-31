import React from "react";
import { ImageBackground, View, StyleSheet } from "react-native";
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
      <Tab.Screen name="Message" component={MessageScreen} options={{ tabBarLabel: 'Message' }} />
      <Tab.Screen name="Information" component={InformationScreen} options={{ tabBarLabel: 'Information' }} />
    </Tab.Navigator>
  );
}

export default function HomeScreen() {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../img/image_background.webp")}
      resizeMode="stretch"
    >
      <View style={styles.overlay}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={Tabs} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the overlay background color and transparency
  },
});
