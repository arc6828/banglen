import React from 'react';
import { SafeAreaView, View, TextInput, Text } from "react-native";
import styles from './styles';

export default function Submit(props) {
  const {
    stateEvent,
    earnings,
    materials,
    investments,
    declines,
    chanceEquipments,
    totalCosts,
    totalConstsPerRais,
    totalIncomes,
    incomes,
    totalProfits,
    profits
  } = props;

  const Separator = () => (
    <View style={styles.separator} />
  );

  return (
    <SafeAreaView edges={['right', 'left']}>
      <View style={[styles.submitViewTitle, { marginTop: 10 }]}>
        <Text style={styles.submitTextTitle}>Land Information</Text>
      </View>
      <View style={[styles.submitViewContent, { marginTop: 10 }]}>
        <Text>ชื่อที่ดินหรือโฉนด</Text>
        <Text>พื้นที่เพาะปลูก (ไร่)</Text>
      </View>
      <View style={styles.submitViewContent}>
        <Text style={styles.submitTextTitle}>{stateEvent.farmname}</Text>
        <Text style={styles.submitTextTitle}>{stateEvent.farmland}</Text>
      </View>
      <Separator />
      <View style={[styles.submitViewTitle, { marginTop: 10 }]}>
        <Text style={styles.submitTextTitle}>ค่าใช้จ่าย</Text>
      </View>
      <View style={[styles.submitViewContent, { marginTop: 10 }]}>
        <Text>ค่าแรงงาน</Text>
        <Text>ค่าวัสดุ</Text>
      </View>
      <View style={styles.submitViewContent}>
        <Text style={styles.submitTextContent}>{earnings}</Text>
        <Text style={styles.submitTextContent}>{materials}</Text>
      </View>
      <Separator />
      <View style={[styles.submitViewContent, { marginTop: 10 }]}>
        <Text>ค่าเสียโอกาสเงินลงทุน</Text>
        <Text>ค่าเสื่อมอุปกรณ์</Text>
      </View>
      <View style={styles.submitViewContent}>
        <Text style={styles.submitTextContent}>{investments}</Text>
        <Text style={styles.submitTextContent}>{declines}</Text>
      </View>
      <Separator />
      <View style={[styles.submitViewContent, { marginTop: 10 }]}>
        <Text>ค่าเช่าที่ดิน</Text>
        <Text>ค่าเสียโอกาสอุปกรณ์</Text>
      </View>
      <View style={styles.submitViewContent}>
        <Text style={styles.submitTextContent}>{stateEvent.landrent}</Text>
        <Text style={styles.submitTextContent}>{chanceEquipments}</Text>
      </View>
      <Separator />
      <View style={[styles.submitViewTitle, { marginTop: 10 }]}>
        <Text style={styles.submitTextTitle}>ผลผลิต</Text>
      </View>
      <View style={styles.submitViewContent}>
        <Text>ผลผลิต (กก.)</Text>
        <Text>ราคาขาย (บาท / ตัน)</Text>
      </View>
      <View style={styles.submitViewContent}>
        <Text style={styles.submitTextContent}>{stateEvent.product}</Text>
        <Text style={styles.submitTextContent}>{stateEvent.price}</Text>
      </View>
      <Separator />
      <View style={[styles.submitViewTitle, { marginTop: 10 }]}>
        <Text style={styles.submitTextTitle}>สรุปผลต้นทุน และ กำไร</Text>
      </View>
      <View style={[styles.submitViewContent, { marginTop: 10 }]}>
        <Text>ต้นทุนรวมทั้งหมด</Text>
        <Text>ต้นทุนรวมต่อไร่</Text>
      </View>
      <View style={styles.submitViewContent}>
        <Text style={styles.submitTextContent}>{totalCosts}</Text>
        <Text style={styles.submitTextContent}>{totalConstsPerRais}</Text>
      </View>
      <Separator />
      <View style={[styles.submitViewContent, { marginTop: 10 }]}>
        <Text>รายได้ทั้งหมด</Text>
        <Text>รายได้ต่อไร่</Text>
      </View>
      <View style={styles.submitViewContent}>
        <Text style={styles.submitTextContent}>{totalIncomes}</Text>
        <Text style={styles.submitTextContent}>{incomes}</Text>
      </View>
      <Separator />
      <View style={[styles.submitViewContent, { marginTop: 10 }]}>
        <Text>กำไรทั้งหมด</Text>
        <Text>กำไรต่อไร่</Text>
      </View>
      <View style={styles.submitViewContent}>
        <Text style={styles.submitTextContent}>{totalProfits}</Text>
        <Text style={styles.submitTextContent}>{profits}</Text>
      </View>
    </SafeAreaView>
  )
}
