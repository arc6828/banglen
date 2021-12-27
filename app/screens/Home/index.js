import React, { useEffect, useState } from 'react';
import {
  View,
  Animated,
  TouchableOpacity,
  FlatList,
  Dimensions
} from 'react-native';
import {
  Text,
  Icon,
  Card,
  Image,
  SafeAreaView,
} from '@components';
import { LineChart } from "react-native-chart-kit";
import { BaseStyle, Images, useTheme } from '@config';
import * as Utils from '@utils';
import styles from './styles';
import { UserData } from '@data';
import { useTranslation } from 'react-i18next';

export default function Home({ navigation }) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const [icons] = useState([
    {
      icon: 'calendar-alt',
      name: 'อากาศ',
      route: 'Hotel',
    },
    {
      icon: 'map-marker-alt',
      name: 'น้ำ',
      route: 'Tour',
    },
    {
      icon: 'car-alt',
      name: 'ดิน',
      route: 'OverViewCar',
    },
    {
      icon: 'plane',
      name: 'พืช',
      route: 'FlightSearch',
    },
    {
      icon: 'ship',
      name: 'สังคม',
      route: 'CruiseSearch',
    },
    {
      icon: 'bus',
      name: 'เศรษฐกิจ',
      route: 'BusSearch',
    },
    {
      icon: 'star',
      name: 'ราคา',
      route: 'DashboardEvent',
    },
    {
      icon: 'ellipsis-h',
      name: 'อื่นๆ',
      route: 'More',
    },
  ]);
  const [image] = useState(UserData[0].image);

  const [cardLine, setCardLine] = useState([
    {
      id: 1,
      keydataSet: [10, 20, 30, 40, 50, 60],
      name: 'ข้าว',
      station: 'สถานนี A จังหวัด ปทุมธานี',
      time: '18-12-2021 12.10 น',
      water: '109.78%',
      status: 'น้ำเต็มตลิ่ง',
      active: true,
    },
    {
      id: 2,
      keydataSet: [70, 80, 90, 100, 110, 120],
      name: 'ข้าวเหนียว',
      station: 'สถานนี A จังหวัด ปทุมธานี',
      time: '18-12-2021 12.10 น',
      water: '109.78%',
      status: 'น้ำเต็มตลิ่ง',
      active: false,
    },
    {
      id: 3,
      keydataSet: [130, 140, 150, 160, 170, 180],
      name: 'ข้าวจ้าว',
      station: 'สถานนี A จังหวัด ปทุมธานี',
      time: '18-12-2021 12.10 น',
      water: '109.78%',
      status: 'น้ำเต็มตลิ่ง',
      active: false,
    },
    {
      id: 4,
      keydataSet: [190, 200, 230, 240, 250, 260],
      name: 'ข้าวสาลี',
      station: 'สถานนี A จังหวัด ปทุมธานี',
      time: '18-12-2021 12.10 น',
      water: '109.78%',
      status: 'น้ำเต็มตลิ่ง',
      active: false,
    },

  ]);

  const [wether] = useState([
    {
      id: 1,
      day7: 'Monday',
      month: 'Dec',
      night: '24 C'
    },
    {
      id: 2,
      day7: 'Monday',
      month: 'Dec',
      night: '24 C'
    },
    {
      id: 3,
      day7: 'Monday',
      month: 'Dec',
      night: '24 C'
    },
    {
      id: 4,
      day7: 'Monday',
      month: 'Dec',
      night: '24 C'
    },
  ]);

  const [heightHeader, setHeightHeader] = useState(Utils.heightHeader());
  const deltaY = new Animated.Value(0);
  
  const [dataset, setDataSet] = useState([
    {
      data: [20, 45, 28, 80, 99, 43],
      strokeWidth: 1,
    },
  ]);

  const renderIconService = () => {
    return (
      <FlatList
        data={icons}
        numColumns={4}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.itemService}
              activeOpacity={0.9}
              onPress={() => {
                navigation.navigate(item.route);
              }}>
              <View
                style={[styles.iconContent, { backgroundColor: colors.card }]}>
                <Icon name={item.icon} size={18} color={colors.primary} solid />
              </View>
              <Text footnote grayColor numberOfLines={1}>
                {t(item.name)}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    );
  };

  const MyLineChart = () => {
    return (
      <View style={{ flex: 1 }}>
        <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: dataset
          }}
          width={Dimensions.get('window').width}
          height={220}
          chartConfig={{
            backgroundColor: 'white',
            backgroundGradientFrom: 'white',
            backgroundGradientTo: 'white',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          style={{
            margin: 10,

          }}
        />
      </View>
    );
  };

  const heightImageBanner = Utils.scaleWithPixel(140);
  const marginTopBanner = heightImageBanner - heightHeader;

  const [colours, setColours] = useState([]);


  const changeBackgroundColor = (keydataSet) => {
    setDataSet([{ data: keydataSet.keydataSet, strokeWidth: 1, }])

    let newColors = [];
    for (let item of cardLine) {
      if (item.id == keydataSet.id) {
        newColors.push("red");
      } else {
        newColors.push("lightgray");
      }
    }

    setColours(newColors);

  }

  useEffect(function () {
    setCardLine([
      {
        id: 1,
        keydataSet: [10, 20, 30, 40, 50, 60],
        name: 'ข้าว',
        station: 'สถานนี A จังหวัด ปทุมธานี',
        time: '18-12-2021 12.10 น',
        water: '109.78%',
        status: 'น้ำเต็มตลิ่ง',
        active: true,
      },
      {
        id: 2,
        keydataSet: [70, 80, 90, 100, 110, 120],
        name: 'ข้าวเหนียว',
        station: 'สถานนี A จังหวัด ปทุมธานี',
        time: '18-12-2021 12.10 น',
        water: '109.78%',
        status: 'น้ำเต็มตลิ่ง',
        active: false,
      },
      {
        id: 3,
        keydataSet: [130, 140, 150, 160, 170, 180],
        name: 'ข้าวจ้าว',
        station: 'สถานนี A จังหวัด ปทุมธานี',
        time: '18-12-2021 12.10 น',
        water: '109.78%',
        status: 'น้ำเต็มตลิ่ง',
        active: false,
      },
      {
        id: 4,
        keydataSet: [190, 200, 230, 240, 250, 260],
        name: 'ข้าวสาลี',
        station: 'สถานนี A จังหวัด ปทุมธานี',
        time: '18-12-2021 12.10 น',
        water: '109.78%',
        status: 'น้ำเต็มตลิ่ง',
        active: false,
      },

    ])
    changeBackgroundColor(cardLine[0]);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Animated.Image
        source={Images.trip3}
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
          ])}
          onContentSizeChange={() => setHeightHeader(Utils.heightHeader())}
          scrollEventThrottle={8}
          ListHeaderComponent={
            <View style={{ paddingHorizontal: 20 }}>
              <View
                style={[
                  styles.searchForm,
                  {
                    marginTop: marginTopBanner,
                    backgroundColor: colors.background,
                    borderColor: colors.border,
                    shadowColor: colors.border,
                  },
                ]}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Search')}
                  activeOpacity={0.9}>
                  <View
                    style={[
                      BaseStyle.textInput,
                      { backgroundColor: colors.card },
                    ]}>
                    <Text body1 grayColor>
                      {t('what_are_you_looking_for')}
                    </Text>
                  </View>
                </TouchableOpacity>
                {renderIconService()}
              </View>

            </View>
          }
          ListFooterComponent={
            <View>
              <View>
                <Text title3 semibold style={styles.titleView}>
                  {t('อากาศวันนี้')}
                </Text>
                <FlatList
                  contentContainerStyle={{ paddingLeft: 5, paddingRight: 20 }}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={wether}
                  keyExtractor={(item, index) => item.id}
                  renderItem={({ item, index }) => {
                    if (item.id === 1) {
                      return (
                        <View style={styles.contentCartPromotion}>
                          <Card style={[styles.promotionItem, { marginLeft: 15, width: 250 }]}>
                            <View style={{ marginTop: 10, marginBottom: 10 }}>
                              <Text title2 semibold style={{ fontSize: 16, marginLeft: 15 }}>
                                {item.day7}
                              </Text>
                              <Image source={image} style={styles.thumb} />
                              <Text title2 semibold style={{ fontSize: 16, marginLeft: 5, }}>
                                {item.month} - {item.night}
                              </Text>
                            </View>
                          </Card>
                        </View>
                      )
                    } else {
                      return (
                        <View style={styles.contentCartPromotion}>
                          <Card style={[styles.promotionItem, { marginLeft: 15 }]}>
                            <View style={{ marginTop: 10, marginBottom: 10 }}>
                              <Text title2 semibold style={{ fontSize: 16, marginLeft: 15 }}>
                                {item.day7}
                              </Text>
                              <Image source={image} style={styles.thumb} />
                              <Text title2 semibold style={{ fontSize: 16, marginLeft: 5, }}>
                                {item.month} - {item.night}
                              </Text>
                            </View>
                          </Card>
                        </View>
                      )
                    }
                  }}
                />
              </View>
              <View>
                <Text title3 semibold style={styles.titleView}>
                  {t('ราคา')}
                </Text>
                <FlatList
                  contentContainerStyle={{ paddingLeft: 5, paddingRight: 20 }}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={cardLine}
                  keyExtractor={(item, index) => item.id}
                  renderItem={({ item, index }) => (
                    <Card style={[styles.lineChart, { marginLeft: 15, backgroundColor: colours[index] }]}
                      onPress={() => changeBackgroundColor(item)}
                    >
                      <Text title2 semibold style={{ fontSize: 16 }}>
                        {item.name}
                      </Text>
                    </Card>
                  )}
                />
                <MyLineChart />
              </View>
              <View>
                <Text title3 semibold style={styles.titleView}>
                  {t('ระดับน้ำ')}
                </Text>
                <FlatList
                  contentContainerStyle={{ paddingLeft: 5, paddingRight: 20 }}
                  data={cardLine}
                  keyExtractor={(item, index) => item.id}
                  renderItem={({ item, index }) => (
                    <Card style={[styles.watherCard, { marginLeft: 15 }]} onPress={() => navigation.navigate('TourDetail')}>
                      <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ marginHorizontal: 10 }}>
                          <Text body1 semibold style={{ fontSize: 15 }}>
                            {item.water}
                          </Text>
                          <Text body1 semibold style={{ fontSize: 12 }}>
                            ของความจุ
                          </Text>
                        </View>
                        <View style={{ marginHorizontal: 40, }}>
                          <Text body1 semibold style={{ fontSize: 15 }}>
                            {item.station}
                          </Text>
                          <Text body1 semibold style={{ fontSize: 12 }}>
                            {item.time}
                          </Text>
                        </View>
                        <View style={{ marginHorizontal: 10, alignSelf: 'center' }}>
                          <Text body1 semibold style={{ fontSize: 15 }}>
                            {item.status}
                          </Text>
                        </View>
                      </View>
                    </Card>
                  )}
                />
              </View>
            </View>
          }
        />
      </SafeAreaView>
    </View>
  );
}
