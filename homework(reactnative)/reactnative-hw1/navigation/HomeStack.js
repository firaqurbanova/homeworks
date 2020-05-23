import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { HomepageScreen, SingleListScreen, SingleListEditScreen } from "../screens";


const { Navigator, Screen } = createStackNavigator();

export const HomeStack = () => {
    return(
      
  <Navigator headerMode="none">
    <Screen name="One Time List" component={HomepageScreen} />
    <Screen name="Single List" component={SingleListScreen} />
    <Screen name="Single List Edit" component={SingleListEditScreen} />
  </Navigator>
  
    )
    };
