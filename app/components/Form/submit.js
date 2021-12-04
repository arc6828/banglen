import React, { useState } from 'react';
import { RefreshControl, FlatList, View, TouchableOpacity } from 'react-native';
import * as Utils from '@utils';
import { BaseStyle, useTheme } from '@config';
import { UserData } from '@data';

import { SafeAreaView, Image, Text } from '@components';
import styles from './styles';
import { useTranslation } from 'react-i18next';

export default function Submit(props) {
  const { colors } = useTheme();
  const { t } = useTranslation();
  const [heightHeader, setHeightHeader] = useState(Utils.heightHeader());

  const {
    stateEvent,
    totalCosts,
    totalIncomes,
    totalProfits,
  } = props;
  const [image] = useState(UserData[0].image);

  const Separator = () => (
    <View style={styles.separator} />
  );

  const heightImageBanner = Utils.scaleWithPixel(140);
  const marginTopBanner = heightImageBanner - heightHeader;
  return (

    <SafeAreaView edges={['right', 'left']}>
      <TouchableOpacity
        style={styles.contain}
        onPress={() => { }}
        activeOpacity={0.9}>
        <View style={[styles.contentLeft]}>
          <Image source={image} style={styles.thumb} />
          <View>
            <Text headline semibold numberOfLines={1}>
              Your Land Cost (ข้าวหอมมะลิ)
            </Text>
            <Text footnote grayColor numberOfLines={1}>
              พฤษภาคม 2564 - ตุลาคม 2564
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={[styles.submitViewTitle, { marginTop: 20 }]}>
        <Text style={styles.submitTextTitle}>พื้นที่เพาะปลูก (ไร่ / งาน / ตร.วา)</Text>
      </View>
      <View style={[styles.submitViewTitle, { marginTop: 20 }]}>
        <Text style={styles.submitTextShow}>{stateEvent.farmland} / 100 / 12</Text>
        <Text>{stateEvent.farmname}</Text>
      </View>
      <Separator />
      <View style={[styles.submitViewContent, { marginTop: 10 }]}>
        <Text>รายได้ที่คาดว่าจะได้รับ (บาท/ปี)</Text>
        <Text>+ {totalIncomes}</Text>
      </View>
      <View style={[styles.submitViewContent, { marginTop: 10 }]}>
        <Text>กำไรที่คาดว่าจะได้รับ (บาท/ปี)</Text>
        <Text>+ {totalProfits}</Text>
      </View>
      <View style={[styles.submitViewContent, { marginTop: 10 }]}>
        <Text>ค่าใช้จ่ายทั้งหมด (บาท/ปี)</Text>
        <Text>+ {totalCosts}</Text>
      </View>
      <View style={[styles.submitViewContent, { marginTop: 10 }]}>
        <Text>ผลผลิต (กก)</Text>
        <Text>{stateEvent.product}</Text>
      </View>
      <View style={[styles.submitViewContent, { marginTop: 10 }]}>
        <Text>ราคาขาย (บาท/ตัน)</Text>
        <Text>{stateEvent.price}</Text>
      </View>
      <View
        style={[
          styles.searchForm,
          {
            marginTop: 5,
            backgroundColor: colors.background,
            borderColor: colors.border,
            shadowColor: colors.border,
          },
        ]}>
        <Text black>
          {t('ค่าใช้จ่าย')}
        </Text>
      </View>
      <View style={[styles.submitViewContent, { marginTop: 10 }]}>
        <Text>ค่าเตรียมดิน (บาท)</Text>
        <Text>{stateEvent.soilcost}</Text>
      </View>
      <View style={[styles.submitViewContent, { marginTop: 10 }]}>
        <Text>ค่าปลูก (บาท)</Text>
        <Text>{stateEvent.plantingcost}</Text>
      </View>
      <View style={[styles.submitViewContent, { marginTop: 10 }]}>
        <Text>ค่าดูแลรักษา (บาท)</Text>
        <Text>{stateEvent.maintenance}</Text>
      </View>
      <View style={[styles.submitViewContent, { marginTop: 10 }]}>
        <Text>ค่าเก็บเกี่ยว (บาท)</Text>
        <Text>{stateEvent.harvestcost}</Text>
      </View>
      <View style={[styles.submitViewContent, { marginTop: 10 }]}>
        <Text>ค่าพันธุ์ (บาท)</Text>
        <Text>{stateEvent.breedvalue}</Text>
      </View>
      <View style={[styles.submitViewContent, { marginTop: 10 }]}>
        <Text>ค่ายา (บาท)</Text>
        <Text>{stateEvent.medicine}</Text>
      </View>
      <View style={[styles.submitViewContent, { marginTop: 10 }]}>
        <Text>ค่าอื่นๆ (บาท)</Text>
        <Text>{stateEvent.other}</Text>
      </View>
      <View style={[styles.submitViewContent, { marginTop: 10 }]}>
        <Text>ค่าเช่าที่ดิน (บาท)</Text>
        <Text>{stateEvent.landrent}</Text>
      </View>
    </SafeAreaView>
  )
}
