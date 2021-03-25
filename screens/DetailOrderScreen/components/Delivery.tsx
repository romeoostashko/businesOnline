import React, { useState } from "react";
import { theme } from "../../../theme";
import { TouchableNFParam } from "../constants";
import { TouchableNFWrapper } from "../../../components/TouchableNFWrapper/TouchableNFWrapper";
import { Icon, RegularText } from "../styles";
import { AntDesign } from "@expo/vector-icons";

export const Delivery = ({ isGiven }) => {
  const [isEditPrice, setEditPrice] = useState(false);
  return (
    <TouchableNFWrapper
      height={TouchableNFParam.heightTNFW}
      borderRadius={TouchableNFParam.borderRadiusTNFW}
      width={"23%"}
      elevation={TouchableNFParam.elevationTNFW}
    >
      <Icon>
        <AntDesign
          name="gift"
          size={28}
          color={isGiven ? theme.palette.green : theme.palette.salmon}
        />
      </Icon>
      <RegularText>{isGiven ? "так" : "ні"}</RegularText>
    </TouchableNFWrapper>
  );
};
