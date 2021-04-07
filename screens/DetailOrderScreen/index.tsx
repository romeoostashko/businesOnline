import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ScrollView, FlatList } from "react-native-gesture-handler";
import { Text, View } from "react-native";
import { RegularText } from "../../components/RegularText/RegularText";
import { theme } from "../../theme";
import { Id } from "./components/Id";
import { Price } from "./components/Price";
import { Shipping } from "./components/Shipping";
import { Delivery } from "./components/Delivery";
import { NameInput } from "./components/NameInput";

import {
  StyledInput,
  Wrapper,
  WrapperRow,
  WrapperTop,
  Notes,
  WrapperNotes,
  WrapperRowName,
  ViewOrders,
  WrapperRowNameOrder,
  WrapperRowNameUser,
} from "./styles";
import { TouchableNFWrapper } from "../../components/TouchableNFWrapper/TouchableNFWrapper";
import { ModalCard } from "../../components";

export const DetailOrderScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const id = navigation?.getParam("id");

  const { orders, userNames, products } = useSelector((state) => state.session);
  const thisOrder = orders?.find((i: object) => i.id === id);

  //const [isEditPrice, setEditPrice] = useState(false);
  const [data, setData] = useState({ ...thisOrder });
  const [dataNewProduct, setDataNewProduct] = useState({
    nameProduct: "",
    price: "",
    priceOrigin: "",
    number: "",
  });

  const setSheep = () => {};

  const changeText = (text: string, name: string) => {
    setData({ ...data, [name]: text });
  };

  const addToCard = () => {
    Object.values(dataNewProduct);
    if (Object.values(dataNewProduct).findIndex((i) => !i) >= 0) {
      return;
    } else {
      const maxId = data?.products?.sort((a, b) => {
        return -a.id + b.id;
      })[0]?.id;

      setData({
        ...data,
        products: [...data.products, { ...dataNewProduct, id: maxId + 1 }],
      });
      setDataNewProduct({
        nameProduct: "",
        price: "",
        priceOrigin: "",
        number: "",
      });
    }
  };

  const changeTextNewProduct = (text: string, name: string) => {
    setDataNewProduct({ ...dataNewProduct, [name]: text });
  };
  console.log("data", data);
  console.log("dataNewProduct", dataNewProduct);

  return (
    <ScrollView>
      <Wrapper>
        <WrapperTop>
          <Id id={id} />
          <Price price={thisOrder.totalPrice} isPaid={thisOrder.isPaid} />
          <Shipping isSheep={thisOrder.isSheep} />
          <Delivery isGiven={thisOrder.isGiven} />
        </WrapperTop>
        {/* Кнопка зберегти */}
        <TouchableNFWrapper
          backgroundColor="salmon"
          marginTop={20}
          elevation={4}
          onPress={() => console.log("Кнопка зберегти")}
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
        </WrapperRowNameOrder>

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
              onChangeText={(text: string) =>
                changeTextNewProduct(text, "number")
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
              onChangeText={(text: string) =>
                changeTextNewProduct(text, "price")
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
              onChangeText={(text: string) =>
                changeTextNewProduct(text, "priceOrigin")
              }
            />
          </View>
        </WrapperRow>

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
          renderItem={({ item }) => (
            <View style={{ flexDirection: "row" }}>
              <Text style={{ paddingVertical: 5, marginLeft: 10 }}>
                {item?.nameProduct}
              </Text>
              <Text style={{ paddingVertical: 5, marginLeft: 10 }}>
                {item?.price?.toString()}
              </Text>
              <Text style={{ paddingVertical: 5, marginLeft: 10 }}>
                {item?.priceOrigin?.toString()}
              </Text>
            </View>
          )}
        />

        <WrapperNotes>
          <Notes
            placeholder="Адрес"
            multiline={true}
            numberOfLines={3}
            onChangeText={(text: string) => changeText(text, "adress")}
            value={data?.adress}
          />
        </WrapperNotes>

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
