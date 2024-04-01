import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FirstScreen from "./src/screens/FirstScreen";
import LoginScreen from "./src/screens/LoginScreen";
import PhoneScreen from "./src/screens/PhoneScreen";
import SignupScreen from "./src/screens/SignupScreen";
import HomeScreen from "./src/screens/HomeScreen";
import MessageScreen from "./src/screens/MessageScreen";
import ChatsScreen from "./src/screens/ChatsScreen.js";

import PersonalScreen from "./src/screens/PersonalScreen.js";

import DiscoverScreen from "./src/screens/DiscoverScreen.js";
import DiscoverApp from "./src/screens/DiscoverApp.js";
import InformationScreen from "./src/screens/InformationScreen.js";
import PersonalChoiceScreen from "./src/screens/PersonalChoiceScreen.js";
import PersonalInformationScreen from "./src/screens/PersonalInformationScreen.js";
import LogoutScreen from "./src/screens/LogoutScreen.js";
const Stack = createNativeStackNavigator();
import { Provider } from 'react-redux'; // Import Provider từ react-redux
import { store } from './redux/store'; // Import Redux store của bạn

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="FirstScreen"
          component={FirstScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="LoginScreen"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="MessageScreen"
          component={MessageScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ChatsScreen"
          component={ChatsScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="PersonalScreen"
          component={PersonalScreen}
        />
        <Stack.Screen
          options={{
            headerTitle: "Tạo Tài Khoản",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#0099FF" },
          }}
          name="SignupScreen"
          component={SignupScreen}
        />
        <Stack.Screen
          options={{
            headerTitle: "Tạo Tài Khoản",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#0099FF" },
          }}
          name="PhoneScreen"
          component={PhoneScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="DiscoverScreen"
          component={DiscoverScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="DiscoverApp"
          component={DiscoverApp}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="InformationScreen"
          component={InformationScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="PersonalChoiceScreen"
          component={PersonalChoiceScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="PersonalInformationScreen"
          component={PersonalInformationScreen}
        />
        {/* <Stack.Screen
          options={{ headerShown: false }}
          name="LogoutScreen"
          component={LogoutScreen}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
