import React from 'react';
import { View } from "react-native";
import {
  Header,
  SafeAreaView,
  Icon,
  TextInput,
  Text,
  Button,
  ProfileDetail,
} from '@components';
import styles from './styles';

export default function FieldForm(props) {
  const { stateEvent, setStateEvent } = props

  const Separator = () => (
    <View style={styles.separator} />
  );

  return (
    <SafeAreaView edges={['right', 'left']}>
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

    </SafeAreaView>
  )
}

