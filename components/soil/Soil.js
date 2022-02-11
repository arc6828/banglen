import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
// import { Header, Icon } from "../../app/components";
import { BaseStyle, Images, useTheme } from '@config';
import { useNavigation } from "@react-navigation/native";
import { ToggleButton } from 'react-native-paper';
import { Divider, DataTable } from 'react-native-paper';
import LandUseDataTable from "./LandUseDataTable";
import LandUseChart from "./LandUseChart";
import LandUseImage from "./LandUseImage";

export default function Soil() {

    const [year, setYear] = React.useState('2562');
    const [category, setCategory] = React.useState("");
    const data = require('../../assets/jsons/landuse.json');
    const [soils, setSoils] = useState([]);
    const [order, setOrder] = useState(true);

    useEffect(() => { console.log("Enter Screen"); }, []);
    useEffect(() => {
        console.log("Change");
        loadSoil();
    }, [year, category, order]);


    const loadSoil = () => {
        let d = data.filter((item) => {
            return (item.year == year) && item.code.includes(category);
        });
        d = d.sort((a, b) => {
            return order ? (b.area_in_rai - a.area_in_rai) : (a.area_in_rai - b.area_in_rai);
        });
        setSoils(d);
    };


    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={{ flexDirection: "row", padding: 10 }}>
                <ToggleButton.Row onValueChange={value => setYear(value)} value={year} style={{ flex: 1 }}>
                    <ToggleButton style={{ flex: 1 }} icon={() => (<Text>2562</Text>)} value="2562" />
                    <ToggleButton style={{ flex: 1 }} icon={() => (<Text>2554</Text>)} value="2554" />
                    <ToggleButton style={{ flex: 1 }} icon={() => (<Text>2550</Text>)} value="2550" />
                </ToggleButton.Row>
            </View>
            <Divider />
            <View style={{ flexDirection: "row", padding: 10 }}>
                <ToggleButton.Row onValueChange={value => setCategory(value)} value={category} style={{ flex: 1, justifyContent: "space-between" }}>
                    <ToggleButton style={{ width: 75, borderWidth: 0 }} icon={() => (<Text>ทั้งหมด</Text>)} value="" />
                    <ToggleButton style={{ width: 75, borderWidth: 0 }} icon={() => (<Text>เกษตร</Text>)} value="A" />
                    <ToggleButton style={{ width: 75, borderWidth: 0 }} icon={() => (<Text>ที่ว่าง</Text>)} value="M" />
                    <ToggleButton style={{ width: 75, borderWidth: 0 }} icon={() => (<Text>เมือง</Text>)} value="U" />
                    <ToggleButton style={{ width: 75, borderWidth: 0 }} icon={() => (<Text>แหล่งน้ำ</Text>)} value="W" />
                </ToggleButton.Row>
            </View>
            <Divider />
            <LandUseChart data={soils} height={250} />                       
            <Divider />      
            <LandUseImage />   
            <Divider />
            <View style={{ padding: 10 }}>
                <LandUseDataTable soils={soils} order={order} setOrder={setOrder} />
            </View>
        </ScrollView>
    );
}