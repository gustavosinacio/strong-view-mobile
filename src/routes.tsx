import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useContext } from "react";
import { ThemeContext, ThemeProvider } from "styled-components";

import { Home } from "./Home/Home";
import { AddNote } from "./AddNote/AddNote";

export type RootStackParamList = {
  Home: {
    setTheme(): void;
  };
  AddNote: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const Router = () => {
  const {
    colors: { text, background },
  } = useContext(ThemeContext);

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: true,
            headerTintColor: text.primary,
            headerStyle: {
              backgroundColor: background,
            },
          }}
        />
        <RootStack.Screen name="AddNote" component={AddNote} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
