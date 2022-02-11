import React, { useEffect, useState } from "react";
import { PieChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { color, set } from "react-native-reanimated";
export default function LandUseChart(props) {

    const screenWidth = Dimensions.get("screen").width;
    const colors = ["#fd7f6f", "#7eb0d5", "#b2e061", "#bd7ebe", "#ffb55a", "#ffee65", "#beb9db", "#fdcce5", "#8bd3c7"];
    const [data, setData] = useState([]);

    useEffect(() => {
        transformData();
    }, [props.data]);

    const transformData = () => {
        let d = props.data;
        d.sort((a, b) => {
            return (b.area_in_rai - a.area_in_rai);
        });
        d.map((item, index) => {
            item.name = item.description;
            item.population = Number(item.area_in_rai);
            item.color = colors[index];
            item.legendFontColor = "#7F7F7F";
            item.legendFontSize = 15;
            return item;
        });
        d = d.reduce((total, item, index) => {
            if (index <= colors.length - 1) {
                total.push(item);
            } else {
                total[colors.length - 1].name = "อื่นๆ";
                // total[colors.length-1].population += item.area_in_rai;
            }
            return total;
        }, []);
        console.log(props.data.length, d.length);
        setData(d);

    };

    const chartConfig = {
        // backgroundGradientFrom: "#1E2923",
        // backgroundGradientFromOpacity: 0,
        // backgroundGradientTo: "#08130D",
        // backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        // strokeWidth: 2, // optional, default 3
        // barPercentage: 0.5,
        // useShadowColorFromDataset: false // optional
    };
    return (
        <PieChart
            data={data}
            width={screenWidth}
            height={data.length > 16 ? props.height + data.length * 10 : props.height}
            chartConfig={chartConfig}
            accessor={"population"}
            backgroundColor={"transparent"}
            paddingLeft={"0"}
            center={[0, 0]}

        />
    );
}