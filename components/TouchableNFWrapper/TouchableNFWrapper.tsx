import React from "react";

import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";
import { TouchableNFWrapperProps } from "./types";
//import { ExternalWrapper } from "./style";

export const TouchableNFWrapper = ({
  children,
  onPress = () => console.log("Click on TouchableNFWrapper"),
  backgroundFeedback = "#ccc",
  height = 50,
  borderRadius = 12,
  width = "100%",
  backgroundColor = "#fff",
  elevation = 0,
  marginBottom = 0,
  marginTop = 0,
  marginLeft = 0,
  marginRight = 0,
  padding = 0,
}: TouchableNFWrapperProps) => {
  const ExternalWrapperStyle = () => {
    return {
      borderRadius: borderRadius,
      height: height.toString().includes("%") ? height.toString() : +height,
      width: width.toString().includes("%") ? width.toString() : +width,
      backgroundColor: backgroundColor,
      elevation: elevation,
      marginBottom: marginBottom.toString().includes("%")
        ? marginBottom.toString()
        : +marginBottom,
      marginTop: marginTop.toString().includes("%")
        ? marginTop.toString()
        : +marginTop,
      marginLeft: marginLeft.toString().includes("%")
        ? marginLeft.toString()
        : +marginLeft,
      marginRight: marginRight.toString().includes("%")
        ? marginRight.toString()
        : +marginRight,
    };
  };

  const wrapperContentStyle = () => {
    return {
      padding: padding,
    };
  };

  return (
    <View style={ExternalWrapperStyle()}>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple(backgroundFeedback, true)}
        style={{ flex: 1 }}
        onPress={onPress}
      >
        <View style={{ ...styles.wrapperContent, ...wrapperContentStyle() }}>
          {children}
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  /*ExternalWrapper: {
    borderRadius: 12,
    height: 70,
    width: "100%",
    backgroundColor: "#fff",
    elevation: 15,
    marginBottom: 7,
  },*/
  wrapperContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
