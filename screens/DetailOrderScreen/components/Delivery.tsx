import React, { useState } from "react";
import { theme } from "../../../theme";
import { TouchableNFParam } from "../constants";
import { TouchableNFWrapper } from "../../../components/TouchableNFWrapper/TouchableNFWrapper";
import { Icon, RegularText } from "../styles";
import { AntDesign } from "@expo/vector-icons";

export const Delivery = ({ data, setData }) => {
  const [isEditPrice, setEditPrice] = useState(false);
  return (
    <TouchableNFWrapper
      height={TouchableNFParam.heightTNFW}
      borderRadius={TouchableNFParam.borderRadiusTNFW}
      width={TouchableNFParam.widthTNFW}
      elevation={TouchableNFParam.elevationTNFW}
      onPress={() => setData({ ...data, isGiven: !data?.isGiven })}
    >
      <Icon>
        <AntDesign
          name="gift"
          size={28}
          color={data?.isGiven ? theme.palette.green : theme.palette.salmon}
        />
      </Icon>
      <RegularText>
        {data?.isGiven ? "доставлено \n клієнту" : "не доставл. \n клієнту"}
      </RegularText>
    </TouchableNFWrapper>
  );
};
