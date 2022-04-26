import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { Header, Icon } from "../app/components";
import { BaseStyle, Images, useTheme } from '@config';
import { useNavigation } from "@react-navigation/native";
import DamBarChart from "../components/water/DamBarChart";
import Dam from "../services/Dam";
import DamLineChart from "../components/water/DamLineChart";


export default function Water() {
    //BASIC
    const navigation = useNavigation();
    const { colors } = useTheme();

    const [dams, setDams] = useState([]);
    const loadDam = async () => {
        let ds = await Dam.getItems();
        setDams(ds);
    }
    useEffect(() => {
        console.log("Enter Screen");
        loadDam();
    }, []);




    return (
        <ScrollView>
            {/* <Header
                title="ข้อมูลด้านน้ำ"
                renderLeft={() => (<Icon name="arrow-left" size={20} color={colors.primary} enableRTL={true} />)}
                onPressLeft={() => { navigation.goBack(); }}
            /> */}

            <DamBarChart data={dams} />

            <DamLineChart data={dams} />
        </ScrollView>);
}