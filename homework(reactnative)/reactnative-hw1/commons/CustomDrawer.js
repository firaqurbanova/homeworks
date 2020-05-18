import React, { useContext } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { CustomText } from '../components/CustomText';
import avatarImg from '../assets/avatar.png';


export const CustomDrawer = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <Image
                    style={styles.img}
                    source={avatarImg} />
                <CustomText style={styles.username}>Username</CustomText>
            </View>

            <View style={styles.wrapper}>
                <TouchableOpacity
                    style={[styles.drawerBtn, styles.drawerAdd]}
                    onPress={() => navigation.navigate("ADD NEW LIST", {})}
                >
                    <CustomText weight="bold" style={styles.btnWrapper}>
                        Add New List
                    </CustomText>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.drawerBtn}
                    onPress={() => navigation.navigate("ONE TIME LIST", {})}
                >
                    <CustomText weight="bold" style={styles.btnWrapper}>
                        One Time List
                    </CustomText>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.drawerBtn}
                    onPress={() => navigation.navigate("REGULAR LIST", {})}
                >
                    <CustomText weight="bold" style={styles.btnWrapper}>
                        Regular List
                    </CustomText>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.drawerBtn}
                    onPress={() => navigation.navigate("USER SETTINGS", {})}
                >
                    <CustomText weight="bold" style={styles.btnWrapper}>
                        User Settings
                    </CustomText>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    info: {
        flexDirection: "row",
        marginTop: 25,
        alignItems: 'center',
    },
    img: {
        marginHorizontal: 20,
        width: 50,
        height: 50,
    },
    username: {
        fontSize: 24,
        color: "#303234",
        textAlign: 'center',
        paddingTop: 5,
        paddingLeft: 22,
    },
    wrapper: {
        flex: 1,
        backgroundColor: "#FF7676",
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        marginTop: 16,
    },
    drawerBtn: {
        marginTop: 10,
        paddingHorizontal: 20,
    },
    drawerAdd: {
        marginBottom: 21,
        marginTop: 17,

    },
    btnWrapper: {
        paddingVertical: 7,
        // borderRadius: 10,
        textAlign: "center",
        color: "#FF7676",
        backgroundColor: "white",
    },

});

