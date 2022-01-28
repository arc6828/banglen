import React, { useEffect, useState } from 'react';
import { View, Animated, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { Text, Icon, Card, Image, SafeAreaView, } from '@components';
import { BaseStyle, Images, useTheme } from '@config';
import * as Utils from '@utils';
import styles from './styles';
// import axios from 'axios';
// import { UserData } from '@data';
import { useTranslation } from 'react-i18next';
import HomeMenu from '../../components/Banglen/HomeMenu';
import WeatherNow from '../../components/Banglen/WeatherNow';
import Price from '../../components/Banglen/Price';
import WaterLevel from '../../components/Banglen/WaterLevel';

export default function Home({ navigation }) {
  //STANDARD VARIABLES
  // const { t } = useTranslation();
  // const { colors } = useTheme();
  const [heightHeader, setHeightHeader] = useState(Utils.heightHeader());
  const deltaY = new Animated.Value(0,{});
  const heightImageBanner = Utils.scaleWithPixel(140);
  const marginTopBanner = heightImageBanner - heightHeader;

  useEffect(function(){
    console.log("MOUNT : Welcome Home!!!");

    return ()=>{ console.log("UNMOUNT"); }
  },[]);
  
  return (
    <View style={{ flex: 1 }}>
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
              outputRange: [heightImageBanner, heightHeader, 0],
            }),
          },
        ]}
      />
      <SafeAreaView style={{ flex: 1 }} edges={['right', 'left']}>
        <FlatList
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: { y: deltaY },
              },
            },
          ],{ useNativeDriver : false })}
          onContentSizeChange={() => setHeightHeader(Utils.heightHeader())}
          scrollEventThrottle={8}
          ListHeaderComponent={<HomeMenu marginTopBanner={marginTopBanner} />}
          ListFooterComponent={
            <View>
              <WeatherNow />              
              <Price />
              <WaterLevel />
            </View>
          }
        />
      </SafeAreaView>
    </View>
  );
}
