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
import Dam from '../../../services/Dam';

export default function WaterLevel() {
    //STANDARD VARIABLES
    const { t } = useTranslation();

    const [dams, setDams] = useState([]);
    const color_status = {
        "ต่ำมาก": "red",
        "ต่ำ": "orange",
        "ปานกลาง": "green",
        "สูง": "orange",
        "สูงมาก": "red",
        "ล้น": "darkred"
    };

    const loadDams = async () => {
        let data = await Dam.getItems();
        setDams(data);
    };

    useEffect(() => { loadDams(); }, []);

    return (
        <View>
            <Text title3 semibold style={styles.titleView}>
                {t('ระดับน้ำ')}
            </Text>
            <FlatList
                contentContainerStyle={{ paddingLeft: 5, paddingRight: 20 }}
                data={dams}
                keyExtractor={(item, index) => item.id.toString()}
                renderItem={({ item, index }) => (
                    // <Card style={[styles.watherCard, { marginLeft: 15 }]} onPress={() => navigation.navigate('TourDetail')}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', borderRadius: 10, borderWidth: 1, borderColor: 'gray', paddingVertical: 20, marginHorizontal: 20, marginVertical: 10 }}>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Text body1 semibold style={{ fontSize: 16 }}>
                                {parseInt(item.dam_storage_percent)}%
                            </Text>
                            <Text body1 semibold style={{ fontSize: 12, color: "gray" }}>
                                ของความจุ
                            </Text>
                        </View>
                        <View style={{ flex: 2 }}>
                            <Text body1 semibold style={{ fontSize: 16, color: "tomato" }}>
                                เขื่อน{item.dam.dam_name.th}
                            </Text>
                            <Text body1 semibold style={{ fontSize: 12, color: "gray" }}>
                                {item.dam_date}
                            </Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text body1 semibold style={{ fontSize: 16 , color : color_status[item.status]}}>
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