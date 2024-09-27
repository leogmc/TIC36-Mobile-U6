import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    flex-direction: row;
    align-items: center;
    content-align: center;
    justify-content: space-between;
    background-color: transparent;
    padding:10px;
`;

export const TaskCreatedCounter = styled.Text`
    color: #6F3CC3;
    font-size: 12px;
    background-color: #DDD2EF;
    border-radius:  15px;      
    padding: 5px;            
    display: inline-block;      
    text-align: center;        
    width: 30px;               
    height: 30px;              
    line-height: 20px; 
    font-family: 'Inter_600SemiBold';

`

export const TaskDoneCounter = styled.Text`
    color: #2D6C4A;
    font-size: 12px;
    background-color: #BFE3D0;
    border-radius: 15px;
    padding: 5px;
    display: inline-block;
    text-align: center;
    width: 30px;
    height: 30px;
    line-height: 20px; 
    font-family: 'Inter_600SemiBold';
`


