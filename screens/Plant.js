import React, { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { Header, Icon } from "../app/components";
import { BaseStyle, Images, useTheme } from '@config';
import { useNavigation } from "@react-navigation/native";
import RiceList from "../components/plant/RiceList";


export default function Plant() {
    //BASIC
    const navigation = useNavigation();
    const { colors } = useTheme();
    useEffect(() => { console.log("Enter Screen"); }, []);

    return (
        <View>
            <Header
                title="ข้อมูลด้านพันธุ์พืช"
                renderLeft={() => (<Icon name="arrow-left" size={20} color={colors.primary} enableRTL={true} />)}
                onPressLeft={() => { navigation.goBack(); }}
            />
            <RiceList />
        </View>);
}