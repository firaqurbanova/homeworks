import React, {useState} from 'react'
import {StyleSheet, View, Text, TextInput} from 'react-native'
import { CustomText } from "./CustomText";


export const CustomField=({placeholder,placeholderTextColor,style,onChangeText})=>{
    // const[listName,setListName]=useState("")
    
    return(
        <View style={styles.container} >

            <TextInput 
            placeholder={placeholder}
            // placeholderTextColor={placeholderTextColor}
            style={styles.input} 
            onChangeText={onChangeText}
            />
            

        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center",
    },
    input:{
        marginTop:10,
        width:'91%',
        height:40,
        borderRadius:45,
        backgroundColor:"#EEEEEE",
        textAlign:"center",
        
        
    },
})