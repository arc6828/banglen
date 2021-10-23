import React, { useState,useContext } from 'react';
import { View, KeyboardAvoidingView, Platform } from 'react-native';
import { BaseStyle, useTheme } from '@config';
import { Header, SafeAreaView, Icon, Button, TextInput } from '@components';
import styles from './styles';
import { useTranslation } from 'react-i18next';
import { fb } from '../../../db_config';
import { AuthContext } from '../../../hooks/AuthContext';

export default function SignUp({ navigation }) {
  const { colors } = useTheme();
  const { t } = useTranslation();
  const offsetKeyboard = Platform.select({
    ios: 0,
    android: 20,
  });
  const [user, setUser] = useContext(AuthContext);

  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState({
    name: true,
    lastname: true,
    address: true,
    email: true,
    address: true,
  });

  /**
   * call when action signup
   *
   */
  const createNewAccount = async () => {
    fb.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        fb.firestore().collection('users').doc(fb.auth().currentUser.uid)
          .set({
            uid: '_' + Math.random().toString(36).substr(2, 9),
            name: name,
            lastname: lastname,
            address: address,
            email: email,
            createdAt: new Date(),
            userImg: null,
          })
      })
      .catch(error => { console.log("Register Error", error); })
  }
  
  const onSignUp = () => {
    if (name == '' || email == '' || password == '') {
      setSuccess({
        ...success,
        name: name != '' ? true : false,
        email: email != '' ? true : false,
        password: password != '' ? true : false,
      });
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        createNewAccount();
        navigation.navigate('Profile');
      }, 500);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Header
        title={t('sign_up')}
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
          <View style={styles.contain}>
            <TextInput
              onChangeText={text => setName(text)}
              placeholder={t('ชื่อ')}
              success={success.name}
              value={name}
            />
            <TextInput
              style={{ marginTop: 10 }}
              onChangeText={text => setLastname(text)}
              placeholder={t('นามสกุล')}
              success={success.lastname}
              value={lastname}
            />
            <TextInput
              style={{ marginTop: 10 }}
              onChangeText={text => setAddress(text)}
              placeholder={t('ที่อยู่')}
              success={success.address}
              value={address}
            />
            <TextInput
              style={{ marginTop: 10 }}
              onChangeText={text => setEmail(text)}
              placeholder={t('อีเมล')}
              keyboardType="email-address"
              success={success.email}
              value={email}
            />
            <TextInput
              style={{ marginTop: 10 }}
              onChangeText={text => setPassword(text)}
              placeholder={t('รหัสผ่าน')}
              secureTextEntry={true}
              success={success.password}
              value={password}
            />
            <Button
              full
              style={{ marginTop: 20 }}
              loading={loading}
              onPress={() => onSignUp()}>
              {t('สมัครสมาชิก')}
            </Button>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}
