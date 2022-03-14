import React, { useEffect, useState } from 'react';
import { View, ScrollView, ImageBackground, FlatList, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import { BaseStyle, Images, useTheme } from '@config';
import { Header, SafeAreaView, Icon, Text, Card, ProfileDescription } from '@components';
import { ProfileData } from '@data';
import styles from '../app/screens/AboutUs/styles';
import { List } from 'react-native-paper';

export default function AboutUs({ navigation }) {
    const { t } = useTranslation();
    const { colors } = useTheme();
    const [ourTeam] = useState(ProfileData);

    const male_profiles = [
        Images.profile1,
        Images.profile2,
        Images.profile3
    ];
    const female_profiles = [
        Images.profile4,
        Images.profile5,
        Images.profile6,
        Images.profile7,
        Images.profile8
    ];

    
    const members = [
        {image : "" , name : "ผศ.ดร.สิตางศุ์ พิลัยหล้า", role : "หัวหน้าโครงการ", gender : "F"},
        {image : "" , name : "ศ.ดร. สุวัฒนา จิตตลดากร", role : "ที่ปรึกษา", gender : "M"},
        {image : "" , name : "ประเชิญ คนเทศ", role : "ที่ปรึกษา", gender : "M"},
        {image : "" , name : "หทัยรัตน์ อุไรรงค์", role : "ผู้ร่วมวิจัยด้านเกษตร", gender : "F"},
        {image : "" , name : "รศ.ดร.กาญจนา ศรีพฤทธิ์เกียรติ", role : "ผู้ร่วมวิจัยด้านเศรษฐศาสตร", gender : "F"},
        {image : "" , name : "ผศ.อัญชลี รัตนะ", role : "ผู้ร่วมวิจัยด้านสังคม", gender : "F"},
        {image : "" , name : "ผศ.ดร.ดนุสรณ์ กาญจนวงศ์", role : "ผู้ร่วมวิจัยด้านสังคม", gender : "M"},
        {image : "" , name : "ภุชพันธุ์ ศิริทรัพย์", role : "ผู้ร่วมวิจัยด้านเทคนิคอุตุนิยมวิทยา", gender : "M"},
        {image : "" , name : "จิรายุ พึ่งฉิ่ง", role : "ผู้ร่วมวิจัยด้านระบบภูมิสารสนเทศภมิศาสตร์", gender : "M"},
        {image : "" , name : "เดชพล จิตรวัฒน์กุลศิริ", role : "ผู้ร่วมวิจัยด้านการแบบจำลองทางชลศาสตร์", gender : "M"},
        {image : "" , name : "ชวลิต โควีระวงศ์", role : "ผู้ร่วมวิจัยด้านแอพพลิเคชัน", gender : "M"},
        {image : "" , name : "กมลชนก คุณยศยิ่ง", role : "ประสานงาน", gender : "F"},
    ];

    const services = [
        { "icon": "leaf", "title": "ข้อมูลด้านการผลิต", "description": "ปัจจัยการผลิต ได้แก่ ข้อมูลสภาพอากาศ ข้อมูลดิน ข้อมูลพันธุ์พืช ข้อมูลระดับน้ำ" },
        { "icon": "shopping", "title": "ข้อมูลด้านการตลาด", "description": "ปัจจัยการตลาด ได้แก่ ข้อมูลราคาผลิตภัณฑ์ตามท้องตลาด ข้อมูลราคารับซื้อ" },
        { "icon": "book", "title": "บทวิเคราะห์และคลังความรู้", "description": "บทวิเคราะห์กลยุทธ์ต่างๆ และบทความที่เกี่ยวกับบางเลน" },
        { "icon": "hammer-screwdriver", "title": "เครื่องมือวิเคราะห์ต้นทุน", "description": "วางแผนก่อนการผลิต เพื่อเสาะหาผลิตภัณฑ์ที่ทำให้ได้กำไรสูงสุด และหลีกเลี่ยงการขาดทุน" },
        { "icon": "calendar", "title": "เครื่องมือติดตามการเพาะปลูก", "description": "จดบันทึก และแจ้งเตือนระหว่างการเพาะปลูก" },
        { "icon": "bell", "title": "การแจ้งเตือนภัย", "description": "แจ้งเตือนภัยธรรมชาติ ทั้งจากระบบนิเวศ สภาพอากาศ และการจัดการแหล่งน้ำ" },
    ];
    // console.log(ProfileData);

    useEffect(() => {
        console.log("Enter About Screen", ourTeam);
    }, []);

    return (
        <View style={{ flex: 1 }}>
            {/* <Header
                title={t('about_us')}
                renderLeft={() => (<Icon name="arrow-left" size={20} color={colors.primary} enableRTL={true} />)}
                onPressLeft={() => { navigation.goBack(); }}
            /> */}
            <SafeAreaView
                style={BaseStyle.safeAreaView}
                edges={['right', 'left', 'bottom']}>
                <ScrollView style={{ flex: 1 }}>
                    <ImageBackground source={require('../assets/images/cover.jpeg')} style={styles.banner}>
                        <Text title1 semibold whiteColor> บางเลน </Text>
                        <Text subhead whiteColor> ที่นี่บางเลน .. </Text>
                    </ImageBackground>
                    <View style={styles.content}>
                        {/* <Text headline semibold> {t('who_we_are').toUpperCase()} </Text> */}
                        <Text body2 style={{ marginTop: 5 }}>
                            ภาคการเกษตรเป็นภาคการผลิตที่มีความอ่อนไหวต่อการเปลี่ยนแปลงสภาพภูมิอากาศ โดยเฉพาะอย่างยิ่งความไม่แน่นอนด้านทรัพยากรนํ้า ซึ่งก่อให้เกิดความเสียหายต่อผลผลิต โดยเฉพาะอย่างยิ่งพื้นที่เกษตรรายย่อยซึ่งได้รับผลกระทบรุนแรงกว่าเกษตรแปลงใหญ่ จังหวัดนครปฐมเป็นพื้นที่ราบลุ่มภาคกลางที่มีความอุดมสมบูรณ์ปานกลางถึงค่อนข้างสูง มีความเหมาะสมต่อเกษตรกรรม โดยมีพื้นที่การเกษตร 920,259 ไร่ คิดเป็นร้อยละ 67.91 ของพื้นที่ทั้งหมดของจังหวัด ส่วนใหญ่เป็นการปลูกข้าว โดยอำเภอบางเลนมีการปลูกข้าวมากที่สุดของจังหวัด
                        </Text>
                        <Text body2 style={{ marginTop: 5 }}>
                            ทั้งนี้ ข้อมูลจากสำนักงานคณะกรรมการพัฒนาการเศรษฐกิจและสังคมแห่งชาติเปิดเผยว่ามูลค่าภาคเกษตรกรรมของนครปฐมสูงถึง 18,356 ล้านบาทคิดเป็นสัดส่วนร้อยละ 5.87 ต่อ GPP/GRP จึงนับว่าเป็นพื้นที่ที่มีความสำคัญต่อภาคผลิตและความมั่นคงทางอาหารของประเทศ
                        </Text>
                        <Text body2 style={{ marginTop: 5 }}>
                        ด้วยเหตุนี้ จึงมีความจำเป็นที่จะต้องศึกษาถึงสมดุลของทรัพยากรน้ำในพื้นที่ศึกษา การเปลี่ยนแปลงของอุปสงค์อุปทานด้านน้ำ การประเมินน้ำต้นทุนและความต้องการใช้น้ำ อันเป็นผลจากการเปลี่ยนแปลงทั้งปัจจัยทางกายภาพของพื้นที่ จำนวนประชากร กิจกรรมการใช้น้ำ การเปลี่ยนแปลงการใช้ประโยชน์ที่ดิน และปัจจัยทางธรรมชาติ การผันแปรและการเปลี่ยนแปลงภูมิอากาศร่วมกับการวิเคราะห์ถึงปัญหา อุปสรรค ปัจจัยที่มีผลต่อการปรับตัวของเกษตรกร โดยเน้นการมีส่วนร่วมของเกษตรกรและเครือข่ายประชาสังคมในพื้นที่ศึกษา รวมทั้งการพัฒนาแอปพลิเคชันที่สะดวกต่อการเข้าถึงและการใช้งาน เพื่อส่งเสริมให้เกษตรกรมีความเข้าใจ มีการปรับตัวต่อระดับความไม่แน่นอนด้านสภาพภูมิอากาศที่เปลี่ยนแปลงด้วยกลยุทธ์ที่สร้างขึ้นร่วมกัน 
                        </Text>
                        <View style={{ flexDirection : 'row' , marginTop : 10 }}>
                            <Image source={require('../assets/images/landuse-intro.png')} style={{ flex : 1 , resizeMode : 'cover' , aspectRatio : 16/9}}  />
                        </View>
                            
                        
                        <Text headline semibold style={{ marginTop: 20 }}>สิ่งที่เราตั้งเป้าหมาย</Text>
                        <Text body2 style={{ marginTop: 5 }}>
                            การศึกษานี้เป็นการผสานแนวคิด 2 ส่วน คือ แนวคิดทางด้านเทคนิค ซึ่งครอบคลุมทั้งงานเทคนิควิเคราะห์อุตุนิยมวิทยา งานเทคนิควิศวกรรมทรัพยากรน้ำ งานด้านการเกษตร และ ด้านสังคม
                        </Text>
                        <Text body2 style={{ marginTop: 5 }}>
                            ด้านเทคนิค ประกอบด้วยงาน 3 ส่วน คือ งานวิเคราะห์การผันแปรและการเปลี่ยนแปลงภูมิอากาศและงานเทคนิควิศวกรรมทรัพยากรน้ำ งานด้านเกษตร งานพัฒนาแอพพลิเคชั่นสนับสนุนการสร้างเครือข่ายและการรับรู้ข้อมูลของเกษตรกร มีรายละเอียด ดังนี้
                        </Text>
                        <Text body2 style={{ marginTop: 5 }}>
                            - งานวิเคราะห์การผันแปรและการเปลี่ยนแปลงภูมิอากาศ งานเทคนิควิศวกรรมทรัพยากรน้ำ งานวิเคราะห์การเกิดอุทกภัย การขาดแคลนน้ำ ปัญหาคุณภาพน้ำ ประยุกต์ใช้แบบจำลองคณิตศาสตร์เพื่อวิเคราะห์สมดุลน้ำ สร้างแนวทางการจัดสรรน้ำและการใช้น้ำ
                        </Text>
                        <Text body2 style={{ marginTop: 5 }}>
                            - งานด้านเกษตร วิเคราะห์ข้อมูลการทำเกษตรกรรมในอดีต ประเมินแนวโน้มในอนาคต วิเคราะห์แนวทางการปรับเปลี่ยนแนวทาง วิเคราะห์ด้านเศรษฐศาสตร์ในแต่ละทางเลือกของกลยุทธ์
                        </Text>
                        <Text body2 style={{ marginTop: 5 }}>
                            - งานพัฒนาแอพพลิเคชั่น สนับสนุนการสร้างเครือข่ายและการรับรู้ข้อมูลของเกษตรกร การพัฒนาแอพพลิเคชันเพื่อสนับสนุนให้เกษตรกรในพื้นที่ศึกษาเข้าถึงข้อมูลที่เป็นปัจจุบัน
                        </Text>
                        <Text body2 style={{ marginTop: 5 }}>
                            ด้านสังคม การศึกษานี้เน้นการมีส่วนร่วมของเกษตรกรในพื้นที่และการสร้างความเข้มแข็งให้เครือข่ายภาคประชาสังคมที่เกี่ยวข้อง ตั้งแต่ระดับนโยบาย ระดับปฏิบัติ กรรมการลุ่มน้ำ กลุ่มผู้ใช้น้ำ ผู้นำชุมชน เกษตรกร วิสาหกิจชุมชน เพื่อวิเคราะห์ปัญหาและความต้องการของเกษตรกร ทั้งที่เกี่ยวกับการทำเกษตรกรรมและด้านทรัพยากรน้ำ
                        </Text>
                    </View>
                    <Text headline semibold style={styles.title}>ทีมงานของเรา</Text>
                    <FlatList
                        contentContainerStyle={{ paddingLeft: 5, paddingRight: 20 }}
                        horizontal={true}
                        // numColumns={2}
                        // data={ourTeam}
                        data={members}
                        keyExtractor={(item, index) => 'ourTeam' + index}
                        // renderScrollComponent={false}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => (
                            <Card
                                image={item.gender=="M" ? male_profiles[Math.floor(Math.random() * 3)] : female_profiles[Math.floor(Math.random() * 5)] }
                                onPress={() => navigation.navigate(item.screen)}
                                style={{
                                    // flex: 1,
                                    marginLeft: 15,
                                    height: 200,
                                    width: 150,
                                    marginBottom: 20,
                                    // ImageBackground : item.image
                                }}

                            >
                                {/* <Image source={ require('../app/assets/images/profile-4.jpg') } style={{ height: 100, width : 100 }} /> */}
                                <Text footnote whiteColor>
                                    {item.role}
                                </Text>
                                <Text headline whiteColor semibold numberOfLines={1}>
                                    {item.name}
                                </Text>
                            </Card>
                        )}
                    />
                    <Text headline semibold style={styles.title}>ผลงานของเรา</Text>
                    <View style={{ paddingHorizontal: 20 }}>
                        {services.map((item, index) => {
                            return (
                                // <ProfileDescription
                                //     key={'service' + index}
                                //     image={item.image}
                                //     name={item.name}
                                //     subName={item.subName}
                                //     description={item.description}
                                //     style={{ marginBottom: 10 }}
                                //     onPress={() => navigation.navigate(item.screen)}
                                // />
                                <List.Item
                                    key={index.toString()}
                                    title={item.title}
                                    description={item.description}
                                    left={props => <List.Icon {...props} icon={item.icon} />}
                                />
                            );
                        })}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}
