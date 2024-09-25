import { Feather } from '@expo/vector-icons';
import {Container, TaskCounter, TaskType, TaskTextContainer, TaskText} from './styles'

type Props = {
    title: string;
    num: number;
}

export function TypeTaskHeader({title,num} : Props){
    return (
        <Container>
            <TaskType>
                <Feather name="sun" size={60} color="#B692F8"/>
            </TaskType>

        <TaskTextContainer>
            <TaskText>{title}</TaskText>
            <TaskCounter>{num} Tasks</TaskCounter>
        </TaskTextContainer>
                        
            
    
        </Container>

       

      

        
    );
}