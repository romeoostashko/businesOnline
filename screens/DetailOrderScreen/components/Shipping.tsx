import React, { useState } from "react";
import { theme } from "../../../theme";
import { TouchableNFParam } from "../constants";
import { TouchableNFWrapper } from "../../../components/TouchableNFWrapper/TouchableNFWrapper";
import { Icon, RegularText } from "../styles";
import { MaterialIcons } from "@expo/vector-icons";

export const Shipping = ({ data, setData }) => {
  const [isEditPrice, setEditPrice] = useState(false);
  return (
    <TouchableNFWrapper
      height={TouchableNFParam.heightTNFW}
      borderRadius={TouchableNFParam.borderRadiusTNFW}
      width={TouchableNFParam.widthTNFW}
      elevation={TouchableNFParam.elevationTNFW}
      onPress={() => setData({ ...data, isSheep: !data?.isSheep })}
    >
      <Icon>
        <MaterialIcons
          name="local-shipping"
          size={28}
          color={data?.isSheep ? theme.palette.green : theme.palette.salmon}
        />
      </Icon>
      <RegularText>
        {data?.isSheep ? "товар \n прийшов" : "товар \n  не прийшов"}
      </RegularText>
    </TouchableNFWrapper>
  );
};
