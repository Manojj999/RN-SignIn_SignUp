import React from "react";
import { ScrollView } from 'react-native'
import WelcomeScreen from "./app/screens/WelcomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import AccountScreen from './app/screens/AccountScreen';
import RegisterScreen from "./app/screens/RegisterScreen";

export default function App() {
  return (
  <ScrollView horizontal={true} pagingEnabled={true}>
    <WelcomeScreen/>
    <LoginScreen />
    <RegisterScreen />
    <AccountScreen />
  </ScrollView>
  ) ;
}