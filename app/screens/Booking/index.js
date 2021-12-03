import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import Form from '../../components/Form';
import Submit from '../../components/Form/submit';
import Thankyou from '../../components/Form/thankyou';

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
  const [totalConstsPerRais, setTotalConstsPerRai] = useState([]);
  const [totalIncomes, setTotalIncomes] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [totalProfits, setTotalProfits] = useState([]);
  const [profits, setProfit] = useState([]);

  const getSteps = () => {
    return [
      'กรอกข้อมูล',
      'ยืนยันข้อมูล'
    ];
  }

  const steps = getSteps();

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Form
            stateEvent={stateEvent}
            setStateEvent={setStateEvent}
          />
        )
      case 1:
        return (
          <Submit
            stateEvent={stateEvent}
            earnings={earnings}
            materials={materials}
            investments={investments}
            declines={declines}
            chanceEquipments={chanceEquipments}
            totalCosts={totalCosts}
            totalConstsPerRais={totalConstsPerRais}
            totalIncomes={totalIncomes}
            incomes={incomes}
            totalProfits={totalProfits}
            profits={profits}
          />
        )
      case 2:
        return (
          <Thankyou />
        )
      default:
        return "unknown step";
    }
  }

  const onSubmit = () => {
    const intSoilcost = parseInt(stateEvent.soilcost); //ค่าดิน
    const intPlantingcost = parseInt(stateEvent.plantingcost); //ค่าปลูก
    const intBreedvalue = parseInt(stateEvent.breedvalue);//ค่าพันธุ์
    const intMaintenance = parseInt(stateEvent.maintenance);//ค่าดูแลรักษา
    const intHarvestcost = parseInt(stateEvent.harvestcost);//ค่าเก็บเกี่ยว
    const intFertilizercost = parseInt(stateEvent.fertilizercost)//ค่าปุ๋ย
    const intMedicine = parseInt(stateEvent.medicine)//ค่ายา
    const intOther = parseInt(stateEvent.other)//ค่าอื่นๆ
    const intFarmland = parseInt(stateEvent.farmland)//พื้นที่เพาะปลูก หรือ จำนวนไร่
    const intLandrent = parseInt(stateEvent.landrent)//ค่าเช่าที่ดิน
    const intProduct = parseInt(stateEvent.product)//ผลผลิต
    const intPrice = parseInt(stateEvent.price)//ราคา

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
    // ต้นทุนรวม ต่อไร่
    let totalConstsPerRai = (totalCost / intFarmland);
    setTotalConstsPerRai(totalConstsPerRai.toFixed(2));
    // รายได้ทั้งหมด
    let totoleIncome = (intPrice * intProduct / 1000)
    setTotalIncomes(totoleIncome.toFixed(2));
    // รายได้ต่อไร่
    let income = (totoleIncome / intFarmland)
    setIncomes(income.toFixed(2));
    //กำไรทั้งหมด
    let totalProfit = (totalCost - totoleIncome);
    setTotalProfits(totalProfit.toFixed(2));
    //กำไรต่อไร่
    let profit = (totalProfit / intFarmland);
    setProfit(profit.toFixed(2));

    setCurrentStep(currentStep + 1)
  };

  return (
    <View style={{ flex: 1, flexDirection: 'column', marginTop: 70 }}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.stepView}>
          <View style={{ width: 280, height: 70 }}>
            <View style={styles.stepView}>
              <View style={styles.borderStep} />
            </View>
            <View style={styles.stepViewTitle}>
              {steps.map((label, i) =>
                <View key={i} style={{ alignItems: 'center', width: 130 }}>
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
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            {currentStep > 0 ?
              <TouchableOpacity style={[styles.centerElement, styles.buttonStepLeft]} onPress={() => {
                if (currentStep > 0) {
                  setCurrentStep(currentStep - 1);
                }
              }}>
                <Text style={{ color: '#fff' }}>Back</Text>
              </TouchableOpacity>
              : <Text> </Text>
            }
            {(currentStep) < steps.length &&
              <TouchableOpacity style={[styles.centerElement, styles.buttonNext]} onPress={onSubmit}>
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
