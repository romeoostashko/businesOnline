import styled from "styled-components/native";

export const StyledText = styled.Text`
  font-size: 12;
  font-weight: ${({ fontWeight }) => fontWeight};

  color: ${({ color }) => color};
`;
