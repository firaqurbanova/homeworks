import React from 'react'
import {StyleSheet, View, Text,Button, Alert} from "react-native"
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { useSafeArea } from 'react-native-safe-area-context';
import { Dimensions } from 'react-native';
import {connect} from 'react-redux'

import { CustomText, CustomBtn, ListCard } from '../components';
import {getLists, deleteList} from '../redux/data'

const mapStateToProps=(state)=>({
    lists: getLists(state),
})

export const HomepageScreen =  connect (mapStateToProps, {deleteList})((props)=>{
    // const navigation=useNavigation();
    
    const {lists,navigation,deleteList}=props;
    // const {top}=useSafeArea();
    const list = lists.filter((list) => list.type === "onetime");
    const deleteListHandler = (listID) => {
        Alert.alert(
            'Delete Confirmation',
            'Are you sure want to delete?',
            [
              {
                text: 'Yes',
                onPress: () => deleteList({ listID }),
              },
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
              }
            ],
            
          );
    }
    // const openMenu=()=>{
    //     navigation.openDrawer()
    // }
    return (

        <View style={styles.container}>

          <View style={styles.header}>
          <CustomText weight="medium" style={styles.headerText}>One Time Lists</CustomText>
          
          <Ionicons name="ios-menu" size={24} color="white" style={styles.icon} onPress={()=>navigation.openDrawer()} />
          </View>
          <View style={styles.main}>
              
            <ScrollView style={styles.lists}>
                {list.map((list)=> (
            
                    <ListCard
                     key={list.id}
                     list={list}  
                     onPress={() =>
                        navigation.navigate("Single List", {
                          listId: list.id,
                          name: list.name,
                          products: list.products,
                        })
                      }  
                      onLongPress={() => deleteListHandler(list.id)}
                     />
            
                ))}
            </ScrollView>
          </View>
        </View>

      );
    }
);

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
    lists:{
        paddingVertical:25,
    }

})
