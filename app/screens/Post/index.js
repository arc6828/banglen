import React, { useState, useEffect } from 'react';
import { RefreshControl, FlatList, View } from 'react-native';
import { BaseStyle, useTheme } from '@config';
import { Header, SafeAreaView, PostItem, ProfileAuthor } from '@components';
import styles from './styles';
import { PostData } from '@data';
import { useTranslation } from 'react-i18next';
import RssJson from '../../../backend/json/jnm9642ns.json';

export default function Post({ navigation }) {
  const { colors } = useTheme();
  const { t } = useTranslation();

  const [refreshing] = useState(false);
  const [posts] = useState(PostData);
  const [rssJson, setRssJson] = useState(RssJson);
  console.log("🚀 ~ file: index.js ~ line 17 ~ Post ~ rssJson", rssJson)
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
          keyExtractor={(item, index) => item.id}
          renderItem={({ item, index }) => (
            <PostItem
              image={item.image}
              title={item.title}
              description={item.content}
              onPress={() => navigation.navigate('PostDetail')}
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
    </View>
  );
}
