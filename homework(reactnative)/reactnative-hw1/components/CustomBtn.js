import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Button
} from "react-native";

import { CustomText } from "./CustomText";

export const CustomBtn = ({ title, onPress, style, ...rest }) => {


  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.btn}>
          <CustomText weight="bold" style={styles.title}>
            {title}
          </CustomText>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF7676",
    borderRadius: 40,
    paddingVertical: 15,
    width: 340,
    margin: 10,
  },
  title: {
    color: "#303234",
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 14,
  },
});


