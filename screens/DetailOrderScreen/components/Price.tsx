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
              setData({ ...data, totalPrice: text });
            }}
            placeholder="пиши"
            value={data?.totalPrice}
          />
        ) : (
          <OutputPrice>{data?.totalPrice}</OutputPrice>
        )}
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <RegularText>Дохід</RegularText>
        <RegularText>{data?.profit?.toString()}</RegularText>
      </View>
    </TouchableNFWrapper>
  );
};
