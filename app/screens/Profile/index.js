import React, { useState, useContext, useEffect } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { AuthActions } from '@actions';
import { BaseStyle, useTheme } from '@config';
import {
  Header,
  SafeAreaView,
  Icon,
  Text,
  Button,
  ProfileDetail,
} from '@components';

import styles from './styles';
import { UserData } from '@data';
import { useTranslation } from 'react-i18next';
import { fb } from '../../../db_config';
import { AuthContext } from '../../../hooks/AuthContext';

export default function Profile({ navigation }) {

  const [user, setUser] = useState([]);
  console.log("🚀 ~ file: index.js ~ line 24 ~ Profile ~ user", user)

  const { colors } = useTheme();
  const { t } = useTranslation();

  const [loading, setLoading] = useState(false);
  const [userData] = useState(UserData[0]);
  const dispatch = useDispatch();


  const readUsersFirebase = async () => {
    fb.firestore().collection("users")
      .get().then((querySnapshot) => {
        const users = querySnapshot.docs.map(doc => doc.data());
        setUser(users);
      });
  }

  useEffect(() => {
    readUsersFirebase();
  }, [])

  useEffect(() => {
    if (!user) {
      navigation.navigate('Walkthrough');
    }
  }, [])

  const onLogOut = () => {
    setLoading(true);
    dispatch(AuthActions.authentication(false, response => {
      fb.auth().signOut().then(function () {
        console.log("Logout successfully");
        // Sign-out successful.
      }).catch(function (error) {
        // An error happened.
        console.log(error);
      });

    }));
  };

  return (
    <View style={{ flex: 1 }}>
      <Header
        title={t('profile')}
        renderRight={() => {
          return <Icon name="bell" size={24} color={colors.primary} />;
        }}
        onPressRight={() => {
          navigation.navigate('Notification');
        }}
      />
      <SafeAreaView
        style={BaseStyle.safeAreaView}
        edges={['right', 'left', 'bottom']}>
        <ScrollView>
          <View style={styles.contain}>
            <ProfileDetail
              image={userData.image}
              textFirst={user ? user.email : ''}
              point={userData.point}
              textSecond={userData.address}
              textThird={userData.id}
              onPress={() => navigation.navigate('ProfileExanple')}
            />
            {/* <ProfilePerformance
              data={userData.performance}
              style={{ marginTop: 20, marginBottom: 20 }}
            /> */}
            <TouchableOpacity
              style={[
                styles.profileItem,
                { borderBottomColor: colors.border, borderBottomWidth: 1 },
              ]}
              onPress={() => {
                navigation.navigate('ProfileEdit');
              }}>
              <Text body1>{t('edit_profile')}</Text>
              <Icon
                name="angle-right"
                size={18}
                color={colors.primary}
                style={{ marginLeft: 5 }}
                enableRTL={true}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.profileItem,
                { borderBottomColor: colors.border, borderBottomWidth: 1 },
              ]}
              onPress={() => {
                navigation.navigate('ChangePassword');
              }}>
              <Text body1>{t('change_password')}</Text>
              <Icon
                name="angle-right"
                size={18}
                color={colors.primary}
                style={{ marginLeft: 5 }}
                enableRTL={true}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.profileItem,
                { borderBottomColor: colors.border, borderBottomWidth: 1 },
              ]}
              onPress={() => {
                navigation.navigate('Currency');
              }}>
              <Text body1>{t('currency')}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text body1 grayColor>
                  USD
                </Text>
                <Icon
                  name="angle-right"
                  size={18}
                  color={colors.primary}
                  style={{ marginLeft: 5 }}
                  enableRTL={true}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.profileItem,
                { borderBottomColor: colors.border, borderBottomWidth: 1 },
              ]}
              onPress={() => navigation.navigate('MyPaymentMethod')}>
              <Text body1>{t('my_cards')}</Text>
              <Icon
                name="angle-right"
                size={18}
                color={colors.primary}
                style={{ marginLeft: 5 }}
                enableRTL={true}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.profileItem}
              onPress={() => {
                navigation.navigate('Setting');
              }}>
              <Text body1>{t('setting')}</Text>
              <Icon
                name="angle-right"
                size={18}
                color={colors.primary}
                style={{ marginLeft: 5 }}
                enableRTL={true}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
          <Button full loading={loading} onPress={() => onLogOut()}>
            {t('sign_out')}
          </Button>
        </View>
      </SafeAreaView>
    </View>
  );
}
