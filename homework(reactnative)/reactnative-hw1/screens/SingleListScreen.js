import React from 'react'
import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import { Dimensions } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 

import { ProductsCard } from '../components/ProductsCard'
import { CustomText, CustomBtn } from '../components';
import {connect} from 'react-redux';
import { getLists } from '../redux/data';

const mapStateToProps = (state) => ({
    lists: getLists(state),
  });

export const SingleListScreen = connect(mapStateToProps)(({lists,route,navigation}) =>{

   
    const id = route.params.listId;
    const products=lists.find((item)=>item.id===id).products;
    // const product=lists.find((list)=>list.id===id)?.products.find((product)=>product.id===product.id);
    const listName=lists.find((item)=>item.id===id).name;
    // const list=lists.find((item)=>item.id===id);
    const boughtProductsCount = products.filter((product) => product.bought === true).length;
    const productsCount=products.length;
    // console.log(list);
    return (

        <View style={styles.container}>

          <View style={styles.header}>
          <CustomText weight="medium" style={styles.headerText}>{listName}</CustomText>
          <AntDesign name="arrowleft" size={24} color="white" style={styles.arrowBackIcon} onPress={() => navigation.popToTop()}
         
              
             />
          <Feather name="edit-2" size={20} color="white" style={styles.editIcon} onPress={()=>navigation.navigate("Single List Edit", {})}/>
          </View>
          
          <View style={styles.main}>
         
              <View style={styles.headerRow}>
<TouchableOpacity style={styles.resetBtn}>
    <CustomText style={{color:"white",fontSize:10,fontWeight:"bold"}}>RESET</CustomText>
</TouchableOpacity> 
            <View>
    <CustomText>{boughtProductsCount}/{productsCount}</CustomText>
            </View>
</View>
       <ScrollView>
           {products.map((list) => (
            <ProductsCard
              item={list}
              name={list.name}
              count={list.count}
              unit={list.unit}
              bought={list.bought}           
            />
          ))}
       </ScrollView>

          
          </View>
          
        </View>
        
    );
        });
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
            editIcon:{
                position:"absolute",
                right:17,
            },
            arrowBackIcon:{
                position:"absolute",
                left:17,
            },
            headerRow:{
                flexDirection:"row",
                justifyContent:"space-between",
                marginTop:10,
                marginHorizontal:10,
            },
            resetBtn:{
                paddingHorizontal:20,
                paddingVertical:3,
                backgroundColor:"#FF7676",
                borderRadius:50,
                color:"white",
            },
        
        })
        