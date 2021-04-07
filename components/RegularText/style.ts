import styled from "styled-components/native";

export const StyledText = styled.Text`
  font-size: ${({ fontSize }) => fontSize || "12"};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ color }) => color};
`;
