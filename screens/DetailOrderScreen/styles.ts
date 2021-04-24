import styled from "styled-components/native";
import { Dimensions } from "react-native";

export const Wrapper = styled.View`
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  padding: 20px 20px 40px 20px;
  width: 100%;
  background-color: #ccc;
`;

export const StyledInput = styled.TextInput`
  flex: ${({ flex }) => flex || null};
  text-align: left;
  height: 50px;
  font-size: 16px;
  padding: 0 10px;
  text-align: center;
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
`;
export const OutputPrice = styled.Text`
  text-align: center;
  height: 28px;
  font-size: 14px;
  padding: 2px;
  margin-top: 4px;
  border-color: #ccc;
`;
export const PriceContainer = styled.Text`
  padding: 2px;
  margin-top: 4px;
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
  margin: 5px;
  background-color: #fff;
  border-radius: 9;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px 0px 20px;
`;
export const WrapperRowName = styled.View`
  margin: 10px;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 9;
  width: 100%;
  flex-direction: row;
  height: 50px;
`;
export const WrapperRowNameUser = styled.View`
  height: 50px;
  background-color: #fff;
  border-radius: 9;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const WrapperRowNameOrder = styled.View`
  margin: 10px;
  margin-bottom: 5px;
  border-radius: 9;
  width: 100%;
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
  height: 120px;
  width: 100%;
  background-color: #fff;
  margin-top: 20px;
  border-radius: 9px;
`;
