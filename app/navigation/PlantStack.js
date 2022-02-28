import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Plant from '../../screens/Plant';
import PlantDetail from '../../screens/PlantDetail';

const Stack = createStackNavigator();

export default function PriceStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Plant" component={Plant} />
            <Stack.Screen name="PlantDetail" component={PlantDetail} />
        </Stack.Navigator>
    );
}

