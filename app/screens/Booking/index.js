import React, { useState } from 'react';
import { View, TouchableOpacity, Animated, FlatList, } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';
import { HotelItem } from '@components';
import * as Utils from '@utils';
import { HotelData } from '@data';
import { BaseColor } from '@config';

import { SafeAreaView, Header } from '@components';

export default function Booking({ navigation }) {
  const [hotels] = useState(HotelData);
  const [heightHeader, setHeightHeader] = useState(Utils.heightHeader());
  const deltaY = new Animated.Value(0);
  const { t } = useTranslation();
  return (
    <View style={{ flex: 1 }}>
      <Header title={t('Your Lands')} />

      <SafeAreaView style={{ flex: 1 }} edges={['right', 'left', 'bottom']}>
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
          ListFooterComponent={
            <View>
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
                    // onPress={() => navigation.navigate('CostSubmit')}
                  />
                )}
              />
            </View>
          }
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('BookingDetail')}
          style={{
            backgroundColor: BaseColor.orangeColor,
            padding: 10,
            width: 50,
            height: 50,
            alignItems: "center",
            alignContent: "center",
            borderRadius: 100,
            position: 'absolute',
            right: 10,
            bottom: 10,
          }}
        >
          <Ionicons name='md-add' size={26} />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}
