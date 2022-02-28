import React, { useEffect, useState } from 'react';
import { View, ScrollView, ImageBackground, FlatList , Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import { BaseStyle, Images, useTheme } from '@config';
import { Header, SafeAreaView, Icon, Text, Card, ProfileDescription } from '@components';
import { ProfileData } from '@data';
import styles from '../app/screens/AboutUs/styles';

export default function AboutUs({ navigation }) {
    const { t } = useTranslation();
    const { colors } = useTheme();
    const [ourTeam] = useState(ProfileData);
    // console.log(ProfileData);

    useEffect(()=>{
        console.log("Enter About Screen", ourTeam);
    },[]);

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
                    <ImageBackground source={Images.trip4} style={styles.banner}>
                        <Text title1 semibold whiteColor> บางเลน </Text>
                        <Text subhead whiteColor> ที่นี่บางเลน .. </Text>
                    </ImageBackground>
                    <View style={styles.content}>
                        <Text headline semibold> {t('who_we_are').toUpperCase()} </Text>
                        <Text body2 style={{ marginTop: 5 }}>
                            The song's lyrics allude to District 12, a region of the fictional
                            country of Panem in The Hunger Games universe, subject to the
                            nation's mining industry, and recounts the feelings of the rebels
                            in District 12 at the onset of the rebellion towards the end of
                            Catching Fire. In addition, the song makes several apparent
                            references to The Hunger Games, especially the events of Catching
                            Fire, including the attic where the protagonists of the novel meet
                            during the rebellion of District 11 and "the view from up here"
                        </Text>
                        <Text headline semibold style={{ marginTop: 20 }}>
                            {t('what_we_do').toUpperCase()}
                        </Text>
                        <Text body2 style={{ marginTop: 5 }}>
                            - First Class Flights
                        </Text>
                        <Text body2 style={{ marginTop: 5 }}>
                            - 5 Star Accommodations
                        </Text>
                        <Text body2 style={{ marginTop: 5 }}>
                            - Inclusive Packages
                        </Text>
                        <Text body2 style={{ marginTop: 5 }}>
                            - Latest Model Vehicles
                        </Text>
                    </View>
                    <Text headline semibold style={styles.title}>
                        {t('meet_our_team').toUpperCase()}
                    </Text>
                    <FlatList
                        contentContainerStyle={{ paddingLeft: 5, paddingRight: 20 }}
                        horizontal={true}
                        // numColumns={2}
                        // numRo
                        data={ourTeam}
                        keyExtractor={(item, index) => 'ourTeam' + index}
                        // renderScrollComponent={false}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => (
                            <Card
                                image={item.image}
                                onPress={() => navigation.navigate(item.screen)}
                                style={{
                                    // flex: 1,
                                    marginLeft: 15,
                                    height: 200,
                                    width : 150,
                                    marginBottom: 20,
                                    // ImageBackground : item.image
                                }}
                                
                                >
                                {/* <Image source={ require('../app/assets/images/profile-4.jpg') } style={{ height: 100, width : 100 }} /> */}
                                <Text footnote whiteColor>
                                    {item.subName} 
                                </Text>
                                <Text headline whiteColor semibold numberOfLines={1}>
                                    {item.name}
                                </Text>
                            </Card>
                        )}
                    />
                    <Text headline semibold style={styles.title}>
                        {t('our_service').toUpperCase()}
                    </Text>
                    <View style={{ paddingHorizontal: 20 }}>
                        {ourTeam.map((item, index) => {
                            return (
                                <ProfileDescription
                                    key={'service' + index}
                                    image={item.image}
                                    name={item.name}
                                    subName={item.subName}
                                    description={item.description}
                                    style={{ marginBottom: 10 }}
                                    onPress={() => navigation.navigate(item.screen)}
                                />
                            );
                        })}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}
