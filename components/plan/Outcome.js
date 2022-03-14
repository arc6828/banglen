import React from "react";
import { Text, View } from "react-native";
import { Divider, List, Avatar, Card, IconButton } from 'react-native-paper';

export default function Outcome() {
    const [expanded, setExpanded] = React.useState(true);
    const cost = [
        { "title": "ค่าแรงงาน", value: 100, unit: "บาท" },
        { "title": "ค่าวัสดุ", value: 100, unit: "บาท" },
        { "title": "ค่าเสียโอกาสเงินลงทุน", value: 100, unit: "บาท" },
        { "title": "ค่าเช่าที่ดิน", value: 100, unit: "บาท" },
        { "title": "ค่าเสื่อมอุปกรณ์", value: 100, unit: "บาท" },
        { "title": "ค่าเสียโอกาสอุปกรณ์", value: 100, unit: "บาท" },
    ];

    const handlePress = () => setExpanded(!expanded);
    return (
        <View style={{ margin: 20, borderRadius: 10, backgroundColor: "#eeeeee" }}>
            <List.Section style={{ padding: 20 }}>
                <List.Accordion
                    title="ค่าใช้จ่าย"
                // left={props => <List.Icon {...props} icon="folder" />}

                >
                    {
                        cost.map((item) => (
                            <List.Item
                                key={item.title}
                                title={item.title}
                                right={props => (
                                    <View style={{ flexDirection: "row" }}>
                                        <Text style={{ fontSize: 20 }}>{item.value} </Text>
                                        <Text style={{ fontSize: 20, marginHorizontal: 5 }}>{item.unit}</Text>
                                        <List.Icon {...props} icon="chevron-right" />

                                    </View>
                                )}
                            />
                        ))

                    }

                </List.Accordion>



            </List.Section>
            <Divider />
            <View style={{ padding: 20 }}>
                <Card.Title
                    title={cost.reduce((total, item) => (total + item.value), 0) + " บาท"}
                    subtitle="รวมค่าใช้จ่าย"
                    left={(props) => <Avatar.Icon {...props} icon="cash" />}
                    right={(props) => <IconButton {...props} size={50} color="tomato" icon="plus-circle-outline" onPress={() => { }} />}
                />
            </View>
        </View>

    );
}