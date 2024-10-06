
import { createContext, ReactNode, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TaskProps } from "../utils/types";
import { Alert } from "react-native";

interface TaskContextProps {
    task: TaskProps;
    tasks: TaskProps[];
    removeTask: (id: number) => void;
    toggleTaskStatus: (id: number) => void;
    createTask: (title: string) => void;
    setTasks: ([] : TaskProps[]) => void;
}

interface TaskProviderProps {
    children: ReactNode;
}

export const TaskContext = createContext<TaskContextProps>({
    task: {id: 0, title:"", status: false},
    tasks: [],
    removeTask: () => {},
    toggleTaskStatus: () => {},
    createTask: ()=>{},
    setTasks: () => {},
});

function TaskProvider({ children }: TaskProviderProps) {
    const [task, setTask] = useState<TaskProps>({id: 0, title: "", status: false});
    const [tasks, setTasks] = useState<TaskProps[]>([] as TaskProps[]);



    //Funcao de armazenamento local
    async function storeTasks(task:TaskProps[]){
        try{
            await AsyncStorage.setItem("@tasks", JSON.stringify(task));
        } catch (error){
            console.log(error);
        }
    }

    async function loadTasks(){
        try{
            const tasks = await AsyncStorage.getItem("@tasks");
            if(tasks){
                setTasks(JSON.parse(tasks));
            }
        } catch(error){
            console.log(error);
        }
    }

    function createTask(title:string){
        const newTask = {
            id: tasks.length+1,
            title: title,
            status: false
        };
        setTasks([...tasks, newTask]);
    }

    useEffect(() =>{
        loadTasks();
    }, [])

    useEffect(() =>{
        storeTasks(tasks)
    }, [tasks])



    function removeTask(id: number){
    Alert.alert("Atenção!", `Deseja remover a tarefa?`,
    [
      {text:"Cancelar", style: "cancel"},
      {text:"Sim",
        onPress: () => {
            setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
        }
       }
    ]
    )
    }

    function toggleTaskStatus(id: number) {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, status: !task.status } : task
            )
        );
    }

    return (
        <TaskContext.Provider value={{task, tasks, removeTask, toggleTaskStatus, createTask, setTasks }}>
            {children}
        </TaskContext.Provider>
    );
}

export default TaskProvider;

