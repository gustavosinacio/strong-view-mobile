import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Button } from 'react-native';

import { HomeProps } from '../../routes';
import { Text } from '../../Text/Text.styles';
import { Container } from './Home.styles';

export function Home({ navigation }: HomeProps) {
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
        onPress={() => navigation.navigate('AddNote')}
      />
      <Button title="toggle" onPress={toggleTheme} />
    </Container>
  );
}
