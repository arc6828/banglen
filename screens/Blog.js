import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { BaseStyle, useTheme } from '@config';
import { Header, SafeAreaView, PostItem, ProfileAuthor } from '@components';
import { useTranslation } from 'react-i18next';
import Medium from '../services/Medium';

export default function Blog({ navigation }) {

    const { colors } = useTheme();
    const { t } = useTranslation();

    const [refreshing, setRefreshing] = useState(false);
    const [posts, setPosts] = useState([]);

    const loadPost = async () => {
        // console.log("Load");
        let p = await Medium.getPosts();
        setPosts(p);

        console.log("Load XML");
        Medium.getPostsXML()
    };

    function cleanDescription(){
        return "HELLO";
    }

    useEffect(() => {
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
                            image={item.thumbnail}
                            title={item.title}
                            description={(()=>{
                                let substr = item.content.split("<p>")[1];
                                return substr.substring(0, 200) + " ... ";
                            })()}
                            // description={cleanDescription()}
                            onPress={() => navigation.navigate('PostDetail', { url: item.link })}
                        >
                            <ProfileAuthor
                                image={"https://cdn-images-1.medium.com/fit/c/36/36/0*KC4C9CrRgdxkOGsI"}
                                name={item.author}
                                description={item.pubDate}
                                style={{ paddingHorizontal: 20 }}
                            />
                        </PostItem>
                    )}
                />
            </SafeAreaView>
        </View >
    );
}
