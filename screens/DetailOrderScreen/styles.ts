import styled from "styled-components/native";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const Wrapper = styled.View`
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  margin: 0 auto;
  margin-top: 20px;
  width: 80%;
`;

export const StyledInput = styled.TextInput`
  border: 1px;
  border-radius: 8px;
  border-color: #ccc;
  text-align: center;
  height: 40px;
  font-size: 16px;
  padding: 0 10px;
`;

export const InputPrice = styled.TextInput`
  border: 1px;
  border-radius: 5px;
  text-align: center;
  height: 30px;
  font-size: 14px;
  padding: 2px;
  margin-top: 3px;
  border-color: #ccc;
`;

export const WrapperTop = styled.View`
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  margin-bottom: 20px;
`;

export const Icon = styled.View`
  margin-bottom: 5px;
  justify-content: center;
  align-items: center;
`;

export const CeilTop = styled.View`
  background-color: #fff;
  padding: 5px;
  padding-bottom: 10px;
  padding-top: 10px;
  border-radius: 5px;
  width: 22%;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 5px;
  width: 100%;
`;

export const WrapperRow = styled.View`
  margin-bottom: 5px;
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
  width: 100%;
  padding: 5px;
  border: 1px;
  margin-top: 20px;
  border-radius: 10px;
  border-color: #ccc;
`;

export const Notes = styled.TextInput`
  justify-content: flex-start;
  align-items: flex-start;
  height: 100;
`;
