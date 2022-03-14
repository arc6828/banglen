import React, { useState, useEffect } from "react";
// ABOUT THEME
import { Header, Icon } from "@components";
import { BaseStyle, Images, useTheme } from '@config';
// END ABOUT THEME
import { View, TextInput, FlatList, Text, TouchableOpacity, Image } from "react-native";
import Plant from "../../services/Plant";
import { useNavigation } from "@react-navigation/native";

export default function RiceList() {
    const { colors } = useTheme();
    const navigation = useNavigation();
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const loadProducts = async () => {
        // let items = await Product.getItems();
        let items = await Plant.getItems();

        // items = items.filter((item) => (item.product_name.length < 50));
        //SET STATE
        setProducts(items);
        setFilteredProducts(items);
    };
    const onFilterProducts = (text) => {
        let filtered = products.filter(function (item) {
            // console.log(item.product_name.length);
            return item.variety.includes(text);
        });
        // console.log(filtered,text);
        setFilteredProducts(filtered);
    };
    useEffect(() => { loadProducts(); }, []);
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
                    <TouchableOpacity onPress={() => { navigation.navigate("PlantDetail", { item: item }); }} >
                        <View style={{ flexDirection: "row", justifyContent: "flex-start", padding: 10, borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
                            {/* <Icon style={{ padding: 0 }} name="star" size={15} color={Math.round(Math.random()) ? colors.primary : colors.border} enableRTL={true} /> */}
                            <Image style={{ width : 50 , height : 50 }} source={{ uri : "https://raw.githubusercontent.com/arc6828/banglen/main/assets/images/rice/"+item.image }} />
                            <View>                                
                                <Text style={{ fontSize : 20, color : "tomato" }}> พันธุ์{item.variety}</Text>
                                <Text style={{ fontSize : 16 }}> ผลผลิต : {item.yield} </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => (item.variety)}
            />

        </View>
    );
}