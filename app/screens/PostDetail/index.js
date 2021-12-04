import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import { BaseColor } from '@config';
import {
  Header,
  SafeAreaView,
  Icon
} from '@components';
import styles from './styles';

export default function PostDetail({ route, navigation }) {
  const  link  = route.params;
  return (
    <View style={{ flex: 1 }}>
      <Header
        title=""
        style={{ backgroundColor: BaseColor.orangeColor }}
        renderLeft={() => {
          return (
            <Icon
              name="arrow-left"
              size={20}
              color={BaseColor.whiteColor}
              enableRTL={true}
            />
          );
        }}

        onPressLeft={() => {
          navigation.goBack();
        }}
        onPressRight={() => { }}
      />
      <SafeAreaView style={{ flex: 1 }} edges={['right', 'left', 'bottom']}>
        <WebView
          style={styles.container}
          source={{ uri: link.url }}
        />

      </SafeAreaView>
    </View>
  );
}
