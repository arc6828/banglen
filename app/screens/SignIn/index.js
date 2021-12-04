import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AuthActions } from '@actions';
import {
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { BaseStyle, useTheme, BaseColor } from '@config';
import Swiper from "react-native-swiper";
import { Header, SafeAreaView, Icon, Text, Button, TextInput, Image } from '@components';
import styles from './styles';
import { useTranslation } from 'react-i18next';
import { fb } from '../../../db_config';
import { UserData } from '@data';

export default function SignIn({ navigation }) {

  const [image] = useState(UserData[0].image);

  const { colors } = useTheme();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const offsetKeyboard = Platform.select({
    ios: 0,
    android: 20,
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState({ email: true, password: true });
  /**
   * call when action login
   *
   */

  const onLogin = () => {
    fb.auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("Login Successfully");
      })
      .catch(error => {
        console.log("Login error", error);
      })

  }
  const onSignIn = () => {
    if (email == '' || password == '') {
      setSuccess({
        ...success,
        email: false,
        password: false,
      });
    } else {
      setLoading(true);
      onLogin();
      dispatch(
        AuthActions.authentication(true, response => {
          setLoading(false);
          navigation.navigate('Profile')
        }),
      );
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Header
        title={t('เข้าสู่ระบบ')}
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
          style={{ flex: 1 }}>
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
                <Text body1 style={styles.textSlide}>
                  {t("เข้าสู่ระบบ")}
                </Text>
              </View>
            </Swiper>
          </View>
          <View style={styles.contain}>
            <TextInput
              onChangeText={text => setEmail(text)}
              onFocus={() => {
                setSuccess({
                  ...success,
                  email: true,
                });
              }}
              placeholder={t('input_email')}
              success={success.email}
              value={email}
            />
            <TextInput
              style={{ marginTop: 10 }}
              onChangeText={text => setPassword(text)}
              onFocus={() => {
                setSuccess({
                  ...success,
                  password: true,
                });
              }}
              placeholder={t('input_password')}
              secureTextEntry={true}
              success={success.password}
              value={password}
            />
            <Button
              style={{ marginTop: 20 }}
              full
              loading={loading}
              onPress={() => {
                onSignIn();
              }}>
              {t('เข้าสู่ระบบ')}
            </Button>
            <TouchableOpacity
              onPress={() => navigation.navigate('ResetPassword')}>
              <Text body1 grayColor style={{ marginTop: 25 }}>
                {t('ลืมรหัสผ่าน ?')}
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View >
  );
}
