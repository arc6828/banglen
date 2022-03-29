import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";

import { List } from 'react-native-paper';
import IncomeCard from "../../components/plan/IncomeCard";
import OutcomeCard from "../../components/plan/OutcomeCard";
import ProfitChart from "../../components/plan/ProfitChart";
import IncomeStorage from "../../storages/IncomeStorage";
import OutcomeStorage from "../../storages/OutcomeStorage";

export default function Plan() {

    const token = "test";
    const navigation = useNavigation();

    const [incomes, setIncomes] = useState([
        { "title": "ข้าว A", value: 300, unit: "บาท" },
        { "title": "ข้าว B", value: 300, unit: "บาท" },
        { "title": "ข้าว C", value: 300, unit: "บาท" },
    ]);
    const [outcomes, setOutcomes] = useState([
        { "title": "ค่าแรงงาน", value: 100, unit: "บาท" },
        { "title": "ค่าวัสดุ", value: 100, unit: "บาท" },
        { "title": "ค่าเสียโอกาสเงินลงทุน", value: 100, unit: "บาท" },
        { "title": "ค่าเช่าที่ดิน", value: 100, unit: "บาท" },
        { "title": "ค่าเสื่อมอุปกรณ์", value: 100, unit: "บาท" },
        { "title": "ค่าเสียโอกาสอุปกรณ์", value: 100, unit: "บาท" },
    ]);


    const loadData = async () => {
        let i = await IncomeStorage.readItems(token);
        let o = await OutcomeStorage.readItems(token);
        // console.log(i);
        setIncomes(i);
        setOutcomes(o);
    };

    //USE TO TRACKING STATE UPDATE or INITIALIZE STATE
    useEffect(() => {
        // console.log("Mount Plan");
        // loadData();
    }, []);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // do something
            console.log("Mount Plan Focus");
            loadData();
        });
        return unsubscribe;
    }, [navigation]);

    // console.log(incomes, outcomes);


    return (
        <ScrollView>
            <ProfitChart
                total_income={incomes.reduce((total, item) => (total + Number(item.value)), 0)}
                total_outcome={outcomes.reduce((total, item) => (total + Number(item.value)), 0)}
            />
            <IncomeCard data={incomes} token={token} />
            <OutcomeCard data={outcomes} token={token} />
        </ScrollView>
    );
}