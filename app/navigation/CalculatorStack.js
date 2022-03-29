import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Plan from '../../screens/calculator/Plan';
import Income from '../../screens/calculator/Income';
import Outcome from '../../screens/calculator/Outcome';
import IncomeForm from '../../screens/calculator/IncomeForm';
import OutcomeForm from '../../screens/calculator/OutcomeForm';

const Stack = createStackNavigator();

export default function CalculatorStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Plan" component={Plan} options={{  headerShown: true, title: "คำนวณต้นทุนการปลูก", }}  />
            <Stack.Screen name="Income" component={Income} options={{  headerShown: true, title: "รายได้", }}  />
            <Stack.Screen name="IncomeForm" component={IncomeForm} options={{  headerShown: true, title: "บันทึกรายได้", }}  />
            <Stack.Screen name="Outcome" component={Outcome} options={{  headerShown: true, title: "ค่าใช้จ่าย", }}  />
            <Stack.Screen name="OutcomeForm" component={OutcomeForm} options={{  headerShown: true, title: "บันทึกค่าใช้จ่าย", }}  />

            
        </Stack.Navigator>
    );
}

