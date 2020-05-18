import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { HomepageScreen, SingleListScreen } from "../screens";

const { Navigator, Screen } = createStackNavigator();

export const HomeStack = () => {
    return(
      
  <Navigator headerMode="none">
    <Screen name="One Time List" component={HomepageScreen} />
    <Screen name="Single List" component={SingleListScreen} />
  </Navigator>
  
    )
    };
