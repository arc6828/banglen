import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Header, Icon } from "../app/components";
import { BaseStyle, Images, useTheme } from '@config';
import { useNavigation } from "@react-navigation/native";
import SupplierService from "../services/SupplierService";
import MyMapView from "../components/map/MyMapView";


export default function Supplier() {
    //BASIC
    const navigation = useNavigation();
    const { colors } = useTheme();
    // useEffect(() => { console.log("Enter Screen"); }, []);

    const [markers, setMarkers] = useState([]);

    const loadMarkers = async () => {
        let items = await SupplierService.getItems();
        items = items.map((item)=>{
            item.title = item.name;
            item.description = `${item.tambon}`;
            return item;
        })
        setMarkers(items);
        console.log(items);
    };
    useEffect(() => { 
        // let loc = await GPS.getLocation();
        // if (loc) {
            loadMarkers(); 
        // }
    }, []);

    return (
        <View style={{ flex : 1 }}>
            <Header
                title="จำหน่ายเมล็ดพันธุ์"
                renderLeft={() => (<Icon name="arrow-left" size={20} color={colors.primary} enableRTL={true} />)}
                onPressLeft={() => { navigation.goBack(); }}
            />
            <View style={{ flex: 1 }}>
                <MyMapView latitude={14.08007104} longitude={100.1744644} markers={markers} />
            </View>


            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20, paddingVertical : 10, borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
                                           
                    <Text style={{ fontSize: 20,color: "gray" }}>สถานที่</Text>
                </View>
                <FlatList
                    data={markers}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={() => { navigation.navigate("PlantDetail", { item: item }); }} >
                            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20, paddingVertical : 10, borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
                                
                                <View>
                                    <Text style={{ fontSize: 16, color: "tomato" }}>{item.name}</Text>
                                    {/* <Text style={{ color: "gray" }}>{item.tambon}</Text> */}
                                </View>
                                <Text style={{ fontSize: 16, color : "gray" }}> {item.tambon} </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => (item.id.toString())}
                />
            </View>
        </View>
    );
}