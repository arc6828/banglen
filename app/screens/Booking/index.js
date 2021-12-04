import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import FieldForm from '../../components/Form/fieldForm';
import Submit from '../../components/Form/submit';
import Cost from '../../components/Form/cost';

export default function Booking({ navigation }) {

  const [currentStep, setCurrentStep] = useState(0);
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
    price: ''
  });
  const [earnings, setEarnings] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [investments, setInvestments] = useState([]);
  const [declines, setDecline] = useState([]);
  const [chanceEquipments, setChanceEquipments] = useState([]);
  const [totalCosts, setTotalCosts] = useState([]);
  const [totalIncomes, setTotalIncomes] = useState([]);
  const [totalProfits, setTotalProfits] = useState([]);


  const getSteps = () => {
    return [
      'index',
      'กรอกข้อมูล',
    ];
  }

  const steps = getSteps();

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Cost
            setCurrentStep={setCurrentStep}
          />
        )
      case 1:
        return (
          <FieldForm
            stateEvent={stateEvent}
            setStateEvent={setStateEvent}
          />
        )
      case 2:
        return (
          <Submit
            stateEvent={stateEvent}
            totalCosts={totalCosts}
            totalIncomes={totalIncomes}
            totalProfits={totalProfits}
          />
        )
      default:
        return "unknown step";
    }
  }


  const onSubmit = () => {
    if (currentStep == 0) {
      setCurrentStep(currentStep + 1)
    } else if (currentStep == 1) {
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

      setCurrentStep(currentStep + 1)
    }

  };

  return (
    <View style={{ flex: 1, flexDirection: 'column', marginTop: 70 }}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.stepView}>
          <View style={{ width: 250, height: 70 }}>
            <View style={styles.stepView}>
              <View style={styles.borderStep} />
            </View>
            <View style={styles.stepViewTitle}>
              {steps.map((label, i) =>
                <View key={i} style={{ width: 200 }}>
                  {i > currentStep && i != currentStep &&
                    <View style={styles.stepViewContent}>
                      <Text style={{ fontSize: 15, color: '#ee5e30' }}>{i + 1}</Text>
                    </View>
                  }
                  {i < currentStep &&
                    <View style={[styles.stepViewContent, { backgroundColor: '#0faf9a' }]}>
                      <Ionicons name="md-checkmark" size={20} color="#fff" />
                    </View>
                  }

                  {i == currentStep &&
                    <View style={[styles.stepViewContent, { backgroundColor: '#ee5e30', }]}>
                      <Text style={{ fontSize: 13, color: '#ffffff' }}>{i + 1}</Text>
                    </View>
                  }
                  <Text style={{ fontSize: 12 }}>{label}</Text>
                </View>
              )}
            </View>
          </View>
        </View>

        <View style={{ backgroundColor: '#fff' }}>
          {getStepContent(currentStep)}
          <View style={styles.stepViewButton}>
            {currentStep > 0 ?
              <TouchableOpacity disabled={stateEvent.farmland == '' ? true : false} style={[styles.centerElement, styles.buttonStepLeft]} onPress={() => {
                if (currentStep > 0) {
                  setCurrentStep(currentStep - 1);
                }
              }}>
                <Text style={{ color: '#fff' }}>Back</Text>
              </TouchableOpacity>
              : <Text> </Text>
            }
            {(currentStep) < steps.length &&
              <TouchableOpacity style={[styles.centerElement, styles.buttonStepRigth]} onPress={onSubmit}>
                <Text style={{ color: '#fff' }}>Next</Text>
              </TouchableOpacity>
            }
            {(currentStep) == steps.length &&
              <TouchableOpacity style={[styles.centerElement, styles.buttonStepRigth]} onPress={() => {
                setCurrentStep(0);
                setStateEvent({
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
                  price: ''
                })
              }}>
                <Text style={{ color: '#fff' }}>Finish</Text>
              </TouchableOpacity>
            }
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
