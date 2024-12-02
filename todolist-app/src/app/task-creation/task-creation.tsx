
import React, { useContext, useState } from "react";
import { Alert, View } from "react-native";
import { InputAddTask } from "@/src/components/InputTask";
import { Feather } from "@expo/vector-icons";
import { Button, ButtonContainer, ButtonIcon, ButtonText, Container, Text, ViewInput} from "./task-creation.style";
import { TaskContext } from "@/src/state/taskContext";
import {Formik} from "formik";
import * as Yup from "yup";
import ProtectedRoute from "@/src/components/ProtectedRoute";
import GoBackButton from "@/src/components/GoBackButton";
import TemporaryAlert from "@/src/components/TemporaryAlert";
import { useRouter } from "expo-router";

export default function TaskCreation() {

  const { tasks, createTask} = useContext(TaskContext);
  const router = useRouter();
  const [temporaryAlertVisible, setTemporaryAlertVisible] = useState(false);

  const showTemporaryAlert = () => {
    setTemporaryAlertVisible(true);
  };

  const handleTemporaryAlertClose = () => {
    setTemporaryAlertVisible(false);
    router.replace("/home/home");
  };


  const TaskSchema = Yup.object().shape({
    taskText: Yup.string()
    .min(4, "No mínimo 4 caracteres.")
    .max(30, "No máximo 30 caracteres.")
    .required("A tarefa não pode ser vazia.")
  })

  function handleTaskAdd(taskText: string) {
    if (tasks.some((task) => task.title === taskText)) {
      return Alert.alert("Erro:", "Tarefa já existe.");
    }
    createTask(taskText);
    showTemporaryAlert();
  }

  return (
    <ProtectedRoute>
    <Container>
      <GoBackButton></GoBackButton>

    <Formik
    initialValues={{taskText:""}}
    validationSchema={TaskSchema}
    onSubmit={(values, {resetForm}) => {
      handleTaskAdd(values.taskText);
      resetForm({values: {taskText:""}})
    }}  
    >
      {({handleSubmit, handleChange, handleBlur, values, errors, touched})=>(

        <ViewInput>
          <View>
          <InputAddTask
            onChangeText={handleChange("taskText")}
            onBlur={handleBlur("taskText")}
            value={values.taskText}
          />

            {touched.taskText && errors.taskText && (
                <Text style={{color: "#FF8477"}}>{errors.taskText}</Text>
            )}

          <TemporaryAlert
            visible={temporaryAlertVisible}
            message="Tarefa criada com sucesso!"
            duration={2000}
            onClose={handleTemporaryAlertClose}
          />
          </View>
   
          <ButtonContainer>

          <Button onPress={() => handleSubmit()}>
            <ButtonText>Salvar</ButtonText>
            <ButtonIcon>
              <Feather name="check" size={24} color="#479C6E"/>
            </ButtonIcon>
          </Button>

          </ButtonContainer>
          
        </ViewInput>

      )}

    
    </Formik>
    </Container>
    </ProtectedRoute>
  );
}



