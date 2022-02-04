import React from 'react';
import { View } from 'react-native';
import { Text, Icon, Card, Image, SafeAreaView, } from '@components';
import { BaseStyle, Images, useTheme } from '@config';
import styles from './styles';

export default function LineInformation(props) {
    //STANDARD VARIABLES
    const { colors } = useTheme();
    //DATA
    if(!props.data) return <View></View>;
    let a = Object.keys(props.data).map((key) => ({ "key": key, "value": props.data[key] }));
    const data = a.filter((item) => (typeof item.value != "object"));
    //UI
    // console.log(data);
    return data.map((item) => (
        <View key={item.key} style={[styles.lineInformation, { borderBottomColor: colors.border },]}>
            <Text body2 grayColor> {item.key} </Text>
            <Text body2 semibold accentColor> {item.value} </Text>
        </View>
    ));

}