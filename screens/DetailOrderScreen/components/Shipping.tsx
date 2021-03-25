import React, { useState } from "react";
import { theme } from "../../../theme";
import { TouchableNFParam } from "../constants";
import { TouchableNFWrapper } from "../../../components/TouchableNFWrapper/TouchableNFWrapper";
import { Icon, RegularText } from "../styles";
import { MaterialIcons } from "@expo/vector-icons";

export const Shipping = ({ isSheep }) => {
  const [isEditPrice, setEditPrice] = useState(false);
  return (
    <TouchableNFWrapper
      height={TouchableNFParam.heightTNFW}
      borderRadius={TouchableNFParam.borderRadiusTNFW}
      width={TouchableNFParam.widthTNFW}
      elevation={TouchableNFParam.elevationTNFW}
      onPress={() => {}}
    >
      <Icon>
        <MaterialIcons
          name="local-shipping"
          size={28}
          color={isSheep ? theme.palette.green : theme.palette.salmon}
        />
      </Icon>
      <RegularText>{isSheep ? "так" : "ні"}</RegularText>
    </TouchableNFWrapper>
  );
};
