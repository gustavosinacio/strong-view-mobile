import { SafeAreaView } from 'react-native';
import styled from 'styled-components';

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
`;
