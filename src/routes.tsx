import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { Home } from './pages/Home/Home';
import { AddNote } from './pages/AddNote/AddNote';

export type RootStackParamList = {
  Home: {
    setTheme(): void;
  };
  AddNote: undefined;
};
export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const RootStack = createNativeStackNavigator<RootStackParamList>();

export function Router() {
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
}
