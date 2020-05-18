import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Homepage2Screen, SingleListScreen } from "../screens";

const { Navigator, Screen } = createStackNavigator();

export const RegularStack = () => {
    return(
      
  <Navigator headerMode="none">
    <Screen name="Regular List" component={Homepage2Screen} />
    <Screen name="Single List" component={SingleListScreen} />
  </Navigator>
  
    )
    };
