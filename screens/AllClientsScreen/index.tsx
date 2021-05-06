import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../store/session/actions";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { CustomHeaderButton } from "../../components/HeaderButton";
import { RowOrder } from "../../components";

export const AllClientsScreen = ({ navigation }) => {
  const { users } = useSelector((state) => state.session);
  const dispatch = useDispatch();
  const [load, setLoad] = useState(false);
  console.log("clients All", users);

  const getUsersFn = () => {
    getUsers((x) => setLoad(x))(dispatch);
  };

  useEffect(() => {
    getUsersFn();
  }, []);

  useEffect(() => {
    navigation.setParams({ getUsersFn: getUsersFn });
  }, []);

  console.log();
  return (
    <View style={styles.container}>
      {!load ? (
        <View style={styles.centred}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      ) : (
        <FlatList
          data={users}
          renderItem={({ item }) => (
            <RowOrder //TODO:
              isOrder={false}
              navigation={navigation}
              name={item.name}
              id={item.id}
            />
          )}
        />
      )}

      <View style={styles.addNewProduct}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("DetailProduct", {
              id: "NEW_PRODUCT",
              setLoad: setLoad,
            });
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
  centred: { justifyContent: "center", alignItems: "center", flex: 1 },
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
    backgroundColor: "mediumseagreen",
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
  top: {
    height: 30,
    backgroundColor: "white",
    marginHorizontal: 2,
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 8,
    flexDirection: "row",
    paddingHorizontal: 15,
  },
});

AllClientsScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          item="reload"
          iconName="reload"
          onPress={() => navigation.getParam("getUsersFn")()}
        ></Item>
      </HeaderButtons>
    ),
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          item="menu"
          iconName="menu"
          onPress={() => {
            navigation.toggleDrawer();
          }}
        ></Item>
      </HeaderButtons>
    ),
  };
};
