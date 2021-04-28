import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ScrollView, FlatList } from "react-native-gesture-handler";
import { Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { CustomHeaderButton } from "../../components/HeaderButton";
import { updateCustomer } from "../../store/session/actions";
import { Order, NewOrder } from "./types";
import { emptyNewProduct } from "./constants";
import { RegularText } from "../../components/RegularText/RegularText";
import { theme } from "../../theme";
import { Price } from "../DetailOrderScreen/components/Price";
import { Shipping } from "../DetailOrderScreen/components/Shipping";
import { Delivery } from "../DetailOrderScreen/components/Delivery";
import { NameInput } from "../DetailOrderScreen/components/NameInput";

import {
  StyledInput,
  Wrapper,
  WrapperRow,
  WrapperTop,
  Notes,
  WrapperNotes,
  WrapperRowNameOrder,
} from "./styles";
import { TouchableNFWrapper } from "../../components/TouchableNFWrapper/TouchableNFWrapper";

export const DetailProductScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const id = navigation?.getParam("id");

  const { orders, userNames, products } = useSelector((state) => state.session);
  let thisProduct = {};
  if (id !== "NEW_PRODUCT") {
    const arr = Object?.entries(products);
    thisProduct = arr?.find((i) => i[0] === id);
  }

  const [data, setData] = useState<Order>({ ...(thisProduct[1] || {}) });
  const [dataNewProduct, setDataNewProduct] = useState<NewOrder>(
    emptyNewProduct
  );

  const onSave = () => {
    updateCustomer(data, id)(dispatch);
    navigation.goBack();
  };
  useEffect(() => {
    navigation.setParams({ saveOrder: onSave });
  }, [data]);

  const changeText = (text: string, name: string) => {
    setData({ ...data, [name]: text });
  };

  /*const addToCard = () => {
    const arr = Object.entries(dataNewProduct).filter((i) =>
      i[0] === "profit" ? false : true
    );
    console.log("Додаю до корзини..."); 
    if (arr.findIndex((i) => !i[1]) >= 0) {
      console.log("Поля (товар, кількість, ціна) не заповнено"); 
      return;
    } else {
      setData({
        ...data,
        products: [...data?.products, { ...dataNewProduct }],
        totalPrice:
          +data?.totalPrice + +dataNewProduct?.price * +dataNewProduct?.number,
        profit: (!data?.profit ? 0 : +data?.profit) + +dataNewProduct?.profit,
      });
      setDataNewProduct(emptyNewOrder);
      console.log("Товар успішно додано до корзини +"); 
    }
  };*/

  /* const changeTextNewProduct = (text: string, name: string) => {
    //console.log(dataNewProduct);
    setDataNewProduct({
      ...dataNewProduct,
      [name]: text,
      profit:
        name === "number"
          ? (
              (+dataNewProduct?.price - +dataNewProduct?.priceOrigin) *
              +text
            ).toString()
          : name === "price"
          ? (
              (+text - +dataNewProduct?.priceOrigin) *
              +dataNewProduct?.number
            ).toString()
          : name === "priceOrigin"
          ? (
              (+dataNewProduct?.price - +text) *
              +dataNewProduct?.number
            ).toString()
          : 0,
    });
  };*/

  return (
    <ScrollView>
      <Wrapper>
        <WrapperTop>
          {/*<Id id={id} />*/}
          <Price setData={setData} data={data} />
          <Shipping data={data} setData={setData} />
          <Delivery data={data} setData={setData} />
        </WrapperTop>

        {/* Кнопка зберегти 
        <TouchableNFWrapper
          backgroundColor="salmon"
          marginTop={20}
          elevation={4}
          onPress={() => {
            updateCustomer(data, id)(dispatch);
            navigation.goBack();
          }}
        >
          <Text>Зберегти</Text>
        </TouchableNFWrapper>

        <WrapperRowNameOrder>
          <NameInput
            isProducts={false}
            placeholder="Ім'я клієнта"
            field="name"
            userNames={userNames}
            setData={setData}
            data={data}
            position={{ top: 51 }}
            elevation={5}
          />
        </WrapperRowNameOrder>*/}

        <WrapperRowNameOrder>
          <NameInput
            isProducts={true}
            placeholder="Товар"
            field="nameProduct"
            userNames={products}
            setData={setDataNewProduct}
            data={dataNewProduct}
            position={{ top: 51 }}
            elevation={5}
          />
        </WrapperRowNameOrder>

        <WrapperRow>
          <View>
            <RegularText textAlign="center">Кількість</RegularText>
            <StyledInput
              //style={{ backgroundColor: "#ccc" }}
              flex={1}
              maxLength={3}
              keyboardType="numeric"
              //placeholder="Кількість"
              value={dataNewProduct.number.toString()}
              onChangeText={
                (text: string) => {} //changeTextNewProduct(text, "number")
              }
            />
          </View>

          <View>
            <RegularText textAlign="center">Ціна</RegularText>
            <StyledInput
              //style={{ backgroundColor: "#ccc" }}
              maxLength={4}
              flex={1}
              keyboardType="numeric"
              //placeholder="Ціна"
              value={dataNewProduct.price.toString()}
              onChangeText={
                (text: string) => {} // changeTextNewProduct(text, "price")
              }
            />
          </View>

          <View>
            <RegularText textAlign="center">Ціна закупки</RegularText>
            <StyledInput
              //style={{ backgroundColor: "#ccc" }}
              maxLength={4}
              flex={1}
              keyboardType="numeric"
              //placeholder="Ціна закупки"
              value={dataNewProduct.priceOrigin.toString()}
              onChangeText={
                (text: string) => {} // changeTextNewProduct(text, "priceOrigin")
              }
            />
          </View>
        </WrapperRow>

        {/**** ДОДАТИ ДО КОРЗИНИ 
        <TouchableNFWrapper
          onPress={addToCard}
          backgroundColor="mediumseagreen"
          marginTop={7}
          elevation={4}
        >
          <Text>Додати до корзини</Text>
        </TouchableNFWrapper>

        <FlatList
          style={{ flexGrow: 1, height: 100, width: "100%" }}
          data={data?.products}
          keyExtractor={() => Math.random().toString()}
          renderItem={({ item }) => (
            <View style={{ flexDirection: "row" }}>
              <Text style={{ paddingVertical: 5, marginLeft: 10 }}>
                {item?.number} шт
              </Text>
              <Text style={{ paddingVertical: 5, marginLeft: 10 }}>
                {item?.nameProduct}
              </Text>
              <Text style={{ paddingVertical: 5, marginLeft: 10 }}>
                {item?.price?.toString()} грн
              </Text>
              <Text style={{ paddingVertical: 5, marginLeft: 10 }}>
                {item?.priceOrigin?.toString()} грн
              </Text>
              <Text style={{ paddingVertical: 5, marginLeft: 10 }}>
                {item?.profit?.toString()} грн
              </Text>
            </View>
          )}
        />
****/}

        <WrapperNotes>
          <Notes
            placeholder="Коментар"
            multiline={true}
            numberOfLines={3}
            onChangeText={(text: string) => changeText(text, "comment")}
            value={data?.comment}
          />
        </WrapperNotes>
      </Wrapper>
    </ScrollView>
  );
};

DetailProductScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          item="save"
          iconName="save"
          onPress={() => navigation.getParam("saveOrder")()}
        ></Item>
      </HeaderButtons>
    ),
  };
};
