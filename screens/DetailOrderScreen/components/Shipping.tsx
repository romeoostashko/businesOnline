import React, { useState } from "react";
import { theme } from "../../../theme";
import { TouchableNFParam } from "../constants";
import { TouchableNFWrapper } from "../../../components/TouchableNFWrapper/TouchableNFWrapper";
import { Icon, RegularText } from "../styles";
import { FontAwesome } from "@expo/vector-icons";

export const Shipping = ({ data, setData }) => {
  const [isEditPrice, setEditPrice] = useState(false);
  return (
    <TouchableNFWrapper
      height={TouchableNFParam.heightTNFW}
      borderRadius={TouchableNFParam.borderRadiusTNFW}
      width={TouchableNFParam.widthTNFW}
      elevation={TouchableNFParam.elevationTNFW}
      onPress={() => setData({ ...data, isPaid: !data?.isPaid })}
    >
      <Icon>
        <FontAwesome
          name="money"
          size={28}
          color={data?.isPaid ? theme.palette.green : theme.palette.salmon}
        />
      </Icon>
      <RegularText>{data?.isPaid ? "Оплачено" : "Не оплачено"}</RegularText>
    </TouchableNFWrapper>
  );
};
