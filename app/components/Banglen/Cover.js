import React, { useEffect, useState } from 'react';
import { View, Animated, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { Text, Icon, Card, Image, SafeAreaView, } from '@components';
import { LineChart } from "react-native-chart-kit";
import { BaseStyle, Images, useTheme } from '@config';
import * as Utils from '@utils';
import styles from '../../screens/Home/styles';
// import axios from 'axios';
// import { UserData } from '@data';
import { useTranslation } from 'react-i18next';

export default function Cover(props) {
    //STANDARD VARIABLES
    const { t } = useTranslation();
    const { colors } = useTheme();
    // const [heightHeader, setHeightHeader] = useState(Utils.heightHeader());
    const deltaY = new Animated.Value(0);
    const heightImageBanner = Utils.scaleWithPixel(140);
    const marginTopBanner = heightImageBanner - props.heightHeader;
    return (

        // <View>
            <Animated.Image
                source={Images.trip1}
                style={[
                    styles.imageBackground,
                    {
                        height: deltaY.interpolate({
                            inputRange: [
                                0,
                                Utils.scaleWithPixel(100),
                                Utils.scaleWithPixel(100),
                            ],
                            outputRange: [heightImageBanner, props.heightHeader, 0],
                        }),
                    },
                ]}
            />
        // </View>
    );
}