import React, { useState } from 'react';
import { View } from "react-native";
import {
  SafeAreaView,
  TextInput,
  Text,
  Button,
} from '@components';
import styles from './styles';
import { useTranslation } from 'react-i18next';

export default function FieldForm() {
  const { t } = useTranslation();

  const [stateEvent, setStateEvent] = useState({
    farmname: '',
    farmland: '',
    soilcost: '',
    plantingcost: '',
    maintenance: '',
    harvestcost: '',
    breedvalue: '',
    fertilizercost: '',
    medicine: '',
    other: '',
    landrent: '',
    product: '',
    price: '',
    totalCosts: '',
    totalIncomes: '',
    totalProfits: ''
  });
  const [earnings, setEarnings] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [investments, setInvestments] = useState([]);
  const [declines, setDecline] = useState([]);
  const [chanceEquipments, setChanceEquipments] = useState([]);
  const [totalCosts, setTotalCosts] = useState([]);
  const [totalIncomes, setTotalIncomes] = useState([]);
  const [totalProfits, setTotalProfits] = useState([]);

  const onSubmit = () => {
    console.log("fasdfasd")
    if (!stateEvent.farmname.trim()) {
      alert('กรุณาใส่ชื่อที่ดินหรือโฉนด');
      return;
    }
    if (!stateEvent.farmland.trim()) {
      alert('กรุณาใส่พื้นที่เพาะปลูก');
      return;
    }
    if (!stateEvent.soilcost.trim()) {
      alert('กรุณาใส่ค่าเตรียมดิน');
      return;
    }
    if (!stateEvent.plantingcost.trim()) {
      alert('กรุณาใส่ค่าปลูก');
      return;
    }
    if (!stateEvent.plantingcost.trim()) {
      alert('กรุณาใส่ค่าดูแลรักษา');
      return;
    }
    if (!stateEvent.plantingcost.trim()) {
      alert('กรุณาใส่ค่าเก็บเกี่ยว');
      return;
    }
    if (!stateEvent.breedvalue.trim()) {
      alert('กรุณาใส่ค่าพันธุ์');
      return;
    }
    if (!stateEvent.fertilizercost.trim()) {
      alert('กรุณาใส่ค่าปุ๋ย');
      return;
    }
    if (!stateEvent.medicine.trim()) {
      alert('กรุณาใส่ค่ายา');
      return;
    }
    if (!stateEvent.other.trim()) {
      alert('กรุณาใส่ค่าอื่น ๆ');
      return;
    }
    if (!stateEvent.landrent.trim()) {
      alert('กรุณาใส่ค่าเช่าที่ดิน');
      return;
    }
    if (!stateEvent.product.trim()) {
      alert('กรุณาใส่ผลผลิต');
      return;
    }
    if (!stateEvent.price.trim()) {
      alert('กรุณาใส่ราคา');
      return;
    }

    const intSoilcost = Number(stateEvent.soilcost); //ค่าดิน
    const intPlantingcost = Number(stateEvent.plantingcost); //ค่าปลูก
    const intBreedvalue = Number(stateEvent.breedvalue);//ค่าพันธุ์
    const intMaintenance = Number(stateEvent.maintenance);//ค่าดูแลรักษา
    const intHarvestcost = Number(stateEvent.harvestcost);//ค่าเก็บเกี่ยว
    const intFertilizercost = Number(stateEvent.fertilizercost)//ค่าปุ๋ย
    const intMedicine = Number(stateEvent.medicine)//ค่ายา
    const intOther = Number(stateEvent.other)//ค่าอื่นๆ
    const intFarmland = Number(stateEvent.farmland)//พื้นที่เพาะปลูก หรือ จำนวนไร่
    const intLandrent = Number(stateEvent.landrent)//ค่าเช่าที่ดิน
    const intProduct = Number(stateEvent.product)//ผลผลิต
    const intPrice = Number(stateEvent.price)//ราคา

    // ค่าแรงงาน
    let earning = (intSoilcost + intPlantingcost + intMaintenance + intHarvestcost)
    setEarnings(earning.toFixed(2))
    // ค่าวัสดุ
    let material = (intBreedvalue + intFertilizercost + intMedicine + intOther)
    setMaterials(material.toFixed(2))
    // เสียโอกาสเงินลงทุน
    let investment = ((earning + material) * (6.5 / 100) * (6 / 12))
    setInvestments(investment.toFixed(2))
    //ค่าเสื่อมอุปกรณ์
    let decline = (7.28 * intFarmland);
    setDecline(decline.toFixed(2));
    // ค่าเสียโอกาสอุปกรณ์
    let chanceEquipment = (2.03 * intFarmland)
    setChanceEquipments(chanceEquipment.toFixed(2));
    // ต้นทุนรวม ของเกษตรกร
    let totalCost = (earning + material + investment + intLandrent + decline + chanceEquipment)
    setTotalCosts(totalCost.toFixed(2));
    // รายได้ทั้งหมด
    let totoleIncome = (intPrice * intProduct / 1000)
    setTotalIncomes(totoleIncome.toFixed(2));
    //กำไรทั้งหมด
    let totalProfit = (totalCost - totoleIncome);
    setTotalProfits(totalProfit.toFixed(2));
  }
  const Separator = () => (
    <View style={styles.separator} />
  );

  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <SafeAreaView style={{ flex: 1 }} edges={['right', 'left', 'bottom']}>
        <View style={[styles.viewTitle, { marginTop: 10 }]}>
          <Text>ชื่อที่ดินหรือโฉนด</Text>
          <Text>พื้นที่เพาะปลูก (ไร่)</Text>
        </View>
        <View style={styles.viewContent}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setStateEvent({ ...stateEvent, farmname: text })}
            value={stateEvent.farmname}
          />
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            onChangeText={(text) => setStateEvent({ ...stateEvent, farmland: text })}
            value={stateEvent.farmland}
          />
        </View>
        <Separator />
        <View style={styles.viewTitle}>
          <Text>ค่าเตรียมดิน (บาท)</Text>
          <Text>ค่าปลูก (บาท)</Text>
        </View>
        <View style={styles.viewContent}>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            onChangeText={(text) => setStateEvent({ ...stateEvent, soilcost: text })}
            value={stateEvent.soilcost}
          />
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            onChangeText={(text) => setStateEvent({ ...stateEvent, plantingcost: text })}
            value={stateEvent.plantingcost}
          />
        </View>
        <Separator />
        <View style={styles.viewTitle}>
          <Text>ค่าดูแลรักษา (บาท)</Text>
          <Text>ค่าเก็บเกี่ยว (บาท)</Text>
        </View>
        <View style={styles.viewContent}>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            onChangeText={(text) => setStateEvent({ ...stateEvent, maintenance: text })}
            value={stateEvent.maintenance}
          />
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            onChangeText={(text) => setStateEvent({ ...stateEvent, harvestcost: text })}
            value={stateEvent.harvestcost}
          />
        </View>
        <Separator />
        <View style={styles.viewTitle}>
          <Text>ค่าพันธุ์ (บาท)</Text>
          <Text>ค่าปุ๋ย (บาท)</Text>
        </View>
        <View style={styles.viewContent}>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            onChangeText={(text) => setStateEvent({ ...stateEvent, breedvalue: text })}
            value={stateEvent.breedvalue}
          />
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            onChangeText={(text) => setStateEvent({ ...stateEvent, fertilizercost: text })}
            value={stateEvent.fertilizercost}
          />
        </View>
        <Separator />
        <View style={styles.viewTitle}>
          <Text>ค่ายา (บาท)</Text>
          <Text>ค่าอื่นๆ (บาท)</Text>
        </View>
        <View style={styles.viewContent}>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            onChangeText={(text) => setStateEvent({ ...stateEvent, medicine: text })}
            value={stateEvent.medicine}
          />
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            onChangeText={(text) => setStateEvent({ ...stateEvent, other: text })}
            value={stateEvent.other}
          />
        </View>
        <Separator />
        <View style={styles.viewTitle}>
          <Text>ค่าเช่าที่ดิน (บาท)</Text>
          <Text>ผลผลิต (กก.)</Text>
          <Text>ราคาขาย (บาท / ตัน)</Text>
        </View>
        <View style={styles.viewFooter}>
          <TextInput
            style={styles.inputFooter}
            keyboardType="numeric"
            onChangeText={(text) => setStateEvent({ ...stateEvent, landrent: text })}
            value={stateEvent.landrent}
          />
          <TextInput
            style={styles.inputFooter}
            keyboardType="numeric"
            onChangeText={(text) => setStateEvent({ ...stateEvent, product: text })}
            value={stateEvent.product}
          />
          <TextInput
            style={styles.inputFooter}
            keyboardType="numeric"
            onChangeText={(text) => setStateEvent({ ...stateEvent, price: text })}
            value={stateEvent.price}
          />
        </View>
        <View style={{ paddingVertical: 15, paddingHorizontal: 20 }}>
          <Button onPress={onSubmit} full>
            {t('ยืนยันข้อมูล')}
          </Button>
        </View>
      </SafeAreaView>
    </View>
  )
}

