import React, { useState } from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity, TouchableWithoutFeedback, Alert } from "react-native"
import { Dimensions } from 'react-native';
import { Keyboard } from 'react-native'
import { connect } from 'react-redux';

import { CustomText, CustomBtn, CustomField } from '../components';
import { addList, getLists, addProduct } from '../redux/data';



const mapStateToProps = (state) => ({
    lists: getLists(state),
});


export const CreateListScreen = connect(mapStateToProps, {
    addList
})(({ addList, navigation }) => {

    const [type, setType] = useState("regular");
    const [fields, setFields] = useState({
        listID: "",
        name: "",
        type: "",
        products: {},
    });




    const fieldChangeHandler = (name, val,type) => {
        setFields((fields) => ({
            ...fields,
            [name]: val,
            [type]:type,

        }));
console.log(fields.name);

    };


    // const handleAdd = (type) => {

    //     const args = {
    //         name: fields.name,
    //         type,

    //     };
    //     // console.log(fields.name);
    //     if (fields.name.trim() !== "") {

    //         addList(args);
    //         if (args.type === "regular") {
    //             navigation.navigate("Regular List");

    //         }
    //         else {
    //             navigation.navigate("One Time List");
    //         }
    //     }
    //     // console.log(args.name);
    // };
    const handleAdd=(type)=>{
        if(type==="onetime" && fields.name.trim()!==""){
            addList(fields.name);
            // addList(type);
            navigation.navigate("ONE TIME LIST");
        }
        
        else if(type==="regular" && fields.name.trim()!==""){
            addList(fields.name);
            navigation.navigate("REGULAR LIST");
        }
    };
    console.log(fields.name);
    

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>

                <View style={styles.header}>
                    <CustomText weight="medium" style={styles.headerText}>New List</CustomText>

                </View>
                <View style={styles.main}>
                    <CustomText style={styles.listname}>list name
              </CustomText>
                    <CustomField
                        onChangeText={(val) => fieldChangeHandler("name", val)}
                        placeholder="Something for me"

                    />
                    <View style={styles.row}>
                        <TouchableOpacity
                            style={styles.options}
                            onPress={() => setType("onetime")}
                        >
                            <Text style={{ fontWeight: type === 'onetime' ? 'bold' : '400' }}>One Time</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.options}
                            onPress={() => setType("regular")}
                        >
                            <Text style={{ fontWeight: type === 'regular' ? 'bold' : '400' }}>Regular</Text>
                        </TouchableOpacity>
                    </View>
                    <CustomBtn title="CREATE LIST" onPress={()=>handleAdd(type)} />

                </View>
            </View>
        </TouchableWithoutFeedback>
    );
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        // alignItems:"center",
    },

    header: {

        width: Dimensions.get('screen').width,
        padding: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FF7676",
        marginBottom: -15,

    },
    headerText: {
        fontWeight: "bold",
        fontSize: 14,
        color: "#EEEEEE",

    },
    main: {
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        backgroundColor: "white",
        flex: 1,
    },
    icon: {
        position: "absolute",
        right: 17,
    },
    listname: {
        textAlign: "center",
        fontSize: 12,
        marginTop: 10,
    },
    btn: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    row: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },
    options: {
        width: 160,
        height: 40,
        backgroundColor: "#EEEEEE",
        borderRadius: 45,
        paddingVertical: 10,
        margin: 10,
        fontSize: 12,
        alignItems: "center",
    }

})

