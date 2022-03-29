import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ScrollView, View, FlatList, Text } from "react-native";
import { Avatar, Button, Card, Title, Paragraph, Divider, List } from 'react-native-paper';

export default function Income(props) {
    const navigation = useNavigation();
    const route = useRoute();
    const { token } = route.params;

    const menu = require("../../assets/jsons/income-menu.json");
    // [
    //     { "title": "ขายสินค้า", "icon": "cash", "details": ["ขายข้าวเปลือก","ขายเมล็ดพันธ์ุ"] },
    //     { "title": "อื่นๆ", "icon": "package-variant", "details": ["รายได้จากช่องทางอื่นๆ ที่ไม่เกี่ยวกับการปลูก"] },
        
    //     // { "title": "ค่าเสียโอกาสเงินลงทุน", "icon": "finance" },
    //     // { "title": "ค่าเสียโอกาสอุปกรณ์", "icon": "washing-machine" },
    // ];

    const onSelect = async (item)=>{
        let d = {
            // id: data.id ? data.id : Math.random().toString(36).substring(2, 9),
            title: item.title,
            detail: "",
            value: "",
            // unit: "บาท"
        };
        navigation.navigate("IncomeForm", { data : d, token : token });
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
                            <Card style={{ flex: 1, margin: 8 }} onPress={()=>{ onSelect(item);  }}>
                                <Card.Title
                                    left={(props) => <Avatar.Icon {...props} icon={item.icon} />} />
                                <Card.Content>
                                    <Title>{item.title}</Title>
                                    <Paragraph style={{ color : "gray" }}>{item.details.join(", ")}</Paragraph>
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