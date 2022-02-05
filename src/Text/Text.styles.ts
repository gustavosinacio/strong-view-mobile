import { Text as NativeText } from "react-native";
import styled from "styled-components";

type TextProps = {
  color?: string;
  size?: "extraSmall" | "small" | "normal" | "large" | "extraLarge";
};

export const Text = styled(NativeText)<TextProps>`
  color: ${({ theme, color }) => color || theme.colors.text.primary};
  font-size: ${({ theme, size = "normal" }) => theme.sizing.text[size]};
`;
