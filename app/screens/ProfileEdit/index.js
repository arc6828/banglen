import React, { useState, useEffect, useContext } from 'react';
import { View, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { BaseStyle, useTheme } from '@config';
import {
  Image,
  Header,
  SafeAreaView,
  Icon,
  Text,
  Button,
  TextInput,
} from '@components';
import styles from './styles';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../../../hooks/AuthContext';
import { fb } from '../../../db_config';

export default function ProfileEdit({ navigation }) {
  const [user, setUser] = useContext(AuthContext);
  const [userProfile, setUserProfile] = useState([]);

  const { colors } = useTheme();
  const { t } = useTranslation();
  const offsetKeyboard = Platform.select({
    ios: 0,
    android: 20,
  });

  const [uid, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [imageProfile, setImageProfile] = useState(null);
  const [loading, setLoading] = useState(false);

  const readUsersFirebase = async () => {
    fb.firestore().collection("users").where("uid", "==", user.uid)
      .get().then((querySnapshot) => {
        const users = querySnapshot.docs.map(doc => doc.data());
        setUserProfile(users[0]);
        setId(users[0].uid)
        setName(users[0].name)
        setImageProfile(users[0].userImg)
        setEmail(users[0].email)
        setAddress(users[0].address)
      });
  }

  const writeUserFirebase = async (updateItem) => {
    fb.firestore().collection("users")
      .doc(updateItem.uid)
      .set(updateItem)
      .then(function () {
        console.log("Firestore successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  }

  const onUpdate = (new_userProfile) => {
    let t = [userProfile];
    let index = t.findIndex((item => item.uid == new_userProfile.uid));

    const updateItem = {
      uid: t[index].uid,
      name: new_userProfile.name,
      email: new_userProfile.email,
      address: new_userProfile.address,
      updateAt: new Date(),
      userImg: new_userProfile.userImg
    }
    setUserProfile(updateItem);
    setUser(updateItem);
    writeUserFirebase(updateItem);
  };

  useEffect(() => {
    readUsersFirebase();
  }, [user])

  useEffect(() => {
    if (!userProfile) {
      navigation.navigate('Profile');
    }
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <Header
        title={t('แก้ไขบัญชี')}
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
        onPressRight={() => { }}
      />

      <SafeAreaView
        style={BaseStyle.safeAreaView}
        edges={['right', 'left', 'bottom']}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'android' ? 'height' : 'padding'}
          keyboardVerticalOffset={offsetKeyboard}
          style={{ flex: 1 }}>
          <ScrollView contentContainerStyle={styles.contain}>
            <View>
              <Image source={{ uri: imageProfile }} style={styles.thumb} />
            </View>
            <View style={styles.contentTitle}>
              <Text headline semibold>
                {t('Account ID')}
              </Text>
            </View>
            <TextInput
              onChangeText={text => setId(text)}
              placeholder={t('input_id')}
              value={uid}
              underlineColorAndroid='transparent'
              editable={false}
              selectTextOnFocus={false}
            />
            <View style={styles.contentTitle}>
              <Text headline semibold>
                {t('ชื่อ - นามสกุล')}
              </Text>
            </View>
            <TextInput
              onChangeText={text => setName(text)}
              placeholder={t('input_name')}
              value={name}
            />
            <View style={styles.contentTitle}>
              <Text headline semibold>
                {t('อีเมล')}
              </Text>
            </View>
            <TextInput
              onChangeText={text => setEmail(text)}
              placeholder={t('input_email')}
              value={email}
              underlineColorAndroid='transparent'
              editable={false}
              selectTextOnFocus={false}
            />
            <View style={styles.contentTitle}>
              <Text headline semibold>
                {t('ที่อยู่')}
              </Text>
            </View>
            <TextInput
              onChangeText={text => setAddress(text)}
              placeholder={t('input_address')}
              value={address}
            />
            <TouchableOpacity onPress={() => navigation.navigate('UploadFile', { uid, userProfile })} >
              <Text style={{ padding: 10 }}>Upload File</Text>
            </TouchableOpacity>
          </ScrollView>

          <View style={{ paddingVertical: 15, paddingHorizontal: 20 }}>
            <Button
              loading={loading}
              full
              onPress={() => {
                setLoading(true);
                setTimeout(() => {
                  navigation.goBack(onUpdate({
                    uid: uid,
                    name: name,
                    email: email,
                    address: address,
                    // userImg: userImg,
                  }));
                }, 500);
              }}>
              {t('ยืนยันข้อมูล')}
            </Button>
          </View>

        </KeyboardAvoidingView>
      </SafeAreaView>

    </View>
  );
}
