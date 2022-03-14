import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';
import { Text, Icon, Card, Image, SafeAreaView, } from '@components';
// import { LineChart } from "react-native-chart-kit";
import { BaseStyle, Images, useTheme } from '@config';
// import * as Utils from '@utils';
import styles from '../../screens/Home/styles';
// import axios from 'axios';
// import { UserData } from '@data';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

export default function HomeMenu(props) {
    //STANDARD VARIABLES
    const { t } = useTranslation();
    const { colors } = useTheme();

    //OTHER
    const navigation = useNavigation();
    const icons = [
        { icon: 'thermometer-half', name: 'อากาศ', route: 'Weather' },
        { icon: 'tint', name: 'น้ำ', route: 'Water' },
        { icon: 'globe-asia', name: 'ดิน', route: 'SoilTopTab' },
        { icon: 'leaf', name: 'พืช', route: 'Plant' },
        { icon: 'users', name: 'สังคม', route: 'Social' },
        { icon: 'bitcoin', name: 'เศรษฐกิจ', route: 'Economic' },
        { icon: 'calculator', name: 'คำนวณต้นทุน', route: 'Plan' },
        { icon: 'ellipsis-h', name: 'อื่นๆ', route: 'Others' }
    ];

    return (
        <View style={{ paddingHorizontal: 20 }}>
            <View
                style={[
                    styles.searchForm,
                    {
                        marginTop: props.marginTopBanner,
                        backgroundColor: colors.background,
                        borderColor: colors.border,
                        shadowColor: colors.border,
                    },
                ]}>
                <TouchableOpacity
                    // onPress={() => navigation.navigate('Search')}
                    activeOpacity={0.9}>
                    <View style={[BaseStyle.textInput, { backgroundColor: colors.card }]}>
                        <Text body1 grayColor> {t('what_are_you_looking_for')} </Text>
                    </View>
                </TouchableOpacity>
                <FlatList
                    data={icons}
                    numColumns={4}
                    keyExtractor={(item, index) => item.name.toString()}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                style={styles.itemService}
                                activeOpacity={0.9}
                                onPress={() => { navigation.navigate(item.route); }}>
                                <View style={[styles.iconContent, { backgroundColor: colors.card }]}>
                                    <Icon name={item.icon} size={18} color={colors.primary} solid />
                                </View>
                                <Text footnote grayColor numberOfLines={1}> {t(item.name)} </Text>
                            </TouchableOpacity>
                        );
                    }}
                />
            </View>

        </View>
    );

}