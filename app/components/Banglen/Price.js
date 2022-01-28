import React, { useEffect, useState } from 'react';
import { View, Animated, TouchableOpacity, FlatList, Dimensions, ScrollView } from 'react-native';
import { Text, Icon, Card, Image, SafeAreaView, } from '@components';
import { LineChart } from "react-native-chart-kit";
import { BaseStyle, Images, useTheme } from '@config';
import * as Utils from '@utils';
import styles from '../../screens/Home/styles';
// import axios from 'axios';
// import { UserData } from '@data';
import { useTranslation } from 'react-i18next';
// import { ScrollView } from 'react-native-gesture-handler';

export default function Price() {
    //STANDARD VARIABLES
    const { t } = useTranslation();


    //LOCAL VARIABLES
    const [colours, setColours] = useState([]);
    const whitelistProducts = ["R11001", "R11018", "R11029", "R11035", "R11037", "R12003"];
    const [products, setProducts] = useState([]);
    const [price, setPrice] = useState();

    const changeBackgroundColor = (product_id) => {
        // setDataSet([{ data: keydataSet.keydataSet, strokeWidth: 1, }])
        try {
            let newColors = [];
            for (let item of products) {
                if (item.product_id == product_id) {
                    newColors.push("tomato");
                } else {
                    newColors.push("white");
                }
            }

            setColours(newColors);
        } catch (error) {
            console.log("ERROR : ", error);
        }

    }

    const loadProducts = async () => {
        let url = "https://www.rtfloodbma.com/api/banglen/product";
        try {
            let promise = await fetch(url);
            let p = await promise.json();
            let filtered_p = p.filter(function (item) {
                return whitelistProducts.includes(item.product_id);
            });
            setProducts(filtered_p);
        } catch (error) {
            console.log("ERROR : ", error);
        }
    }

    const loadPrice = async (product_id = "R11001") => {
        let url = "https://www.rtfloodbma.com/api/banglen/price?product_id=" + product_id;
        try {
            let promise = await fetch(url);
            let p = await promise.json();
            // console.log(p);
            setPrice(p);
            changeBackgroundColor(product_id);
        } catch (error) {
            console.log("ERROR : ", error);
        }
    }


    useEffect(function () {
        loadProducts();
        loadPrice();
    }, []);

    return (
        <View>
            <Text title3 semibold style={styles.titleView}>
                {t('ราคา')}
            </Text>
            <FlatList
                contentContainerStyle={{ paddingHorizontal: 10 }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={products}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        style={{ marginLeft: 15, backgroundColor: colours[index], borderWidth: 1, borderRadius: 20, padding: 8 }}
                        onPress={() => loadPrice(item.product_id)}
                    >
                        <Text style={{ fontSize: 16 }}>
                            {item.product_name.split(" ")[0]}
                        </Text>
                    </TouchableOpacity>
                )}
            />
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={{ height: 250, padding: 15 }} >
                    {price && (
                        <LineChart
                            data={{
                                // labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dex'],
                                labels: price.price_list.map(function (item, index) {
                                    return index;
                                }),
                                datasets: [
                                    {
                                        data: price.price_list.map(function (item) {
                                            return item.price_min;
                                        }),
                                        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                                        // strokeWidth: 2 // optional
                                    }
                                ],
                                legend: ["ราคา"] // optional

                            }}
                            width={Dimensions.get('window').width}
                            height={220}
                            chartConfig={{
                                backgroundColor: 'white',
                                backgroundGradientFrom: 'white',
                                backgroundGradientTo: 'white',
                                decimalPlaces: 2,
                                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            }}
                            style={{ margin: 10, }}
                        />
                    )}
                </View>
            </ScrollView>
        </View>
    );
}