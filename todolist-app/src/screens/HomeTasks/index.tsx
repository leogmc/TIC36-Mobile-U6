import { InputAddTask } from "@/src/components/InputAddTask";
import { Task } from "@/src/components/Task";
import { TypeTaskHeader } from "@/src/components/TypeTaskHeader";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList, Alert } from "react-native";

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
        < TypeTaskHeader title={"Hoje"} num={countTask}/>
        <InputAddTask onPress={handleTaskAdd} onChangeText={setTaskText} value={taskText} />
        
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
            <View>
              <Text
              style={styles.text}> Não há tarefas cadastradas!</Text>
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
    paddingTop: 64,
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
    color: "#ffffff",
  }

});
