
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useContext } from "react";

//REDUX AND THEME
import { useSelector } from "react-redux";
import { BaseColor, useTheme, useFont } from "@config";
import { useTranslation } from "react-i18next";
import { Icon } from "@components";

//SCREENS
import Home from "@screens/Home";
import Booking from "@screens/Booking";
import Messenger from "@screens/Messenger";
import Notification from "@screens/Notification";
import Post from "@screens/Post";
import Profile from "@screens/Profile";
import Walkthrough from "@screens/Walkthrough";

import { AuthContext, AuthContextProvider } from '../../hooks/AuthContext';

const BottomTab = createBottomTabNavigator();
export default function BottomTabNavigator() {
  // const [user] = useContext(AuthContext);

  const { t } = useTranslation();
  const { colors } = useTheme();
  const font = useFont();
  // const auth = useSelector((state) => state.auth);
  // const login = auth.login.success;

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        inactiveTintColor: BaseColor.grayColor,
        tabBarShowLabel: true,
        tabBarShowIcon: true,
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: font,
        },
        tabBarStyle: { borderTopWidth: 1 },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          title: t("หน้าหลัก"),
          tabBarIcon: ({ color }) => {
            return <Icon color={color} name="home" size={20} solid />;
          },
        }}
      />
      <BottomTab.Screen
        name="Booking"
        component={Booking}
        options={{
          title: t("ต้นทุน"),
          tabBarIcon: ({ color }) => {
            return <Icon color={color} name="globe-asia" size={20} solid />;
          },
        }}
      />
      <BottomTab.Screen
        name="Notification"
        component={Notification}
        options={{
          title: t("แจ้งเตือน"),
          tabBarIcon: ({ color }) => {
            return <Icon solid color={color} name="bell" size={20} />;
          },
        }}
      />
      <BottomTab.Screen
        name="Post"
        component={Post}
        options={{
          title: t("ข่าวสาร"),
          tabBarIcon: ({ color }) => {
            return <Icon color={color} name="copy" size={20} solid />;
          },
        }}
      />
      <BottomTab.Screen
        name="Profile"
        // component={user ? Profile : Walkthrough}
        component={Walkthrough}
        options={{
          title: t("บัญชีของฉัน"),
          tabBarIcon: ({ color }) => {
            return <Icon solid color={color} name="user-circle" size={20} />;
          },
        }}
      />
    </BottomTab.Navigator>

  );
}