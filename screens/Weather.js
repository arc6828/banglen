import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Header, Icon } from "../app/components";
import { BaseStyle, Images, useTheme } from '@config';
import WeatherNow from "../components/weather/WeatherNow";
import { useNavigation } from "@react-navigation/native";
import WeatherWeek from "../components/weather/WeatherWeek";

export default function Weather() {
    const navigation = useNavigation();
    const { colors } = useTheme();

    return (
        <ScrollView>
            {/* <Header title="สภาพอากาศ" /> */}
            <Header
                title="สภาพอากาศ"
                renderLeft={() => {
                    return (
                        <Icon
                            name="arrow-left"
                            size={20}
                            color={colors.primary}
                            enableRTL={true}
                        />
                    );
                }}
                onPressLeft={() => {
                    navigation.goBack();
                }}
            />

            <WeatherNow />

            <WeatherWeek />
            <Text>ย้อนหลัง 1 ปี</Text>

        </ScrollView>
    );
}