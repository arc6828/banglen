import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Header, Icon } from "@components";
import { BaseStyle, Images, useTheme } from '@config';
import Soil from '../../components/soil/Soil';
import SoilType from '../../components/soil/SoilType';
import { useNavigation } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

export default function SoilTopTab() {

    //BASIC
    const navigation = useNavigation();
    const { colors } = useTheme();
    return (
        <Tab.Navigator screenOptions={{ tabBarScrollEnabled : true }} >
            <Tab.Screen name="Soil" component={Soil} options={{ title:"ภาพรวม" }} />
            <Tab.Screen name="SoilAy" component={SoilType} initialParams={{ code : "Ay-cA" }} options={{ title:"ดินอยุธยา" }} />
            <Tab.Screen name="SoilBl" component={SoilType} initialParams={{ code : "Bl-cA" }} options={{ title:"ดินบางเลน" }} />
            <Tab.Screen name="SoilBn" component={SoilType} initialParams={{ code : "Bn-cA" }} options={{ title:"ดินบางเขน" }} />
            <Tab.Screen name="SoilSe" component={SoilType} initialParams={{ code : "Se-cA" }} options={{ title:"ดินเสนา" }} />
        </Tab.Navigator>
    );
}