import styled from "styled-components/native";


export const Container = styled.TouchableOpacity`
    width: 100%;
    height: 56px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color:#F6F1FF;
    border-radius: 10px;
`;

export const InputTask = styled.TextInput`
    padding:10px;
    
`

export const CreateTaskButton = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 56px;
    width: 56px;
    padding:5px;
    background-color:#10032A;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
`;

