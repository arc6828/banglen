import React, { useEffect, useState } from 'react';
import { View, Animated, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { Text, Icon, Card, Image, SafeAreaView, } from '@components';
import { LineChart } from "react-native-chart-kit";
import { BaseStyle, Images, useTheme } from '@config';
import * as Utils from '@utils';
// import styles from './styles';
import styles from '../../screens/Home/styles';
// import axios from 'axios';
// import { UserData } from '@data';
import { useTranslation } from 'react-i18next';


export default function WeatherNow() {
  //STANDARD VARIABLES
  const { t } = useTranslation();
  //LOCAL VARIABLES
  const [weatherNow, setWeatherNow] = useState([]);
  const url = "https://www.rtfloodbma.com/api/banglen/weather-now";
  const loadWeatherNow = async () => {
    try {
      let promise = await fetch(url);
      let data = await promise.json();
      setWeatherNow(data.daily);
    } catch (error) {
      console.log("ERROR : ", error);
    }
  }
  const renderItemWeatherNow = ({ item, index }) => {
    // console.log(item)
    if (index == 0) {
      return (
        <View style={[styles.contentCartPromotion, { marginLeft: 10 }]}>
          <View style={{ width: 250, height: 180, borderWidth: 1, borderRadius: 10, borderColor: 'gray', padding: 10, justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <View style={{}}>
                <Image
                  source={{ uri: "https://openweathermap.org/img/w/" + item.weather[0].icon + ".png" }}
                  style={{ width: 80, height: 80, borderRadius: 80 / 2 }}
                />
              </View>
              <View style={{ alignItems: 'center' }}>
                <View style={{ borderWidth: 1, borderRadius: 13, borderColor: 'gray', padding: 3 }}>
                  <Text style={{ fontSize: 16 }}> {(new Date(item.dt * 1000)).toString().split(" ")[0]} </Text>
                </View>
                {/* <Text style={{ fontSize: 16 }}> { (new Date(item.dt)).toString() } </Text> */}

                <Text style={{ fontSize: 15, marginVertical: 5 }}> กลางคืน {item.temp.night} C </Text>
                <Text style={{ fontSize: 15 }}> กลางวัน {item.temp.day} C </Text>
              </View>

            </View>
          </View>
        </View>
      )
    } else {
      return (
        <View style={[styles.contentCartPromotion, { marginLeft: 10 }]}>
          <View style={{ width: 130, height: 180, borderWidth: 1, borderRadius: 10, borderColor: 'gray', padding: 10, justifyContent: 'center' }}>
            <View style={{ alignItems: 'center' }} >
              <View style={{ borderWidth: 1, borderRadius: 13, borderColor: 'gray', padding: 3 }}>
                <Text style={{ fontSize: 16 }}> {(new Date(item.dt * 1000)).toString().split(" ")[0]} </Text>
              </View>
              {/* <Text style={{ fontSize: 16 }}> { (new Date(item.dt)).toString() } </Text> */}
              <Image
                source={{ uri: "https://openweathermap.org/img/w/" + item.weather[0].icon + ".png" }}
                style={{ width: 80, height: 80, borderRadius: 80 / 2 }}
              />
              <Text style={{ marginVertical: 5 }}> กลางคืน {item.temp.night} C </Text>
              <Text style={{}}> กลางวัน {item.temp.day} C </Text>
            </View>
          </View>
        </View>
      );
    }
  };


  useEffect(() => {
    loadWeatherNow();
  }, []);

  return (
    <View style={{ paddiongHorizontal: 20 }}>
      <Text title3 semibold style={styles.titleView}>
        {t('อากาศวันนี้')}
      </Text>
      <FlatList
        contentContainerStyle={{ paddingHorizontal: 10}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={weatherNow}
        renderItem={renderItemWeatherNow}
        keyExtractor={(item) => item.dt}
      />
    </View>
  );
}

