import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Price from '../../screens/Price';
import PriceDetail from '../../screens/PriceDetail';

const Stack = createStackNavigator();

export default function PriceStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Price" component={Price} />
            <Stack.Screen name="PriceDetail" component={PriceDetail} />
        </Stack.Navigator>
    );
}

