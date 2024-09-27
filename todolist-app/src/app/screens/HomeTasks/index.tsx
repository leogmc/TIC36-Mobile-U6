import { Task } from "@/src/components/Task";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList, Alert } from "react-native";
import { InputAddTask } from "@/src/components/InputAddTask";
import { HeaderLogo } from "@/src/components/HeaderLogo";
import { TaskCounters } from "@/src/components/TaskCounters";
import { Feather } from '@expo/vector-icons';

export default function HomeTasks() {

  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState <{description: string; check: boolean}[]>([]);
  const [countTask, setCountTask] = useState(0);

  function handleTaskAdd(){
    if (taskText.length <= 0){
      return Alert.alert("Erro:", "A tarefa está sem descrição.");
    }

    if (tasks.some((task)=> task.description === taskText)){
      return Alert.alert("Erro:", "Tarefa já existe.");
    }

    const newTask = {description: taskText, check: false};
    setTasks([...tasks, newTask]);
    setTaskText('');
    
  }

  useEffect(() => {
    let totalTasks = tasks.length;
    setCountTask(totalTasks);
  }, [tasks]);

  function handleTaskDone(taskToChange: {description:string; check: boolean}){
    const updatedTasks = tasks.filter((task)=> task !== taskToChange);
    setTasks(updatedTasks);
  }
  
  return (
    
    <View style={styles.container}>

    <HeaderLogo></HeaderLogo>

        
        <InputAddTask onPress={handleTaskAdd} onChangeText={setTaskText} value={taskText} />
        <TaskCounters num={countTask}/>
        
        <FlatList
          data={tasks}
          keyExtractor={(item,index) => index.toString()}
          renderItem={
            ({item}) => (
                <Task
                title={item.description}
                status={item.check}
                onCheck={()=>handleTaskDone(item)}
                />
            )
          }
          ListEmptyComponent={() => (
            <View style={styles.noTasks}>
              <Feather name="clipboard" size={32} color="#6B6572" padding={10}/>
              <Text style={styles.text}>Você ainda não tem tarefas cadastradas.</Text>
            </View>
          )}
        />
      </View>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    paddingTop: 16,
    gap: 16,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  text: {
    color: "#6B6572",
    fontFamily: 'Inter_600SemiBold',
  },
  noTasks:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop:"10%"
    
  }

});
