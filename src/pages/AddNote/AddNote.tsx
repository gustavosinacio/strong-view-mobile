// import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useCallback, useState } from 'react';
import { Button } from 'react-native';
import { auth } from '../../config/firebase';

// import { RootStackParamList } from '../../routes';
import { Text } from '../../Text/Text.styles';
import { Container } from './AddNote.styles';

// type AddNoteScreenNavigationProp = NativeStackScreenProps<
//   RootStackParamList,
//   'AddNote'
// >;

type User = {
  email: string | null;
};

export function AddNote() {
  const [user, setUser] = useState<User>({ email: null });

  const firebaseSignIn = useCallback(async () => {
    const credentials = await signInWithEmailAndPassword(
      auth,
      'gsinacio94@gmail.com',
      '123456',
    );
    setUser({ email: credentials.user.email });
  }, []);

  const firebaseSignOut = useCallback(async () => {
    signOut(auth);
    setUser({ email: null });
  }, []);

  return (
    <Container>
      <Text>Let&apos;s add a note, shall we?</Text>
      <Text>{user.email}</Text>
      <Button title="sign in" onPress={firebaseSignIn} />
      <Button title="sign out" onPress={firebaseSignOut} />
    </Container>
  );
}
