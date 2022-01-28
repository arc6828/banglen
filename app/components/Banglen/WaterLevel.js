import React, { useEffect, useState } from 'react';
import { View, Animated, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { Text, Icon, Card, Image, SafeAreaView, } from '@components';
import { LineChart } from "react-native-chart-kit";
import { BaseStyle, Images, useTheme } from '@config';
import * as Utils from '@utils';
import styles from '../../screens/Home/styles';
// import axios from 'axios';
// import { UserData } from '@data';
import { useTranslation } from 'react-i18next';

export default function WaterLevel() {
    //STANDARD VARIABLES
    const { t } = useTranslation();
    
    //LOCAL VARIABLES
    const [dataset, setDataSet] = useState([
        {
            data: [20, 45, 28, 80, 99, 43],
            strokeWidth: 1,
        },
    ]);

    // const [image] = useState(UserData[0].image);
    

    const MyLineChart = () => {
        return (
            <View style={{ flex: 1 }}>
                <LineChart
                    data={{
                        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                        datasets: dataset
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
                    style={{
                        margin: 10,

                    }}
                />
            </View>
        );
    };



    const [colours, setColours] = useState([]);


    const [cardLine, setCardLine] = useState([
        {
            id: 1,
            keydataSet: [10, 20, 30, 40, 50, 60],
            name: 'ข้าว',
            station: 'สถานนี A จังหวัด ปทุมธานี',
            time: '18-12-2021 12.10 น',
            water: '109.78%',
            status: 'น้ำเต็มตลิ่ง',
            active: true,
        },
        {
            id: 2,
            keydataSet: [70, 80, 90, 100, 110, 120],
            name: 'ข้าวเหนียว',
            station: 'สถานนี A จังหวัด ปทุมธานี',
            time: '18-12-2021 12.10 น',
            water: '109.78%',
            status: 'น้ำเต็มตลิ่ง',
            active: false,
        },
        {
            id: 3,
            keydataSet: [130, 140, 150, 160, 170, 180],
            name: 'ข้าวจ้าว',
            station: 'สถานนี A จังหวัด ปทุมธานี',
            time: '18-12-2021 12.10 น',
            water: '109.78%',
            status: 'น้ำเต็มตลิ่ง',
            active: false,
        },
        {
            id: 4,
            keydataSet: [190, 200, 230, 240, 250, 260],
            name: 'ข้าวสาลี',
            station: 'สถานนี A จังหวัด ปทุมธานี',
            time: '18-12-2021 12.10 น',
            water: '109.78%',
            status: 'น้ำเต็มตลิ่ง',
            active: false,
        },

    ]);


    const changeBackgroundColor = (keydataSet) => {
        setDataSet([{ data: keydataSet.keydataSet, strokeWidth: 1, }])

        let newColors = [];
        for (let item of cardLine) {
            if (item.id == keydataSet.id) {
                newColors.push("red");
            } else {
                newColors.push("lightgray");
            }
        }

        setColours(newColors);

    }
    useEffect(function () {
        setCardLine([
            {
                id: 1,
                keydataSet: [10, 20, 30, 40, 50, 60],
                name: 'ข้าว',
                station: 'สถานนี A จังหวัด ปทุมธานี',
                time: '18-12-2021 12.10 น',
                water: '109.78%',
                status: 'น้ำเต็มตลิ่ง',
                active: true,
            },
            {
                id: 2,
                keydataSet: [70, 80, 90, 100, 110, 120],
                name: 'ข้าวเหนียว',
                station: 'สถานนี A จังหวัด ปทุมธานี',
                time: '18-12-2021 12.10 น',
                water: '109.78%',
                status: 'น้ำเต็มตลิ่ง',
                active: false,
            },
            {
                id: 3,
                keydataSet: [130, 140, 150, 160, 170, 180],
                name: 'ข้าวจ้าว',
                station: 'สถานนี A จังหวัด ปทุมธานี',
                time: '18-12-2021 12.10 น',
                water: '109.78%',
                status: 'น้ำเต็มตลิ่ง',
                active: false,
            },
            {
                id: 4,
                keydataSet: [190, 200, 230, 240, 250, 260],
                name: 'ข้าวสาลี',
                station: 'สถานนี A จังหวัด ปทุมธานี',
                time: '18-12-2021 12.10 น',
                water: '109.78%',
                status: 'น้ำเต็มตลิ่ง',
                active: false,
            },

        ])
        changeBackgroundColor(cardLine[0]);
    }, []);
    return (
        <View>
            <Text title3 semibold style={styles.titleView}>
                {t('ระดับน้ำ')}
            </Text>
            <FlatList
                contentContainerStyle={{ paddingLeft: 5, paddingRight: 20 }}
                data={cardLine}
                keyExtractor={(item, index) => item.id.toString()}
                renderItem={({ item, index }) => (
                    // <Card style={[styles.watherCard, { marginLeft: 15 }]} onPress={() => navigation.navigate('TourDetail')}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', borderRadius: 10, borderWidth: 1, borderColor: 'gray', padding: 20, marginHorizontal: 20, marginVertical: 10 }}>
                        <View style={{ marginHorizontal: 10 }}>
                            <Text body1 semibold style={{ fontSize: 15 }}>
                                {item.water}
                            </Text>
                            <Text body1 semibold style={{ fontSize: 12 }}>
                                ของความจุ
                            </Text>
                        </View>
                        <View style={{ marginHorizontal: 10, }}>
                            <Text body1 semibold style={{ fontSize: 15 }}>
                                {item.station}
                            </Text>
                            <Text body1 semibold style={{ fontSize: 12 }}>
                                {item.time}
                            </Text>
                        </View>
                        <View style={{ marginHorizontal: 10, alignSelf: 'center' }}>
                            <Text body1 semibold style={{ fontSize: 15 }}>
                                {item.status}
                            </Text>
                        </View>
                    </View>
                    // </Card>
                )}
            />
        </View>
    );
}