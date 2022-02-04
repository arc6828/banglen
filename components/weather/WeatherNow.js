import React, { useEffect, useState } from 'react';
import { View, Animated, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { Text, Icon, Card, Image, SafeAreaView, } from '@components';
import { LineChart } from "react-native-chart-kit";
import { BaseStyle, Images, useTheme } from '@config';
import * as Utils from '@utils';
import styles from './styles';
// import styles from '../../screens/Home/styles';
// import axios from 'axios';
// import { UserData } from '@data';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import WeatherNext from '../../services/WeatherNext';
import Time from '../../helpers/Time';
import LineInformation from '../line/LineInformation';


export default function WeatherNow() {
  const navigation = useNavigation();
  //STANDARD VARIABLES
  const { t } = useTranslation();
  const { colors } = useTheme();
  //LOCAL VARIABLES
  const [weatherNow, setWeatherNow] = useState([]);
  const [todayNow, setTodayNow] = useState(null);
  // const url = "https://www.rtfloodbma.com/api/banglen/weather-now";
  const loadWeatherNow = async () => {
    let w = await WeatherNext.now();
    setWeatherNow(w.daily);

    let today = w.daily[0];
    setTodayNow(today);
    // console.log(Object.keys(today));
    //ALL INFO EXCEPT OBJECT
    // let info = Object.keys(today).map((key) => ({ "key": key, "value": today[key] }));
    // info = info.filter((item) => (typeof item.value != "object"));
    //CUSTOM INFO
    let info = {
      "สภาพอากาศ": (today ? today.weather[0].description : ''),
      "ความชื้น": (today ? today.humidity : ''),
      "ความดัน": (today ? today.pressure : ''),
      "ความเร็วลม": (today ? today.wind_speed : ''),
      "พระอาทิตย์ขึ้น-ตก": (today ? Time.justTime(today.sunrise) : '') + " / " + (today ? Time.justTime(today.sunset) : ''),
    };
    setInformation(info);
  }


  useEffect(() => {
    loadWeatherNow();
  }, []);

  const [information, setInformation] = useState([
    { title: 'Location', detail: 'Luxembourg' },
    { title: 'Duration', detail: '16 Days' },
    { title: 'Departure', detail: '08:00' },
    { title: 'Price per Participant', detail: '2,199.00 USD' },
    { title: 'Group size', detail: '3 - 20 people' },
    { title: 'Transportation', detail: 'Boat, Bicycle, Car' },
  ]);

  return (
    <View style={{ padding: 20 }}>

      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 60 }} >{Time.justTime()}</Text>
        <Text style={{ fontSize: 20 }} >{Time.justFullDate()}</Text>
        <View style={{ flexDirection: 'row', marginVertical: 10 }}>

          <Image
            source={{ uri: "https://openweathermap.org/img/w/" + (todayNow ? todayNow.weather[0].icon : '') + ".png" }}
            style={{ width: 90, height: 90 }}
          />

          <Text style={{ fontSize: 30, marginTop: 20 }} > {todayNow ? Number(todayNow.temp.min).toFixed(0) : ''} </Text>
          <Text style={{ fontSize: 30, marginTop: 20 }} > / </Text>
          <Text style={{ fontSize: 30, marginTop: 20 }} > {todayNow ? Number(todayNow.temp.max).toFixed(0) : ''} </Text>
          <Text style={{ fontSize: 30, marginTop: 20 }} > °C </Text>
        </View>
      </View>
      <View>
        <LineInformation data={information} />
      </View>
      {/* {information.map((item, index) => {
          return (
            <View style={[styles.lineInformation, {borderBottomColor: colors.border},]} key={'information' + index}>
              <Text body2 grayColor> {item.title} </Text>
              <Text body2 semibold accentColor> {item.detail} </Text>
            </View>
          );
        })} */}
    </View>
  );
}

