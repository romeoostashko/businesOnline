import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { CustomHeaderButton } from "../../components/HeaderButton";
import { RowProduct } from "../../components";

export const AllProductsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
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

      <View style={styles.addNewProduct}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("DetailProduct", { id: "NEW_PRODUCT" });
          }}
        >
          <View style={styles.containerAddNewProduct}>
            <Text style={{ fontSize: 30 }}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    width: "100%",
    backgroundColor: "#808080",
    flex: 1,
    marginHorizontal: 0,
    marginTop: 0,
  },
  containerAddNewProduct: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  addNewProduct: {
    position: "absolute",
    right: 40,
    bottom: 50,
    backgroundColor: "#808080",
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    elevation: 10,
  },
});

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
