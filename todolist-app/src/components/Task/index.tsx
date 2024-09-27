import { Feather } from '@expo/vector-icons';
import {Container, TaskDone, TaskText, TaskXpContainer} from './styles'

type Props = {
    title: string;
    status: boolean;
    onCheck?: () => void;
    onRemove?: () => void;
}
export function Task({title, status, onCheck, onRemove} : Props){
    return (
        <Container>
            <TaskDone onPress={onCheck}>
                <Feather name="circle" size={24} color="#8A5ED1"/>
            </TaskDone>
            <TaskText>{title}</TaskText>
            <TaskXpContainer>
                <Feather name="trash" size={24} color="#6B6572"/>
            </TaskXpContainer>
        </Container>
    );
}