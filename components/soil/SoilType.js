import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
// import { Header, Icon } from "../app/components";
import { BaseStyle, Images, useTheme } from '@config';
import { useNavigation, useRoute } from "@react-navigation/native";
import LineInformation from "../line/LineInformation";


export default function SoilType() {
    //BASIC
    // const navigation = useNavigation();
    const { colors } = useTheme();
    const route = useRoute();
    const { code } = route.params;
    // const imageFile = '../../assets/images/soil/'+code+'.png';
    const [soil, setSoil] = useState({});
    const images = {
        "Ay-cA": require(`../../assets/images/soil/Ay-cA.png`),
        "Bl-cA": require(`../../assets/images/soil/Bl-cA.png`),
        "Bn-cA": require(`../../assets/images/soil/Bn-cA.png`),
        "Se-cA": require(`../../assets/images/soil/Se-cA.png`),
    }


    useEffect(() => {
        // console.log("Enter Screen", code);
        loadSoil();
    }, []);

    const loadSoil = () => {
        let soils = require('../../assets/jsons/soil.json');
        let s = soils.find((item) => (item.code == code));
        setSoil(s);
    };

    return (
        <ScrollView >
            <View style={{ flexDirection: "row" }}>
                <Image source={images[code]} style={{ flex: 1, resizeMode: "cover", aspectRatio: 16 / 9 }} />
            </View>
            <View style={{ padding: 20 }}>
                <Text style={{ fontSize: 20, color: colors.primary, marginVertical: 10 }} >
                    ชุดดิน{soil.description} ({soil.code})
                </Text>
                <LineInformation data={{ "ชนิดดิน" : soil.type , "ความลาดเอียง": soil.slope, "เนื้อที่จากทั้งหมดของอำเภอ (ไร่)": soil.area_in_rai}} />
                <Text style={{ fontSize: 18, color: colors.primary, marginVertical: 10 }}>ข้อจำกัด</Text>
                <Text>{soil.limit}</Text>
                <Text style={{ fontSize: 18, color: colors.primary, marginVertical: 10 }} >คำแนะนำสำหรับการปลูกข้าว</Text>
                <Text>{soil.suggestion}</Text>
            </View>
        </ScrollView>);
}