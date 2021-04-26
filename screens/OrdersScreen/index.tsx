import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { CustomHeaderButton } from "../../components/HeaderButton";
import { getOrdersDB } from "../../store/session/actions";
import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { RowOrder } from "../../components";
import { theme } from "../../theme";
import { RegularText } from "../../components/RegularText/RegularText";

export const OrdersScreen = ({ navigation }) => {
  const [load, setLoad] = useState(false);
  const dispatch = useDispatch();
  const ord = useSelector((state: object) => state.session.orders);

  const getOrders = () => {
    getOrdersDB((x) => setLoad(x))(dispatch);
  };

  useEffect(() => {
    navigation.setParams({ getOrdersDB: getOrders });
  }, []);

  useEffect(() => {
    getOrdersDB((x) => setLoad(x))(dispatch);
  }, []);

  let arr = [];
  if (Object?.keys(ord)?.length > 0) {
    arr = Object.entries(ord);
  }

  let renderData = (
    <View style={styles.centred}>
      <RegularText fontSize={18} color="white">
        У вас ще немає замовлень
      </RegularText>
    </View>
  );

  if (arr.length > 0) {
    renderData = (
      <FlatList
        data={arr}
        keyExtractor={() => Math.random()}
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
    );
  }

  return (
    <View style={styles.container}>
      {!load ? (
        <View style={styles.centred}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      ) : (
        renderData
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
  centred: { justifyContent: "center", alignItems: "center", flex: 1 },
});

OrdersScreen.navigationOptions = ({ navigation }) => {
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
