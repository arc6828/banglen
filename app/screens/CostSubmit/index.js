import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useTheme } from '@config';
import { UserData } from '@data';
import { Header, SafeAreaView, Icon, Text, Image } from '@components';
import { useTranslation } from 'react-i18next';
import styles from './styles';

export default function CostSubmit({ route, navigation }) {
  const { colors } = useTheme();
  const { t } = useTranslation();
  const [image] = useState(UserData[0].image);

  const Separator = () => (
    <View style={styles.separator} />
  );
  return (
    <View style={{ flex: 1 }}>
      <Header
        title={t('Land Cost Form')}
        renderLeft={() => {
          return (
            <Icon
              name="arrow-left"
              size={20}
              color={colors.primary}
              enableRTL={true}
            />
          );
        }}
        onPressLeft={() => {
          navigation.goBack();
        }}
        onPressRight={() => {
          navigation.navigate('Home');
        }}
      />
      <SafeAreaView style={{ flex: 1 }} edges={['right', 'left', 'bottom']}>
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
        <View style={{ paddingLeft: 10, paddingRight: 10 }}>
          <View style={[styles.submitViewTitle, { marginTop: 10 }]}>
            <Text style={styles.submitTextTitle}>พื้นที่เพาะปลูก (ไร่ / งาน / ตร.วา)</Text>
          </View>
          <View style={[styles.submitViewTitle]}>
            <Text style={styles.submitTextShow}>{route.params.stateEvent.farmland} / 100 / 12</Text>
            <Text style={styles.submitText}>{route.params.stateEvent.farmname}</Text>
          </View>
          <Separator />
          <View style={[styles.submitViewContent, { marginTop: 10 }]}>
            <Text>รายได้ที่คาดว่าจะได้รับ (บาท/ปี)</Text>
            <Text>+ {route.params.totalIncomes.toFixed(2)}</Text>
          </View>
          <View style={[styles.submitViewContent, { marginTop: 10 }]}>
            <Text>กำไรที่คาดว่าจะได้รับ (บาท/ปี)</Text>
            <Text>+ {route.params.totalProfits.toFixed(2)}</Text>
          </View>
          <View style={[styles.submitViewContent, { marginTop: 10 }]}>
            <Text>ค่าใช้จ่ายทั้งหมด (บาท/ปี)</Text>
            <Text>+ {route.params.totalCosts.toFixed(2)}</Text>
          </View>
          <View style={[styles.submitViewContent, { marginTop: 10 }]}>
            <Text>ผลผลิต (กก)</Text>
            <Text>{route.params.stateEvent.product}</Text>
          </View>
          <View style={[styles.submitViewContent, { marginTop: 10 }]}>
            <Text>ราคาขาย (บาท/ตัน)</Text>
            <Text>{route.params.stateEvent.price}</Text>
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
            <Text>{route.params.stateEvent.soilcost}</Text>
          </View>
          <Separator />
          <View style={[styles.submitViewContent]}>
            <Text>ค่าปลูก (บาท)</Text>
            <Text>{route.params.stateEvent.plantingcost}</Text>
          </View>
          <Separator />
          <View style={[styles.submitViewContent,]}>
            <Text>ค่าดูแลรักษา (บาท)</Text>
            <Text>{route.params.stateEvent.maintenance}</Text>
          </View>
          <Separator />
          <View style={[styles.submitViewContent,]}>
            <Text>ค่าเก็บเกี่ยว (บาท)</Text>
            <Text>{route.params.stateEvent.harvestcost}</Text>
          </View>
          <Separator />

          <View style={[styles.submitViewContent,]}>
            <Text>ค่าพันธุ์ (บาท)</Text>
            <Text>{route.params.stateEvent.breedvalue}</Text>
          </View>
          <Separator />
          <View style={[styles.submitViewContent,]}>
            <Text>ค่ายา (บาท)</Text>
            <Text>{route.params.stateEvent.medicine}</Text>
          </View>
          <Separator />
          <View style={[styles.submitViewContent]}>
            <Text>ค่าอื่นๆ (บาท)</Text>
            <Text>{route.params.stateEvent.other}</Text>
          </View>
          <Separator />
          <View style={[styles.submitViewContent]}>
            <Text>ค่าเช่าที่ดิน (บาท)</Text>
            <Text>{route.params.stateEvent.landrent}</Text>
          </View>
          <Separator />
        </View>
      </SafeAreaView >
    </View >
  )
}
