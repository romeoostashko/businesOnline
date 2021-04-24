import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { getOrdersDB } from "../../store/session/actions";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import { RowOrder } from "../../components";
import { TouchableNFWrapper } from "../../components/TouchableNFWrapper/TouchableNFWrapper";
import Test from "../../components/Test";
import { DetailOrderScreen } from "../DetailOrderScreen";
import { CustomHeaderButton } from "../../components/HeaderButton";

export const OrdersScreen = ({ navigation }) => {
  const [load, setLoad] = useState(true);
  const dispatch = useDispatch();
  const ord = useSelector((state: object) => state.session.orders);

  const getOrders = () => {
    getOrdersDB()(dispatch);
  };
  useEffect(() => {
    navigation.setParams({ getOrdersDB: getOrders });
  }, []);

  useEffect(() => {
    getOrdersDB()(dispatch);
  }, []);

  let arr = [];
  if (Object?.keys(ord)?.length > 0) {
    arr = Object.entries(ord);
  }

  return (
    <View style={styles.container}>
      {!arr.length ? (
        <>
          <Text>Завантажую дані, зачекайте...</Text>
        </>
      ) : (
        <FlatList
          data={arr}
          renderItem={(data) => {
            return (
              <RowOrder
                navigation={navigation}
                name={data.item[1].name}
                id={data.item[0]}
                totalPrice={data.item[1].totalPrice}
                isSheep={data.item[1].isSheep}
                isGiven={data.item[1].isGiven}
                isPaid={data.item[1].isPaid}
                profit={data.item[1].profit}
              />
            );
          }}
        />
      )}
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
});

OrdersScreen.navigationOptions = ({ navigation }) => {
  console.log("/////", navigation.getParam("getOrdersDB"));
  return {
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          item="reload"
          iconName="reload"
          onPress={() => navigation.getParam("getOrdersDB")()}
        ></Item>
      </HeaderButtons>
    ),
  };
};
