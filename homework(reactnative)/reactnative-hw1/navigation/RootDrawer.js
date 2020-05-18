import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {View, Text} from 'react-native'
import {createDrawerNavigator} from '@react-navigation/drawer'

import { UserSettingsScreen,CreateListScreen} from '../screens';
import {CustomDrawer} from '../commons/CustomDrawer'
import { HomeStack } from './HomeStack';
import {RegularStack} from './RegularStack'


const Drawer = createDrawerNavigator();

export const RootDrawer=()=>{


    return (

          <NavigationContainer>
            <Drawer.Navigator initialRouteName="ONE TIME LISTS"
             drawerContent={({navigation}) => (
              <CustomDrawer navigation={navigation} />
          )} 
          >
              <Drawer.Screen name="ONE TIME LIST" component={HomeStack} />
              <Drawer.Screen name="ADD NEW LIST" component={CreateListScreen} />
              <Drawer.Screen name="REGULAR LIST" component={RegularStack} />
              <Drawer.Screen name="USER SETTINGS" component={UserSettingsScreen} />
            </Drawer.Navigator>
          </NavigationContainer>

        );
        
    
}