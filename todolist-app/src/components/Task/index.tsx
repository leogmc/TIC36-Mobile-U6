import { Feather } from '@expo/vector-icons';
import {Container, TaskDone, TaskText, TaskXp, TaskXpContainer} from './styles'

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
                <Feather name="square" size={30} color="white"/>
            </TaskDone>
            <TaskText>{title}</TaskText>
            <TaskXpContainer>
            <TaskXp>1{'\n'}XP</TaskXp>
            </TaskXpContainer>
            
        </Container>
    );
}