import { Task } from "@/src/components/Task";
import React, { useContext, useEffect, useState } from "react";
import { FlatList } from "react-native";
import { HeaderLogo } from "@/src/components/HeaderLogo";
import { TaskCounters } from "@/src/components/TaskCounters";
import { Feather } from "@expo/vector-icons";
import { SearchBar } from "@/src/components/SearchBar";
import { Link } from "expo-router";
import { Button, ButtonIcon, ButtonText, ButtonView, Container, NoTasksContainer, NoTaskText } from "./home.styles";
import { TaskContext } from "@/src/state/taskContext";
import GreetingHeader from "@/src/components/GreetingHeader";
import ProtectedRoute from "@/src/components/ProtectedRoute";

export default function Home() {


  const {tasks, toggleTaskStatus, removeTask } = useContext(TaskContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTask, setFilteredTask] = useState(tasks);

  useEffect(() => {
    setFilteredTask(tasks);
  }, [tasks]);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    const newTask = tasks.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredTask(newTask);
  };

  return (
    <ProtectedRoute>
    <Container>
      <HeaderLogo />
      <GreetingHeader></GreetingHeader>
      <SearchBar onPress={() => handleSearch(searchQuery)} onChangeText={handleSearch} value={searchQuery} />
      <TaskCounters created={tasks.length} completed={tasks.filter((task) => task.status).length} />

      <FlatList
        data={filteredTask}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Task
            title={item.title}
            status={item.status}
            onCheck={() => toggleTaskStatus(item.id)}
            onRemove={() => removeTask(item.id)}
            id={item.id}
          />
        )}
        ListEmptyComponent={() => (
          <NoTasksContainer>
            <Feather name="clipboard" size={32} color="#6B6572" padding={10} />
            <NoTaskText>Você ainda não tem tarefas cadastradas.</NoTaskText>
          </NoTasksContainer>
        )}
      />

      <ButtonView>
        <Link href="/task-creation/task-creation" asChild>
          <Button>
            <ButtonText>Criar</ButtonText>
            <ButtonIcon>
              <Feather name="plus-circle" size={24} color="#FCFCFC" />
            </ButtonIcon>
          </Button>
        </Link>
      </ButtonView>
    </Container>
    </ProtectedRoute>
  );
}




