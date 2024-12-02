import { Feather } from '@expo/vector-icons';
import { Container, CreateTaskBtn} from './styles';
import { Text } from 'react-native';

export function CreateTaskButton(){
    return (
    <Container>

        <Text>Criar</Text>

        <CreateTaskBtn>
            <Feather name="plus-circle" size={32} color="#FCFCFC"/>
        </CreateTaskBtn>

    </Container>
    );
}