import React, { useState } from 'react';
import { RefreshControl, FlatList, View } from 'react-native';
import { BaseStyle, useTheme } from '@config';
import { Header, SafeAreaView, PostItem, ProfileAuthor } from '@components';
import { useTranslation } from 'react-i18next';
import RssJson from '../../../backend/json/86m388h17.json';

export default function Post({ navigation }) {
  const { colors } = useTheme();
  const { t } = useTranslation();

  const [refreshing] = useState(false);
  const [rssJson, setRssJson] = useState(RssJson);
  return (
    <View style={{ flex: 1 }}>
      <Header title={t('post')} />
      <SafeAreaView
        style={BaseStyle.safeAreaView}
        edges={['right', 'left', 'bottom']}>
        <FlatList
          refreshControl={
            <RefreshControl
              colors={[colors.primary]}
              tintColor={colors.primary}
              refreshing={refreshing}
              onRefresh={() => { }}
            />
          }
          data={rssJson}
          keyExtractor={(item, index) => index}
          renderItem={({ item, index }) => (
            <PostItem
              key={index}
              image={item.image}
              title={item.title}
              description={item.content.substring(0, 250) + " ..."}
              onPress={() => navigation.navigate('PostDetail', { url: item.link })}
            >
              <ProfileAuthor
                image={item.image_author}
                name={item.author}
                description={item.link}
                style={{ paddingHorizontal: 20 }}
              />
            </PostItem>
          )}
        />
      </SafeAreaView>
    </View >
  );
}
