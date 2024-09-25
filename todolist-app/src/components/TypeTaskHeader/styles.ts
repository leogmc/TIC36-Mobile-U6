import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: 100px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    padding:20px;
`;

export const TaskText = styled.Text`
    color: #B692F8;
    font-size: 40px;
    font-weight: medium;

`

export const TaskType = styled.Text`
`



export const TaskInput = styled.TextInput`
background-color:white;
`

export const TaskCounter = styled.Text`
color: #F6F1FF;
font-size: 22px;

`

export const TaskDone = styled.TouchableOpacity`
   width: 56px;
   height: 56px;
   background-color:#9F71C3; 
   justify-content: center;
   align-items: center;
`

export const TaskTextContainer = styled.View`
   justify-content: center;
`;

