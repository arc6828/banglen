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
    const dam_whitelist = ["วชิราลงกรณ", "สิริกิติ์", "ภูมิพล", "ป่าสักชลสิทธิ์", "ศรีนครินทร์"];
    const loadDam = async () => {
        let ds = await Dam.getItems();
        // ds = ds.filter((item,index)=>( (dam_whitelist.indexOf(item.dam.dam_name.th) !== -1) && ((new Date()).toDateString() == (new Date(item.dam_date)).toDateString()) ));
        ds = ds.filter((item,index)=>( (dam_whitelist.indexOf(item.dam.dam_name.th) !== -1) ));
        ds = ds.reduce((prev, item) => {
            const index = prev.findIndex(v => v.dam.dam_name.th === item.dam.dam_name.th);
            if (index === -1) {
                // console.log(item.dam.dam_name.th,item.dam_date);
                prev.push(item);
            } else {
                // prev[index].elements.push(...cur.elements);
            }
            return prev;
        }, []);
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