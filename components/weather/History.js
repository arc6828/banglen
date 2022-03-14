import { func } from "prop-types";
import React, { useState } from "react";
import { View } from "react-native";

import { ToggleButton } from 'react-native-paper';
import { Text, Icon, Card, Image, SafeAreaView, } from '@components';

export default function History() {

    const [timeFrame, setTimeFrame] = useState("");
    console.log(timeFrame);
    return (
        <View style={{ padding: 20 }}>

            <Text title3 semibold >ข้อมูลในอดีต</Text>
            <View style={{ flexDirection: "row", padding: 10 }}>
                <ToggleButton.Row onValueChange={value => setTimeFrame(value)} value={timeFrame} style={{ flex: 1, justifyContent: "space-between" }}>
                    <ToggleButton style={{ width: 75, borderWidth: 0 }} icon={() => (<Text>ปีนี้</Text>)} value={""+new Date().getFullYear()} />
                    <ToggleButton style={{ width: 75, borderWidth: 0 }} icon={() => (<Text>ปีที่ผ่านมา</Text>)} value={""+(new Date().getFullYear()-1)} />
                    <ToggleButton style={{ width: 75, borderWidth: 0 }} icon={() => (<Text>ทั้งหมด</Text>)} value="" />
                </ToggleButton.Row>
            </View>
        </View>
    );

}