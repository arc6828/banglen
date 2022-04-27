import React, { useEffect } from "react";
import { Dimensions, ScrollView, Text, View } from "react-native";
import { Header, Icon } from "../app/components";
import { BaseStyle, Images, useTheme } from '@config';
import WeatherNow from "../components/weather/WeatherNow";
import { useNavigation, useRoute } from "@react-navigation/native";
import WeatherWeek from "../components/weather/WeatherWeek";
import Market from "../components/price/Market";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

export default function Price() {
    const navigation = useNavigation();
    const { colors } = useTheme();
    useEffect(() => {
        console.log("Enter Screen");
    }, []);

    return (
        <>
            <Header
                title="ราคาสินค้า"
                // renderLeft={() => (<Icon name="arrow-left" size={20} color={colors.primary} enableRTL={true} />)}
                // onPressLeft={() => { navigation.goBack(); }}
            />
            <Tab.Navigator
                screenOptions={{
                    tabBarScrollEnabled: true,
                    // tabBarLabelStyle: { fontSize: 12 },
                    tabBarItemStyle: { width: Dimensions.get("screen").width / 2 },
                    // tabBarStyle: { backgroundColor: 'powderblue' },
                }}
                initialLayout={{ width: Dimensions.get('window').width }}
                style={{ justifyContent: "center" }}

            >
                <Tab.Screen name="PriceTableBefore" component={PriceTable} initialParams={{ code: "before" }} options={{ title: "ข้าวเปลือก" }} />
                <Tab.Screen name="PriceTableAfter" component={PriceTable} initialParams={{ code: "after" }} options={{ title: "ข้าวสาร" }} />
            </Tab.Navigator>
        </>
    );
}

function PriceTable() {
    const route = useRoute();
    const { code } = route.params;
    return (

        <View>
            {/* <Header title="สภาพอากาศ" /> */}
            {/* <Header
                title="ราคาสินค้า"
            renderLeft={() => (<Icon name="arrow-left" size={20} color={colors.primary} enableRTL={true} />)}
            onPressLeft={() => { navigation.goBack(); }}
            /> */}


            <Market code={code} />





        </View>
    );
}