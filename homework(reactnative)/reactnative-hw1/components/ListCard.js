import React from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { CustomText } from './CustomText';
import { ProductsCard } from './'

export const ListCard = ({ list, onPress, onLongPress }) => {
    // const navigation = useNavigation();
    const { name, products, type } = list;
    const { bought } = list.products;

    const productsCount = products.length;
    // let boughtProductsCount=0;
    // for( let i=0;i<productsCount;i++){
    //     if(list.products[i].bought===true){
    //          boughtProductsCount++;
    //     };
    // }; 
    //just

    const boughtProductsCount = products.filter((product) => product.bought === true).length;


    let fill = (boughtProductsCount / productsCount) * 340;
    rectangle2 = function (x) {
        return {
            width: fill,
        }
    }
    return (

        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
                <View style={styles.card}>
                    <View style={styles.row}>
                        <CustomText style={styles.heading}>{name}</CustomText>
                        <CustomText style={styles.count}>{boughtProductsCount}/{productsCount}</CustomText>
                    </View>
                    <View style={styles.rectangles}>
                        <View style={styles.rectangle1}></View>
                        <View style={[rectangle2(fill), styles.rectangle2]}></View>

                    </View>
                </View>
            </TouchableOpacity>
        </View>

    )
};
const styles = StyleSheet.create({
    container: {

        justifyContent: "center",
        alignItems: "center",

    },
    card: {
        width: 360,
        height: 80,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#FFE194",
        marginBottom: 5,
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",

    },
    heading: {
        fontSize: 15,
        fontWeight: "600",
    },
    rectangles: {
        alignItems: "center",
        flexDirection: "row",
        marginTop: 5,
    },
    rectangle1: {
        width: 340,
        height: 20,
        backgroundColor: "#EEEEEE",
        borderRadius: 20,

    },
    rectangle2: {
        height: 20,
        backgroundColor: "#FFD976",
        borderRadius: 20,
        position: "absolute",

    },

})
