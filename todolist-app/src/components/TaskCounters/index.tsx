import {Container, TaskCreatedCounter, TaskDoneCounter} from './styles'
import { useFonts,Inter_600SemiBold} from '@expo-google-fonts/inter';
import { Text, StyleSheet, View } from 'react-native';

type Props = {
    num: number;
}

export function TaskCounters({num} : Props){

    //Font configuration
    let [fontsLoaded] = useFonts({
        Inter_600SemiBold,
    });
        
    if (!fontsLoaded) {
    }

    return (
        <Container>

            <View style={styles.tsk}>
            <Text style={styles.text}>Tarefas criadas: </Text>
            <TaskCreatedCounter>{num}</TaskCreatedCounter>
            </View>
            
            <View style={styles.tsk}>
            <Text style={styles.text}>Concluídas: </Text>
            <TaskDoneCounter>{num}</TaskDoneCounter>
            </View>
                        
        </Container>  
        
    );
}

const styles = StyleSheet.create({
    text: {
      color: '#6B6572',
      fontFamily: 'Inter_600SemiBold',
      fontSize: 14,
      padding: 5
    },
    tsk: {
        flexDirection: 'row'
      },
});