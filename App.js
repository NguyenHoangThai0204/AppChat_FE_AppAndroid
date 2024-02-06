import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FirstScreen from './src/screens/FirstScreen';
import LoginScreen from './src/screens/LoginScreen';
import phone from './src/screens/PhoneScreen';
import dangky from './src/screens/SignupScreen'
import HomeScreen from './src/screens/HomeScreen';
import MessageScreen from './src/screens/MessageScreen';
import ChatsScreen from './src/screens/ChatsScreen.js'

import PersonalScreen from './src/screens/PersonalScreen.js';

import DiscoverScreen from './src/screens/DiscoverScreen.js';
import DiscoverApp from './src/screens/DiscoverApp.js';
import InformationScreen from './src/screens/InformationScreen.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen options={{headerShown:false}} name='FirstScreen' component={FirstScreen}/>
         <Stack.Screen options={{headerShown:false}} name='LoginScreen' component={LoginScreen}/>
         <Stack.Screen options={{headerShown:false}} name='HomeScreen' component={HomeScreen}/>
         <Stack.Screen options={{headerShown:false}} name='MessageScreen' component={MessageScreen}/>
         <Stack.Screen options={{headerShown:false}} name='ChatsScreen' component={ChatsScreen}/>
         <Stack.Screen options={{headerShown:false}} name='PersonalScreen' component={PersonalScreen}/>
         <Stack.Screen  options={{headerTitle:'Tạo Tài Khoản',headerTitleAlign:'center',headerStyle:{backgroundColor:'#0099FF'}}} name='dangky' component={dangky}/>
         <Stack.Screen   options={{headerTitle:'Tạo Tài Khoản',headerTitleAlign:'center',headerStyle:{backgroundColor:'#0099FF'}}} name='phone' component={phone}/>
         <Stack.Screen options={{headerShown:false}} name='DiscoverScreen' component={DiscoverScreen}/>
         <Stack.Screen options={{headerShown:false}} name='DiscoverApp' component={DiscoverApp}/>
         <Stack.Screen options={{headerShown:false}} name='InformationScreen' component={InformationScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
