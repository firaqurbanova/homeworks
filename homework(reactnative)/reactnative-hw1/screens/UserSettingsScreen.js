import React from 'react'
import {StyleSheet, View, Text,Button,TouchableOpacity} from "react-native"
import { Dimensions } from 'react-native';
import { Keyboard } from 'react-native'


import { CustomText, CustomBtn,CustomField } from '../components';





export const UserSettingsScreen = ({navigation}) =>{
    
    return (
        
        <View style={styles.container}>
          <View style={styles.header}>
          <CustomText weight="medium" style={styles.headerText}>User Settings</CustomText>
          
          </View>
          <View style={styles.main}>
              <CustomText style={styles.listname}>username
              </CustomText>
          <CustomField />
          <CustomText style={styles.listname}>avatar url
              </CustomText>
          <CustomField />
               <CustomBtn title="SAVE CHANGES" onPress={Keyboard.dismiss} />   
          </View>
        </View>
        
      );
    }

const styles=StyleSheet.create({
    container:{
        flex:1,

    },

    header:{
        
        width:Dimensions.get('screen').width,
        padding:30,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#FF7676",
        marginBottom:-15,
        
    },
    headerText:{
        fontWeight:"bold",
        fontSize:14,
        color:"#EEEEEE",
        
    },
    main:{
        borderTopEndRadius:20,
        borderTopStartRadius:20,
        backgroundColor:"white",
        flex:1,
        },
    icon:{
        position:"absolute",
        right:17,
    },
    listname:{
        textAlign:"center",
        fontSize:12,
        marginTop:10,
    },
    btn:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    },
    row:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginTop:10,
    },
    options:{
        width:160,
        height:40,
        backgroundColor:"#EEEEEE",
        borderRadius:45,
        paddingVertical:10,
        margin:10,
        fontSize:12,
        alignItems:"center",
    }

})