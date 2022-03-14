import React from "react";
import { Text, View } from "react-native";
import { Divider, List, Avatar, Card, IconButton } from 'react-native-paper';
import { ProgressCircle } from 'react-native-svg-charts'
import SemiCircleProgress from "../chart/SemiCircleProgress";

export default function ProfitChart() {
    const profit = 300;
    const cost = 600;

    return (
        <View style={{ backgroundColor: "#eeeeee", alignItems: "center" }} >
            {/* <ProgressCircle
                style={ { height: 300 } }
                progress={ 0.5 }
                progressColor={'rgb(134, 65, 244)'}
                startAngle={ -Math.PI * 0.5 }
                endAngle={ Math.PI * 0.5 }
                strokeWidth={10}
            /> */}
            <View style={{ padding : 20, alignItems: "center" }}> 
                <Text style={{ fontSize: 16, color: "green" }}>กำไร/ขาดทุน สุทธิ</Text>
                <Text style={{ fontSize: 32, color: "green" }}>+ {profit} บาท</Text>
            </View>
            <View style={{ padding : 20}}>
                <SemiCircleProgress
                    percentage={(profit)/(cost)*100}
                    progressColor={"green"}
                    interiorCircleColor={"#eeeeee"}
                >
                    <Text style={{ fontSize: 32, color: "green" }}>{(profit)/(cost)*100}%</Text>
                    <Text style={{ fontSize: 16, color: "green" }}>กำไรต่อต้นทุน</Text>
                </SemiCircleProgress>

            </View>
        </View>

    );
}