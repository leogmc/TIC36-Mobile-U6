import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: 56px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #10032A;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    overflow: hidden;
    margin-bottom: 16px;
`;

export const TaskText = styled.Text`
    color: #F6F1FF;
    font-size: 18px;
    font-weight: medium;
    overflow: hidden;

`

export const TaskDone = styled.TouchableOpacity`
   width: 56px;
   height: 56px;
   background-color:#7238A0; 
   justify-content: center;
   align-items: center;
`

export const TaskXpContainer = styled.View`
   width: 56px;
   height: 56px;
   justify-content: center;
   align-items: center;
   border-left-width: 3px;
   border-color: #76BDF0;
`;

export const TaskXp = styled.Text`
   color: #76BDF0;
   font-size: 15px;
   font-weight: bold;
   text-align: center;
`;
