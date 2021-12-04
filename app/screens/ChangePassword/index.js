import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { BaseStyle, BaseColor, useTheme } from '@config';
import { useTranslation } from 'react-i18next';
import { Header, SafeAreaView, Icon, Text, Button, TextInput, Image } from '@components';
import styles from './styles';
import { UserData } from '@data';
import Swiper from "react-native-swiper";
import { fb } from '../../../db_config';

export default function ChangePassword({ navigation }) {
  const { t } = useTranslation();
  const offsetKeyboard = Platform.select({
    ios: 0,
    android: 20,
  });
  const [image] = useState(UserData[0].image);

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const { colors } = useTheme();

  const onResetPasswordPress = async () => {
    await fb.auth().sendPasswordResetEmail(email)
      .then(() => {
        console.log('Password reset email sent successfully')
      }, (error) => {
        console.log(error.message);
      });
  }
  return (
    <View style={{ flex: 1 }}>
      <Header
        title={t('เปลี่ยนรหัสผ่าน')}
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
      />
      <SafeAreaView
        style={BaseStyle.safeAreaView}
        edges={['right', 'left', 'bottom']}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'android' ? 'height' : 'padding'}
          keyboardVerticalOffset={offsetKeyboard}
          style={{ flex: 1, justifyContent: 'center' }}>
          <View style={styles.wrapper}>
            <Swiper
              dotStyle={{
                backgroundColor: BaseColor.dividerColor,
              }}
              activeDotColor={colors.primary}
              paginationStyle={styles.contentPage}
              removeClippedSubviews={false}
            >
              <View style={styles.slide}>
                <Image source={image} style={styles.img} />
              </View>
            </Swiper>
          </View>
          <ScrollView
            contentContainerStyle={{
              flex: 1,
              justifyContent: 'center',
              padding: 20,
              marginTop: -300
            }}>

            <TextInput
              onChangeText={text => setEmail(text)}
              placeholder="อีเมลที่เคยลงทะเบียนไว้"
              value={email}
            />
            <View style={{ paddingVertical: 15 }}>
              <Button
                loading={loading}
                full
                onPress={() => {
                  setLoading(true);
                  onResetPasswordPress()
                  navigation.goBack();
                }}>
                {t('เปลี่ยนรหัสผ่าน')}
              </Button>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View >
  );
}
