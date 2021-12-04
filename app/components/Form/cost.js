import React, { useState } from 'react';
import {
  View,
  Animated,
  FlatList,
} from 'react-native';
import {
  HotelItem,
  SafeAreaView,
} from '@components';
import * as Utils from '@utils';
import { HotelData } from '@data';

export default function Cost(props) {
  const { setCurrentStep,setIsShowData } = props

  const [hotels] = useState(HotelData);
  const [heightHeader, setHeightHeader] = useState(Utils.heightHeader());
  const deltaY = new Animated.Value(0);

  return (
    <View style={{ flex: 1 }}>
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
                    onPress={() => setCurrentStep(2)}
                  />
                )}
              />
            </View>
          }
        />
      </SafeAreaView>
    </View>
  )
}
