import React, { useState } from 'react';
import {
  View,
  Animated,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {
  Image,
  Text,
  Icon,
  HotelItem,
  Card,
  Button,
  SafeAreaView,
  EventCard,
} from '@components';
import { BaseStyle, Images, useTheme } from '@config';
import * as Utils from '@utils';
import styles from './styles';
import { PromotionData, TourData, HotelData } from '@data';
import { useTranslation } from 'react-i18next';

export default function Home({ navigation }) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const [icons] = useState([
    {
      icon: 'calendar-alt',
      name: 'hotels',
      route: 'Hotel',
    },
    {
      icon: 'map-marker-alt',
      name: 'tours',
      route: 'Tour',
    },
    {
      icon: 'car-alt',
      name: 'car',
      route: 'OverViewCar',
    },
    {
      icon: 'plane',
      name: 'flight',
      route: 'FlightSearch',
    },
    {
      icon: 'ship',
      name: 'cruise',
      route: 'CruiseSearch',
    },
    {
      icon: 'bus',
      name: 'bus',
      route: 'BusSearch',
    },
    {
      icon: 'star',
      name: 'event',
      route: 'DashboardEvent',
    },
    {
      icon: 'ellipsis-h',
      name: 'more',
      route: 'More',
    },
  ]);

  const [hotels] = useState(HotelData);
  const [heightHeader, setHeightHeader] = useState(Utils.heightHeader());
  const deltaY = new Animated.Value(0);

  /**
   * @description Show icon services on form searching
   * @author Passion UI <passionui.com>
   * @date 2019-08-03
   * @returns
   */
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

  const heightImageBanner = Utils.scaleWithPixel(140);
  const marginTopBanner = heightImageBanner - heightHeader;

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
              <View style={styles.titleView}>
                <Text title3 semibold>
                  {t('promotion')}
                </Text>
                <Text body2 grayColor>
                  {t('let_find_promotion')}
                </Text>
                <Image source={Images.banner1} style={styles.promotionBanner} />
                <View style={[styles.line, { backgroundColor: colors.border }]} />
              </View>
              <FlatList
                style={{ paddingLeft: 5, paddingRight: 20 }}

                data={hotels}
                keyExtractor={(item, index) => item.id}
                renderItem={({ item, index }) => (
                  <HotelItem
                    grid
                    image={item.image}
                    name={item.name}
                    location={item.location}
                    price={item.price}
                    available={item.available}
                    rate={item.rate}
                    rateStatus={item.rateStatus}
                    numReviews={item.numReviews}
                    services={item.services}
                    style={{ marginLeft: 15, marginBottom: 15 }}
                    onPress={() => navigation.navigate('HotelDetail')}
                  />
                )}
              />
            </View>
          }
        />
      </SafeAreaView>
    </View>
  );
}
