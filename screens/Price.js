import React, { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { Header, Icon } from "../app/components";
import { BaseStyle, Images, useTheme } from '@config';
import WeatherNow from "../components/weather/WeatherNow";
import { useNavigation } from "@react-navigation/native";
import WeatherWeek from "../components/weather/WeatherWeek";
import Market from "../components/price/Market";

export default function Price() {
    const navigation = useNavigation();
    const { colors } = useTheme();
    useEffect(()=>{
        console.log("Enter Screen");
    },[]);

    return (
        <View>
            {/* <Header title="สภาพอากาศ" /> */}
            <Header
                title="ราคาสินค้า"
                // renderLeft={() => (<Icon name="arrow-left" size={20} color={colors.primary} enableRTL={true} />)}
                // onPressLeft={() => { navigation.goBack(); }}
            />

            <Market />





        </View>
    );
}