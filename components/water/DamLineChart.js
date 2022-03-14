import React, { useEffect, useState } from "react";
import { Dimensions, ScrollView, Text, View } from "react-native";

import { BarChart, LineChart } from 'react-native-chart-kit'
import Time from "../../helpers/Time";
import Dam from "../../services/Dam";
import { ToggleButton } from 'react-native-paper';

export default function DamLineChart(props) {
    const [data, setData] = useState(null);
    const [month, setMonth] = useState(Time.justMonth());
    const [title, setTitle] = useState("");
    // const [dam, setDam] = useState(null);
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

    const loadDam = async (dam) => {
        // let d = props.data;
        setTitle(dam.dam.dam_name.th);
        // setDam(item);
        let graph_data = await Dam.getItemDetail(dam.dam.id,month)
        

            console.log(dam.dam.max_storage);
        
        let mockup_data = {
            // labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            // datasets: [{
            //     data: [20, 45, 28, 80, 99, 43]
            // }]
            labels: graph_data.map((item) => (item.year)),
            datasets: [{
                data: graph_data.map((item) => (item.data / dam.dam.max_storage * 100 ))
            }]
        }
        setData(mockup_data);

    }
    useEffect(() => {
        // FIRST TIME
        if (props.data.length > 0) {
            console.log("FIRST DAM");
            loadDam(props.data[0]);
        }
    }, [props.data]);

    useEffect(() => {
        // WHEN TIME CHANGE
        if (props.data.length > 0 && title != "") {
            console.log("SECOND DAM");
            loadDam(props.data.find((item)=>(item.dam.dam_name.th==title)));
        }
    }, [title,month]);

    if (!data) return <View></View>;
    return (
        <View style={{ paddingVertical: 10 }}>
            <Text style={{ fontSize: 16, textAlign: "center" }}> ข้อมูลอ่างเก็บน้ำขนาดใหญ่ย้อนหลัง 10 ปี</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ flexDirection: "row", padding: 10 }}>
                <ToggleButton.Row onValueChange={value => setMonth(value)} value={month} style={{}}>
                    {
                        ["ม.ค.","ก.พ.","มี.ค.","เม.ษ.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."].map((item,index) => (
                            <View key={index.toString()}>
                                <ToggleButton style={{ width: 50, borderWidth: 0 }} icon={() => (<Text>{item}</Text>)} value={""+(index+1)} />
                            </View>
                        ))
                    }
                </ToggleButton.Row>
            </ScrollView>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ flexDirection: "row", padding: 10 }}>
                <ToggleButton.Row onValueChange={value => setTitle(value)} value={title} style={{}}>
                    {
                        props.data.map((item) => (
                            <View key={item.dam.dam_name.th}>
                                <ToggleButton style={{ width: 90, borderWidth: 0 }} icon={() => (<Text>{item.dam.dam_name.th}</Text>)} value={item.dam.dam_name.th} />
                            </View>
                        ))
                    }
                </ToggleButton.Row>
            </ScrollView>
            <LineChart
                style={{ marginVertical: 8 }}
                data={data}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
                bezier

            />


        </View>
    );
}