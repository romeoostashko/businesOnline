import React, { useState } from "react";
import { View } from "react-native";
import { theme } from "../../../theme";
import { TouchableNFParam } from "../constants";
import { TouchableNFWrapper } from "../../../components/TouchableNFWrapper/TouchableNFWrapper";
import { Icon, InputPrice, OutputPrice, PriceContainer } from "../styles";
import { Entypo } from "@expo/vector-icons";
import { RegularText } from "../../../components/RegularText/RegularText";

export const Price = ({ data, setData }) => {
  const [isEditPrice, setEditPrice] = useState(false);
  console.log("data--", data.products);
  const priceAllProducts = data?.products?.reduce(
    (a, b) => +a + +b.priceOrigin * +b.number,
    0
  );
  console.log(priceAllProducts);
  return (
    <TouchableNFWrapper
      height={TouchableNFParam.heightTNFW}
      borderRadius={TouchableNFParam.borderRadiusTNFW}
      width={TouchableNFParam.widthTNFW}
      elevation={TouchableNFParam.elevationTNFW}
      onPress={() => {
        setEditPrice(!isEditPrice);
      }}
    >
      <Icon>
        <Entypo
          name="price-tag"
          size={24}
          color={data?.isPaid ? theme.palette.green : theme.palette.salmon}
        />
      </Icon>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <PriceContainer>Ціна</PriceContainer>
        {isEditPrice ? (
          <InputPrice
            onChangeText={(text) => {
              setData({
                ...data,
                totalPrice: text,
                profit: +text - priceAllProducts,
              });
            }}
            placeholder="Пиши"
            value={data?.totalPrice}
            maxLength={4}
          />
        ) : (
          <OutputPrice>{data?.totalPrice}</OutputPrice>
        )}
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <RegularText>Дохід </RegularText>
        <RegularText fontSize={16}>{data?.profit?.toString()}</RegularText>
      </View>
    </TouchableNFWrapper>
  );
};
