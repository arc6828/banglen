import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { ScrollView, View, FlatList, Text, KeyboardAvoidingView, TextInput, Alert, TouchableWithoutFeedback, Keyboard, Platform, } from "react-native";
import { Avatar, Button, Card, Title, Paragraph, Divider, List, IconButton, Colors, ToggleButton, TextInput as PaperTextInput } from 'react-native-paper';
import * as Paper from 'react-native-paper';
import OutcomeStorage from "../../storages/OutcomeStorage";

export default function OutcomeForm(props) {

    const [value, setValue] = useState("");
    const [detail, setDetail] = useState("");
    const route = useRoute();
    const navigation = useNavigation();
    const { data, token } = route.params;
    const inputRef = useRef(null);
    const m = require("../../assets/jsons/outcome-menu.json");
    const menu = m.find((item) => {
        // console.log(item.title, data.title);
        return (item.title == data.title);
    }).details;

    useEffect(() => {
        console.log("mounted");
        //SET STATE
        if (data.id) {
            setValue(data.value);
            setDetail(data.detail);
        } else {
            setDetail(menu[0]);
        };

        //FOCUS ON TEXT INTPUT
        if (inputRef.current) setTimeout(() => inputRef.current.focus(), 50);
    }, []);

    const onSave = async () => {
        if (value.length == 0) { alert("กรุณาระบุจำนวน"); return; }
        if (!Number(value)) { alert("กรุณาระบุจำนวน"); return; }
        if (detail == null) { alert("กรุณาระบุรายละเอียดรายได้"); return; }

        let d = {
            id: data.id ? data.id : Math.random().toString(36).substring(2, 9),
            title: data.title,
            detail: detail,
            value: Number(value),
            unit: "บาท"
        };
        await OutcomeStorage.writeItem(token, d);
        navigation.navigate("Plan", { token: token });

    };

    const onComfirmToDelete = async () => {
        return Alert.alert(
            "ยืนยันการลบ?",
            "คุณแน่ใจหรือไม่ว่าจะลบรายการนี้?",
            [
                { text: "ยกเลิก", },
                { text: "ยืนยัน", onPress: () => { onRemove(); }, },
            ]
        );
    };

    const onRemove = async () => {

        let d = {
            id: data.id ? data.id : Math.random().toString(36).substring(2, 9),
            // title: data.title,
            // detail: data.detail,
            // value: Number(value),
            // unit: "บาท"
        };
        await OutcomeStorage.removeItem(token, d);
        navigation.navigate("Plan", { token: token });

    };

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{ padding: 10, flex: 1, justifyContent: "space-around" }}>
                    <View style={{ alignItems: "center" }}>
                        <Text style={{ fontSize: 20 }}>รายได้จาก{data.title}</Text>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ flexDirection: "row", padding: 10 }}>
                            <ToggleButton.Row onValueChange={value => setDetail(value)} value={detail} style={{}}>
                                {
                                    menu.map((item) => (
                                        <View key={item}>
                                            <ToggleButton
                                                style={{ width: 150, borderWidth: 0 }}
                                                icon={() => (<Text>{item}</Text>)} value={item}
                                            />
                                        </View>
                                    ))
                                }
                            </ToggleButton.Row>
                        </ScrollView>
                        <View style={{ flexDirection: "row", marginVertical: 10 }}>
                            <Text style={{ fontSize: 30 }}>฿</Text>
                            <TextInput
                                style={{ fontSize: 30 }}
                                keyboardType="numeric"
                                onChangeText={(text) => { setValue(text) }}
                                value={value.toString()}
                                ref={inputRef}
                            />
                        </View>
                        {/* <Text style={{ fontSize: 15, color: 'gray' }}>บาท</Text> */}
                        {/* <View style={{ flexDirection: "row", margin: 50 }}>
                    <PaperTextInput 
                    mode="flat"
                    style={{ flex : 1 }}
                        label="หมายเหตุ"

                    />
                </View> */}
                    </View>
                    <View style={{ padding: 10 }}>
                        <IconButton
                            icon="delete-circle"
                            color={Colors.gray500}
                            size={30}
                            onPress={() => {
                                console.log('Pressed');
                                onComfirmToDelete();
                            }}
                        />
                        <View style={{ flexDirection: "row" }}>
                            <Button
                                style={{ flex: 1 }}
                                icon="arrow-down-bold-circle"
                                mode="contained"
                                onPress={() => {
                                    console.log('Pressed');
                                    onSave();
                                }}
                            >
                                บันทึก
                            </Button>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

