import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { BaseStyle, useTheme } from '@config';
import { Header, SafeAreaView, PostItem, ProfileAuthor } from '@components';
import { useTranslation } from 'react-i18next';
import RssJson from '../../../backend/json/86m388h17.json';
import Medium from '../../../services/Medium';

export default function Post({ navigation }) {
  const { colors } = useTheme();
  const { t } = useTranslation();

  const [refreshing, setRefreshing] = useState(false);
  const [posts, setPosts] = useState([]);

  const loadPost = async ()=>{    
    let p = await Medium.getPosts();
    setPosts(p);
  };

  useEffect(()=> {
    loadPost();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Header title={t('post')} />
      <SafeAreaView style={BaseStyle.safeAreaView} edges={['right', 'left', 'bottom']}>
        <FlatList
          refreshing={refreshing}
          onRefresh={() => { 
            setRefreshing(true);
            loadPost();
            setRefreshing(false);
          }}
          data={posts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <PostItem style={{ paddingTop: 10 }}
              key={index}
              image={item.image}
              title={item.title}
              description={item.content.substring(0, 200) + " ..."}
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
