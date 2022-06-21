import React from "react";
import { Text, View } from "react-native";
import { Divider, List, Avatar, Card, IconButton } from 'react-native-paper';
import { ProgressCircle } from 'react-native-svg-charts'
import MyNumber from "../../helpers/MyNumber";
import SemiCircleProgress from "../chart/SemiCircleProgress";

export default function ProfitChart(props) {
    const { total_income, total_outcome } = props;
    const profit = total_income - total_outcome;
    const cost = total_outcome;

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
            <View style={{ padding: 20, alignItems: "center" }}>
                <Text style={{ fontSize: 16, color: "green" }}>กำไร/ขาดทุน สุทธิ</Text>
                <Text style={{ fontSize: 32, color: "green" }}>{profit} บาท</Text>
            </View>
            <View style={{ padding: 20 }}>
                <SemiCircleProgress
                    percentage={(profit) / (cost) * 100}
                    progressColor={"green"}
                    interiorCircleColor={"#eeeeee"}
                >
                    <Text style={{ fontSize: 32, color: "green" }}>{cost ? MyNumber.number_format(profit / cost * 100) : 0}%</Text>
                    <Text style={{ fontSize: 16, color: "green" }}>กำไรต่อต้นทุน</Text>
                </SemiCircleProgress>

            </View>
        </View>

    );
}