import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { CustomHeaderButton } from "../../components/HeaderButton";
import { RowProduct } from "../../components";

export const AllProductsScreen = ({ navigation }) => {
  return (
    <RowProduct
      navigation={navigation}
      name="Вітамін с5000"
      id="df"
      totalPrice={10}
      numbers={5}
      isGiven={true}
      isPaid={true}
      profit={10}
    />
  );
};

const styles = StyleSheet.create({});

AllProductsScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          item="reload"
          iconName="reload"
          //onPress={() => navigation.getParam("getOrdersDB")()}
        ></Item>
      </HeaderButtons>
    ),
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          item="menu"
          iconName="menu"
          onPress={() => navigation.toggleDrawer()}
        ></Item>
      </HeaderButtons>
    ),
  };
};
