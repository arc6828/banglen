import React, { useEffect, useState } from "react";
import { Dimensions, Text, View } from "react-native";

import { BarChart } from 'react-native-chart-kit'
import Time from "../../helpers/Time";
import Dam from "../../services/Dam";

export default function DamBarChart(props) {
    const [data, setData] = useState(null);
    const screenWidth = Dimensions.get('screen').width;
    const chartConfig = {
        backgroundGradientFrom: '#1E2923',
        backgroundGradientTo: '#08130D',
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`
        // backgroundColor: '#e26a00',
        // backgroundGradientFrom: '#fb8c00',
        // backgroundGradientTo: '#ffa726',
        // color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    }

    const loadDam = async () => {        
        let d = props.data;
        let mockup_data = {
            // labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            // datasets: [{
            //     data: [20, 45, 28, 80, 99, 43]
            // }]
            labels: d.map((item)=>(item.dam.dam_name.th)),
            datasets: [{
                data: d.map((item)=>(item.dam_storage_percent))
            }]
        }
        setData(mockup_data);

    }

    useEffect(() => {
        console.log("Load", props.data.length);
        if(props.data.length > 0){
            loadDam();
        }
    }, [props.data]);

    if (!data) return <View></View>;
    return (
        <View  style={{ paddingVertical : 10 }}>
            <Text style={{ fontSize : 16 , textAlign : "center" }}> ข้อมูลอ่างเก็บน้ำขนาดใหญ่ประจำ </Text>
            <Text style={{  fontSize : 16 , textAlign : "center" }}> {Time.justFullDate()} </Text>
            <BarChart
                style={{ marginVertical: 8 }}
                data={data}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
            />
        </View>
    );
}