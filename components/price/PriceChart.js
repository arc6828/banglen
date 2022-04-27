import React, { useEffect, useState } from "react";
import { PieChart, LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { color, set } from "react-native-reanimated";
import Time from "../../helpers/Time";
export default function PriceChart(props) {

    const screenWidth = Dimensions.get("screen").width - 50;
    const colors = ["#fd7f6f", "#7eb0d5", "#b2e061", "#bd7ebe", "#ffb55a", "#ffee65", "#beb9db", "#fdcce5", "#8bd3c7"];
    const [data, setData] = useState({
        labels: ["."],
        datasets: [{ data: [0] }]
    });

    // console.log(data);
    useEffect(() => {
        if (props.data) {
            if(props.data.price_list){
                transformData();
            }
        }
    }, [props.data]);

    const transformData = () => {
        let d = {
            labels: [],
            datasets: [
                {
                    data: [],
                    // color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                }
            ],
            // legend: ["ราคา"] // optional
        }
        d.labels = props.data.price_list.map((item,index) => {
            return index%4==0? item.date : "" ;
            // return "" ;
        });
        d.datasets[0].data = props.data.price_list.map((item) => {
            return item.price_max;
        });
        d.datasets[0].color = (opacity = 1) => colors[0];
        setData(d);
    };

    const chartConfig = {
        backgroundColor: 'white',
        backgroundGradientFrom: 'white',
        backgroundGradientTo: 'white',
        decimalPlaces: 0,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        // backgroundColor: "#e26a00",
        // backgroundGradientFrom: "#fb8c00",
        // backgroundGradientTo: "#ffa726",
        // decimalPlaces: 2, // optional, defaults to 2dp
        // color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        // labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        // style: {
        //     borderRadius: 16
        // },
        // propsForDots: {
        //     r: "6",
        //     strokeWidth: "2",
        //     stroke: "#ffa726"
        // }
    };

    return (
        <LineChart
            data={data}
            width={screenWidth} // from react-native
            height={220}
            // yAxisLabel="$"
            // yAxisSuffix="k"
            // yAxisInterval={1} // optional, defaults to 1
            // verticalLabelRotation={90}
            // xLabelsOffset={10}
            chartConfig={chartConfig}
            bezier
            style={{ margin: 10 }}
            formatXLabel={(item)=>{
                if(item){
                    let second = (new Date(item)).valueOf()/1000;
                    // console.log(new Date(item),index);
                    return Time.justShortDate(second)
                } else{
                    return "";
                }
                
            }}
        />
    );
}