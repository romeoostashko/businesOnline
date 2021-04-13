import React, { useState } from "react";
import { theme } from "../../../theme";
import { TouchableNFParam } from "../constants";
import { TouchableNFWrapper } from "../../../components/TouchableNFWrapper/TouchableNFWrapper";
import { Icon, InputPrice, OutputPrice } from "../styles";
import { Entypo } from "@expo/vector-icons";

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
          color={data.isPaid ? theme.palette.green : theme.palette.salmon}
        />
      </Icon>
      {isEditPrice ? (
        <InputPrice
          onChangeText={(text) => {
            setData({ ...data, totalPrice: text });
          }}
          placeholder="ціна"
          value={data.totalPrice}
        />
      ) : (
        <OutputPrice>{data.totalPrice}</OutputPrice>
      )}
    </TouchableNFWrapper>
  );
};
