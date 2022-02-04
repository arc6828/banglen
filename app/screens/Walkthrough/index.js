import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AuthActions } from "@actions";
import { View, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView, Text, Button, Image  } from "@components";
import styles from "./styles";
import Swiper from "react-native-swiper";
import { BaseColor, BaseStyle, Images, useTheme } from "@config";
import * as Utils from "@utils";
import { useTranslation } from "react-i18next";
import { Icon } from "@components";

export default function Walkthrough({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const [slide] = useState([
    { key: 1, image: Images.trip2 },
    { key: 2, image: Images.trip1 },
    { key: 3, image: Images.trip3 },
    { key: 4, image: Images.trip4 },
  ]);
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const authentication = () => {
    setLoading(true);
    dispatch(AuthActions.authentication(true, (response) => { console.log("=>", response) }));
  };

  return (
    <SafeAreaView
      style={BaseStyle.safeAreaView}
      edges={["top", "right", "left", "bottom"]}
    >
      <ScrollView
        contentContainerStyle={styles.contain}
        scrollEnabled={scrollEnabled}
        onContentSizeChange={(contentWidth, contentHeight) =>
          setScrollEnabled(Utils.scrollEnabled(contentWidth, contentHeight))
        }
      >
        <View style={styles.wrapper}>
          <Swiper
            dotStyle={{
              backgroundColor: BaseColor.dividerColor,
            }}
            activeDotColor={colors.primary}
            paginationStyle={styles.contentPage}
            removeClippedSubviews={false}
          >
            {slide.map((item, index) => {
              return (
                <View style={styles.slide} key={item.key}>
                  <Image source={item.image} style={styles.img} />
                 
                </View>
              );
            })}
          </Swiper>
        </View>
        <View style={{ width: "100%" }}>
          <Button
            full
            style={{ marginTop: 20 }}
            loading={loading}
            icon={<Icon color={"white"} name="envelope" size={20} solid />}
            // onPress={() => navigation.navigate("SignIn")}
          >
            {t("  เข้าสู่ระบบด้วย Email")}
          </Button>
          <Button
            full
            style={{
              backgroundColor: BaseColor.navyRed,
              marginTop: 20,
            }}
            icon={<Icon color={"white"} name="google" size={20} solid />}
            // onPress={() => {
            //   authentication();
            // }}
          >            
            {t("  เข้าสู่ระบบด้วยบัญชี Google")}
          </Button>

          <View style={styles.contentActionBottom}>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text body1 grayColor>
                {t("ไม่มีบัญชี, สมัครที่นี่ !!!")}
              </Text>
            </TouchableOpacity>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
