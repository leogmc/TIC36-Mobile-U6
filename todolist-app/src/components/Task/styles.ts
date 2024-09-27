import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: 56px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #E5E2E9;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    overflow: hidden;
    margin-bottom: 16px;
`;

export const TaskText = styled.Text`
    color: #262428;
    font-size: 14px;
    overflow: auto;
    fontFamily: 'Inter_400Regular'

`

export const TaskDone = styled.TouchableOpacity`
   width: 56px;
   height: 56px; 
   justify-content: center;
   align-items: center;
`

export const TaskXpContainer = styled.View`
   width: 56px;
   height: 56px;
   justify-content: center;
   align-items: center;
   border-left-width: 1px;
   border-color: #6B6572;
`;

export const TaskXp = styled.Text`
   color: #76BDF0;
   font-size: 15px;
   font-weight: bold;
   text-align: center;
`;
