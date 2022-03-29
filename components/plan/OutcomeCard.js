import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { Divider, List, Avatar, Card, IconButton } from 'react-native-paper';

export default function OutcomeCard(props) {
    const [expanded, setExpanded] = React.useState(true);
    const { data, token } = props;
    const navigation = useNavigation();

    const handlePress = () => setExpanded(!expanded);
    return (
        <View style={{ margin: 20, borderRadius: 10, backgroundColor: "#eeeeee" }}>
            <List.Section style={{ padding: 20 }}>
                <List.Accordion title="ค่าใช้จ่าย" >
                    {
                        data.map((item,index) => (
                            <List.Item
                                onPress={() => {
                                    navigation.navigate("OutcomeForm", { data: item, token: token });
                                }}
                                key={index.toString()}
                                title={item.title}
                                description={item.detail ? item.detail : ""}
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
                    title={data.reduce((total, item) => (total + item.value), 0) + " บาท"}
                    subtitle="รวมค่าใช้จ่าย"
                    left={(props) => <Avatar.Icon {...props} icon="arrow-left-box" />}
                    right={(props) => <IconButton {...props} size={50} color="tomato" icon="plus-circle-outline" onPress={() => { navigation.navigate("Outcome", { token: token }); }} />}
                />
            </View>
        </View>

    );
}