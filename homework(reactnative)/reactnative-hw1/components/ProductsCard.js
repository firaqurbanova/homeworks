import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { CustomText } from './CustomText';

export const ProductsCard = ({ name, count, unit, bought, listID, productID }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.productsCard}
            onPress={() => {
                navigation.navigate("Single List", { listID, productID });
            }}>
            <View style={[styles.products, { opacity: bought ? 0.5 : 1 }]}>
                <CustomText style={styles.name}>{name}</CustomText>
                <CustomText style={styles.count}>x{count} {unit}</CustomText>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    productsCard: {
        width: Dimensions.get('screen').width,
        paddingVertical: 10,
        borderRadius: 20,
        borderColor: "#FFD976",
        borderWidth: 2,
        marginTop: 10,
        paddingHorizontal: 10,
        justifyContent: "center",
    },
    products: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

})