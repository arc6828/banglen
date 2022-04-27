import React, { useState, useEffect } from "react";
// ABOUT THEME
import { Header, Icon } from "@components";
import { BaseStyle, Images, useTheme } from '@config';
// END ABOUT THEME
import { View, TextInput, FlatList, Text, TouchableOpacity } from "react-native";
import Product from "../../services/Product";
import { useNavigation } from "@react-navigation/native";

export default function Market(props) {
    const { colors } = useTheme();
    const navigation = useNavigation();
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const loadProducts = async () => {
        let items = await Product.getItems();
        items = items.filter((item) => {
            let mode = true;
            if(props.code == "before"){
                mode = (item.product_name.includes("เปลือก"));
            }else{
                mode = !(item.product_name.includes("เปลือก"));
            }
            return (item.product_name.length < 50) && mode;
        });
        
        //SET STATE
        setProducts(items);
        setFilteredProducts(items);
    };
    const onFilterProducts = (text) => {
        let filtered = products.filter(function (item) {
            // console.log(item.product_name.length);
            return item.product_name.includes(text);
        });
        // console.log(filtered,text);
        setFilteredProducts(filtered);
    };
    useEffect(() => { 
        loadProducts(); 
    }, []);
    return (
        <View style={{ padding: 10 }}>
            <View style={{ flexDirection: "row", backgroundColor: '#eeeeee', borderRadius: 5 }}>
                <Icon style={{ padding: 10 }} name="search" size={20} color={colors.primary} enableRTL={true} />
                <TextInput
                    style={{ padding: 10, width: "90%", backgroundColor: '#eeeeee' }} placeholder="ค้นหาผลิตภัณฑ์"
                    onChangeText={(text) => { onFilterProducts(text); }}
                />
            </View>
            <FlatList
                data={filteredProducts}
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => { navigation.navigate("PriceDetail", { item: item }); }} >
                        <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 10, borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
                            <Icon style={{ padding: 0 }} name="star" size={15} color={Math.round(Math.random()) ? colors.primary : colors.border} enableRTL={true} />
                            <Text> {item.product_name}</Text>
                            <Text> {item.price ? item.price.price_min : "-"} / {item.price ? item.price.price_max : "-"} </Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => (item.product_id)}
            />

        </View>
    );
}