import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Header, Icon } from "../app/components";
import { BaseStyle, Images, useTheme } from '@config';
import { useNavigation } from "@react-navigation/native";
import MillService from "../services/MillService";
import MyMapView from "../components/map/MyMapView";


export default function Mill() {
    //BASIC
    const navigation = useNavigation();
    const { colors } = useTheme();
    useEffect(() => { console.log("Enter Screen"); }, []);

    const [markers, setMarkers] = useState([]);

    const loadMarkers = async () => {
        let items = await MillService.getItems();
        items = items.map((item)=>{
            item.title = item.mill;
            item.description = `กำลังการผลิต ${item.yield} ตัน/วัน (${item.tambon})`;
            return item;
        })
        setMarkers(items);
        console.log(items);
    };
    useEffect(() => { loadMarkers(); }, []);

    return (
        <View style={{ flex: 1 }}>
            <Header
                title="รับซื้อข้าวเปลือก"
                renderLeft={() => (<Icon name="arrow-left" size={20} color={colors.primary} enableRTL={true} />)}
                onPressLeft={() => { navigation.goBack(); }}
            />

            <View style={{ flex: 1 }}>
                <MyMapView latitude={14.08007104} longitude={100.1744644} markers={markers} />
            </View>


            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20, paddingVertical : 10, borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
                    {/* <Icon style={{ padding: 0 }} name="star" size={15} color={Math.round(Math.random()) ? colors.primary : colors.border} enableRTL={true} /> */}
                    {/* <Image style={{ width: 50, height: 50 }} source={{ uri: "https://raw.githubusercontent.com/arc6828/banglen/main/assets/images/rice/" + item.image }} /> */}
                   
                        
                    <Text style={{ fontSize: 20,color: "gray" }}>โรงสี</Text>
                    <Text style={{ fontSize: 20,color: "gray" }}> กำลังการผลิต (ตัน/วัน) </Text>
                </View>
                <FlatList
                    data={markers}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={() => { navigation.navigate("PlantDetail", { item: item }); }} >
                            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20, paddingVertical : 10, borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
                                {/* <Icon style={{ padding: 0 }} name="star" size={15} color={Math.round(Math.random()) ? colors.primary : colors.border} enableRTL={true} /> */}
                                {/* <Image style={{ width: 50, height: 50 }} source={{ uri: "https://raw.githubusercontent.com/arc6828/banglen/main/assets/images/rice/" + item.image }} /> */}
                                <View>
                                    <Text style={{ fontSize: 20, color: "tomato" }}>{item.mill}</Text>
                                    <Text style={{ color: "gray" }}>{item.tambon}</Text>
                                </View>
                                <Text style={{ fontSize: 20 }}> {item.yield} </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => (item.id.toString())}
                />
            </View>


        </View>);
}