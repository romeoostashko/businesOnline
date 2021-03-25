import React, { useState } from "react";
import { theme } from "../../../theme";
import { TouchableNFParam } from "../constants";
import { TouchableNFWrapper } from "../../../components/TouchableNFWrapper/TouchableNFWrapper";
import { Icon, InputPrice, OutputPrice } from "../styles";
import { Entypo } from "@expo/vector-icons";

export const Price = ({ price, isPaid }) => {
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
          color={isPaid ? theme.palette.green : theme.palette.salmon}
        />
      </Icon>
      {isEditPrice ? (
        <InputPrice placeholder="ціна" value="1525" />
      ) : (
        <OutputPrice>1525</OutputPrice>
      )}
    </TouchableNFWrapper>
  );
};
