import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ScrollView, FlatList } from "react-native-gesture-handler";
import { Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { CustomHeaderButton } from "../../components/HeaderButton";
import {
  setNewProduct,
  getProducts,
  updateProduct,
} from "../../store/session/actions";
import { NewProduct } from "./types";
import { emptyNewProduct } from "./constants";
import { RegularText } from "../../components/RegularText/RegularText";
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
  const setLoad = navigation?.getParam("setLoad");

  const { products } = useSelector((state) => state.session);
  let thisProduct = {};
  if (id !== "NEW_PRODUCT") {
    const arr = Object?.entries(products);
    thisProduct = arr?.find((i) => i[0] === id);
  }

  //const [data, setData] = useState<Order>({ ...(thisProduct[1] || {}) });
  const [dataNewProduct, setDataNewProduct] = useState<NewProduct>({
    ...(thisProduct[1] || emptyNewProduct),
  });
  console.log(dataNewProduct);
  const onSave = () => {
    if (
      dataNewProduct?.name?.toString().length > 0 &&
      dataNewProduct?.price?.toString().length > 0 &&
      dataNewProduct?.priceOrigin?.toString().length > 0
    ) {
      console.log("save");
      if (id !== "NEW_PRODUCT") {
        updateProduct(dataNewProduct, id)(dispatch);
        navigation.goBack();
      } else {
        setNewProduct(dataNewProduct)(dispatch);
        getProducts((x) => setLoad(x))(dispatch);
        navigation.goBack();
      }
    } else {
      console.log("dont  saved");
    }
  };

  useEffect(() => {
    navigation.setParams({ saveNewProduct: onSave });
  }, [dataNewProduct, dataNewProduct?.name?.length]);

  const changeText = (text: string, name: string) => {
    setDataNewProduct({ ...dataNewProduct, [name]: text });
  };

  const changeTextNewProduct = (text: string, name: string) => {
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
  };

  return (
    <ScrollView>
      <Wrapper>
        <WrapperRowNameOrder>
          <NameInput
            isProducts={true}
            placeholder="Товар"
            field="name"
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
              value={dataNewProduct?.number?.toString()}
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
              value={dataNewProduct?.price?.toString()}
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
              value={dataNewProduct?.priceOrigin?.toString()}
              onChangeText={(text: string) =>
                changeTextNewProduct(text, "priceOrigin")
              }
            />
          </View>
        </WrapperRow>

        <WrapperNotes>
          <Notes
            placeholder="Опис товару"
            multiline={true}
            numberOfLines={3}
            onChangeText={(text: string) => changeText(text, "comment")}
            value={dataNewProduct?.comment?.toString()}
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
          onPress={() => navigation.getParam("saveNewProduct")()}
        ></Item>
      </HeaderButtons>
    ),
  };
};
