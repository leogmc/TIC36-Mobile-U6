import { Feather } from '@expo/vector-icons';
import { Container, CreateTaskButton, InputTask } from './styles';


type Props = {
    onPress: () => void;
    onChangeText: (text: string) => void;
    value: string;
}

export function InputAddTask({onPress, onChangeText, value} : Props){
    return (
    <Container>

        <InputTask 
            placeholder='Insira uma tarefa:'
            keyboardType='default'
            value={value}
            onChangeText={onChangeText}>
            
        </InputTask>

        <CreateTaskButton onPress={onPress}>
            <Feather name="plus-square" size={32} color="#B692F8"/>
        </CreateTaskButton>
    
    
    </Container>
    );
}