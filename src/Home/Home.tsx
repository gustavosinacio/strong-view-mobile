import { useCallback, useContext } from "react";
import { ThemeContext } from "styled-components";
import { Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../routes";
import { Text } from "../Text/Text.styles";
import { Container } from "./Home.styles";

type HomeScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  "Home"
>;

export const Home = ({ navigation }: HomeScreenNavigationProp) => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <Container>
      <Text size="extraSmall">extra small text</Text>
      <Text size="small">small text</Text>
      <Text>normal colored text</Text>
      <Text size="large">large text</Text>
      <Text size="extraLarge">extra large text</Text>
      <Button
        title="Go to add notes"
        onPress={() => navigation.navigate("AddNote")}
      />
      <Button title="toggle" onPress={toggleTheme} />
    </Container>
  );
};
