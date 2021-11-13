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
import { UserData } from '@data';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../../../hooks/AuthContext';
import { fb } from '../../../db_config';

export default function ProfileEdit({ navigation }) {
  const [user] = useContext(AuthContext);
  const [userProfile, setUserProfile] = useState([]);

  const { colors } = useTheme();
  const { t } = useTranslation();
  const offsetKeyboard = Platform.select({
    ios: 0,
    android: 20,
  });
  const [uid, setId] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [image] = useState(UserData[0].image);
  const [loading, setLoading] = useState(false);

  const readUsersFirebase = async () => {
    fb.firestore().collection("users")
      .get().then((querySnapshot) => {
        const users = querySnapshot.docs.map(doc => doc.data());
        setUserProfile(...users);
      });
  }

  const writeTodosFirebase = async (updateItem) => {
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
      name: name,
      lastname: lastname,
      email: email,
      address: address,
      updateAt: new Date(),
      userImg: null
    }
    setUserProfile(updateItem);
    writeTodosFirebase(updateItem);
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
        title={t('edit_profile')}
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
              <Image source={image} style={styles.thumb} />
            </View>
            <View style={styles.contentTitle}>
              <Text headline semibold>
                {t('account')}
              </Text>
            </View>
            <TextInput
              onChangeText={text => setId(text)}
              placeholder={t('input_id')}
              value={userProfile.uid}
            />
            <View style={styles.contentTitle}>
              <Text headline semibold>
                {t('name')}
              </Text>
            </View>
            <TextInput
              onChangeText={text => setName(text)}
              placeholder={t('input_name')}
              value={name}
            />
            <View style={styles.contentTitle}>
              <Text headline semibold>
                {t('Lastname')}
              </Text>
            </View>
            <TextInput
              onChangeText={text => setLastname(text)}
              placeholder={t('input_lastname')}
              value={lastname}
            />
            <View style={styles.contentTitle}>
              <Text headline semibold>
                {t('email')}
              </Text>
            </View>
            <TextInput
              onChangeText={text => setEmail(text)}
              placeholder={t('input_email')}
              value={email}
            />
            <View style={styles.contentTitle}>
              <Text headline semibold>
                {t('address')}
              </Text>
            </View>
            <TextInput
              onChangeText={text => setAddress(text)}
              placeholder={t('input_address')}
              value={address}
            />
            <TouchableOpacity onPress={() => navigation.navigate('UploadFile')} >
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
                    uid: userProfile.uid,
                    name: name,
                    lastname: lastname,
                    email: email,
                    address: address
                  }));
                }, 500);
              }}>
              {t('confirm')}
            </Button>
          </View>

        </KeyboardAvoidingView>
      </SafeAreaView>

    </View>
  );
}
// onPress={() => {
//   setLoading(true);
//   setTimeout(() => {
//     navigation.navigate('Profile', {
//       uid: item.uid,
//       name: item.name,
//       lastname: item.lastname,
//       email: item.email,
//       address: item.address
//     });
//   }, 500);
// }}>