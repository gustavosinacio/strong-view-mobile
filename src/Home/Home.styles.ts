import { View } from "react-native";
import styled from "styled-components";

export const Container = styled(View)`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
`;
