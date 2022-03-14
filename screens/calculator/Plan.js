import React from "react";
import { ScrollView, View } from "react-native";

import { List } from 'react-native-paper';
import Income from "../../components/plan/Income";
import Outcome from "../../components/plan/Outcome";
import ProfitChart from "../../components/plan/ProfitChart";

export default function Plan(){
    return (
        <ScrollView>
            <ProfitChart />
            <Income />
            <Outcome />
            
        </ScrollView>
    );
}