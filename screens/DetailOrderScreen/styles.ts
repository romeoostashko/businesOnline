import styled from "styled-components/native";
import { Dimensions } from "react-native";

export const Wrapper = styled.View`
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 40px;
  width: 90%;
`;

export const StyledInput = styled.TextInput`
  flex: ${({ flex }) => flex || null};
  text-align: left;
  height: 50px;
  font-size: 16px;
  padding: 0 10px;
`;

export const InputPrice = styled.TextInput`
  border: 1px;
  border-radius: 5px;
  text-align: center;
  height: 28px;
  font-size: 14px;
  padding: 2px;
  margin-top: 4px;
  border-color: #ccc;
  width: 80%;
`;
export const OutputPrice = styled.Text`
  text-align: center;
  height: 28px;
  font-size: 14px;
  padding: 2px;
  margin-top: 4px;
  border-color: #ccc;
  width: 80%;
`;

export const WrapperTop = styled.View`
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  margin-bottom: 10px;
`;

export const Icon = styled.View`
  padding-top: 5px;
  margin-bottom: 3px;

  justify-content: center;
  align-items: center;
`;

export const CeilTop = styled.View`
  background-color: #fff;
  padding: 0px;
  padding-bottom: 0px;
  padding-top: 0px;
  border-radius: 5px;
  width: 23%;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 5px;
  width: 100%;
`;

export const WrapperRow = styled.View`
  elevation: 3;
  margin: 5px;
  background-color: #fff;
  border-radius: 9;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;
export const WrapperRowName = styled.View`
  elevation: 3;
  margin: 10px;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 9;
  width: 100%;
  flex-direction: row;
`;

export const WrapperRowNameOrder = styled.View`
  elevation: 3;
  margin: 10px;
  margin-bottom: 5px;
  background-color: #fff;
  border-radius: 9;
  width: 100%;
  flex-direction: row;
`;

export const RegularText = styled.Text`
  font-size: 16px;
  text-align: center;
`;

export const PriceText = styled.Text`
  font-size: 18px;
  text-align: center;
  padding-right: 5px;
`;

export const WrapperNotes = styled.View`
  background-color: #fff;
  elevation: 3;
  width: 100%;
  padding: 8px;
  margin-top: 20px;
  border-radius: 10px;
`;

export const Notes = styled.TextInput`
  justify-content: flex-start;
  align-items: flex-start;
  height: 80;
`;

export const ViewOrders = styled.View`
  height: 90px;
  width: 100%;
  background-color: #fff;
  margin-top: 20px;
  border-radius: 9px;
`;
