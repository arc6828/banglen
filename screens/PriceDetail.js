import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { BusItem, Header, Icon } from "../app/components";
import { BaseStyle, Images, useTheme } from '@config';
import WeatherNow from "../components/weather/WeatherNow";
import { useNavigation, useRoute } from "@react-navigation/native";
import WeatherWeek from "../components/weather/WeatherWeek";
import Market from "../components/price/Market";
import Product from "../services/Product";
import LineInformation from "../components/line/LineInformation";

export default function PriceDetail(props) {
    const navigation = useNavigation();
    const route = useRoute();
    const { item } = route.params;
    const { colors } = useTheme();
    const [product, setProduct] = useState(null);
    const loadProduct = async () => {
        let p = await Product.getItemDetail(item.product_id);
        //SET STATE
        setProduct(p);
    };
    useEffect(() => {
        console.log("Enter Screen");
        loadProduct();
    }, []);

    return (
        <ScrollView>
            <Header
                title={item.product_name}
                renderLeft={() => (<Icon name="arrow-left" size={20} color={colors.primary} enableRTL={true} />)}
                onPressLeft={() => { navigation.goBack(); }}
            />
            <View style={[colors.primary, { padding: 10 }]}>
                <Text style={{ color : colors.primary }}>ข้อมูลทั่วไปของผลิตภัณฑ์</Text>
                <LineInformation data={product} />
                
                <Text style={{ color : colors.primary, marginTop : 20 }}>ราคาในอดีต</Text>
                <Text>{JSON.stringify(product)}</Text>
            </View>
            





        </ScrollView>
    );
}