import React, { useState } from 'react';
import { RefreshControl, FlatList, View, Text, Dimensions } from 'react-native';
import { BaseStyle, useTheme } from '@config';
import { useTranslation } from 'react-i18next';
import { Header, SafeAreaView, Icon, ListThumbCircle } from '@components';
// import styles from './styles';
import { NotificationData } from '@data';

export default function Notification({ navigation }) {
    const { t } = useTranslation();
    const { colors } = useTheme();

    const [refreshing] = useState(false);
    // const [notification] = useState(NotificationData);
    const [notification] = useState([]);

    return (
        <View style={{ flex: 1 }}>
            <Header
                title={t('notification')}
            // renderLeft={() => {
            //   return (
            //     <Icon
            //       name="arrow-left"
            //       size={20}
            //       color={colors.primary}
            //       enableRTL={true}
            //     />
            //   );
            // }}
            // onPressLeft={() => {
            //   navigation.goBack();
            // }}
            />
            <SafeAreaView
                style={BaseStyle.safeAreaView}
                edges={['right', 'left', 'bottom']}>
                <FlatList 
                    // style={{ backgroundColor : 'lightblue' }}
                    contentContainerStyle={{ 
                        paddingHorizontal: 20, paddingVertical: 10 }}
                    
                    refreshControl={
                        <RefreshControl
                            colors={[colors.primary]}
                            tintColor={colors.primary}
                            refreshing={refreshing}
                            onRefresh={() => { }}
                        />
                    }
                    data={notification}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({ item, index }) => (
                        <ListThumbCircle
                            image={item.image}
                            txtLeftTitle={item.title}
                            txtContent={item.description}
                            txtRight={item.date}
                            style={{ marginBottom: 5 }}
                        />
                    )}
                    ListEmptyComponent={(
                        <View style={{ justifyContent : 'center' , alignItems : 'center', flexDirection : 'column', height : (Dimensions.get("screen").height - 150) }}>
                            <Icon
                                name="bell-slash"
                                size={60}
                                color={colors.primary}
                                enableRTL={true}
                            />
                            <Text style={{ fontSize : 20 , marginVertical : 15 }}>ยังไม่มีการแจ้งเตือน</Text>
                        </View>
                    )}
                />
            </SafeAreaView>
        </View>
    );
}