import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../routes";
import { Text } from "../Text/Text.styles";
import { Container } from "./AddNote.styles";

type AddNoteScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  "AddNote"
>;

export const AddNote = ({ navigation }: AddNoteScreenNavigationProp) => {
  return (
    <Container>
      <Text>Let's add a note</Text>
    </Container>
  );
};
