import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { Icon } from '@components';
import { useNetInfo } from '@react-native-community/netinfo';

const { width } = Dimensions.get('window');
export default function OfflineNotice(props) {
    const isOffline = useState(false);
    const netInfo = useNetInfo();
    console.log(netInfo.isConnected);
    const {refreshing,count} = props;

    useEffect(()=>{
        // console.log(refreshing,count);
    },[count]);

    
    if(netInfo.isConnected == true){
        return (
            <View></View>
        );
    }else{        
        return (
            <View style={styles.offlineContainer}>
                <Icon name={"wifi"} size={18} color={"white"} solid />
                <Text style={styles.offlineText}>   No Internet Connection</Text>
            </View>
        );
    }
    
}
const styles = StyleSheet.create({
    offlineContainer: {
        backgroundColor: '#b52424',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width,
        position: 'absolute',
        top: 30,
        zIndex : 1000
    },
    offlineText: {
        color: '#fff'
    }
});
