import styled from "styled-components/native";

export const CentrendWrapperRow = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const RegularText = styled.Text`
  font-size: 12;
`;

export const CentrendWrapper = styled.View`
  justify-content: center;
  align-items: center;
  padding-left: 3;
  padding-right: 3;
  flex: ${(props) => props.flex};
`;
