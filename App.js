import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/SignInScreen';
import LoginScreen from './src/screens/LoginScreen';
import phone from './src/screens/PhoneScreen';
import dangky from './src/screens/SignupScreen'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen options={{headerShown:false}} name='HomeScreen' component={HomeScreen}/>
         <Stack.Screen options={{headerShown:false}} name='LoginScreen' component={LoginScreen}/>
         <Stack.Screen  options={{headerTitle:'Tạo Tài Khoản',headerTitleAlign:'center',headerStyle:{backgroundColor:'#0099FF'}}} name='dangky' component={dangky}/>
         <Stack.Screen   options={{headerTitle:'Tạo Tài Khoản',headerTitleAlign:'center',headerStyle:{backgroundColor:'#0099FF'}}} name='phone' component={phone}/>
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
