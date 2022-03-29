import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ScrollView, View, FlatList, Text } from "react-native";
import { Avatar, Button, Card, Title, Paragraph, Divider, List } from 'react-native-paper';

export default function Outcome() {
    const navigation = useNavigation();
    const route = useRoute();
    const { token } = route.params;

    const menu = require("../../assets/jsons/outcome-menu.json");
    // [
    //     { "title": "ค่าแรงงาน", "icon": "arm-flex", "details": ["ค่าเตรียมดิน", "ค่าปลูก รวมค่าเตรียมพันธุ์", "ค่าดูแลรักษา", "ค่าเก็บเกี่ยว รวบรวม"] },
    //     { "title": "ค่าวัสดุ", "icon": "package-variant", "details": ["ค่าพันธุ์", "ค่าปุ๋ย", "ค่ายาปราบศัตรูพืชและวัชพืช", "ค่าวัสดุอื่นๆ น้ำมันเชื้อเพลิง และค่าซ่อมแซมอุปกรณ์"] },
    //     { "title": "ค่าเช่าที่ดิน", "icon": "map-marker", "details": ["ค่าเช่าที่ดิน ค่าเช่าบ้าน"] },
    //     { "title": "ค่าเสื่อมอุปกรณ์", "icon": "tools", "details": ["ค่าเสื่อมอุปกรณ์"] },
    //     // { "title": "ค่าเสียโอกาสเงินลงทุน", "icon": "finance" },
    //     // { "title": "ค่าเสียโอกาสอุปกรณ์", "icon": "washing-machine" },
    // ];
    const onSelect = async (item) => {
        let d = {
            // id: data.id ? data.id : Math.random().toString(36).substring(2, 9),
            title: item.title,
            detail: "",
            value: "",
            // unit: "บาท"
        };
        navigation.navigate("OutcomeForm", { data: d, token: token });
    };
    return (
        <View style={{ backgroundColor: '#eeeeee', padding: 10, flex: 1 }}>
            <FlatList
                ListHeaderComponent={() => (
                    <FlatList key="head"
                        data={menu}
                        numColumns={2}
                        keyExtractor={(item, index) => (index.toString())}
                        // columnWrapperStyle={{ flex : 1 }}
                        renderItem={({ item, index }) => (
                            <Card style={{ flex: 1, margin: 8 }} onPress={() => { onSelect(item); }}>
                                <Card.Title
                                    left={(props) => <Avatar.Icon {...props} icon={item.icon} />} />
                                <Card.Content>
                                    <Title>{item.title}</Title>
                                    <Paragraph style={{ color: "gray" }}>{item.details.join(", ")}</Paragraph>
                                </Card.Content>
                            </Card>
                        )}
                    />
                )}

                ListFooterComponent={() => (
                    <View key="foot">
                        {menu.map((menu_item) => (
                            <List.Section key={menu_item.title}>
                                <List.Subheader>{menu_item.title}</List.Subheader>
                                {menu_item.details.map((submenu_item) => (
                                    <View>
                                        <List.Item key={submenu_item} title={submenu_item} right={() => <List.Icon color="#000" icon="help-circle" />} />

                                        <Divider />
                                    </View>
                                ))}

                            </List.Section>
                        ))}

                    </View>
                )}

            />

        </View>
    );
}