import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 16px;
    padding-top: 16px;
    gap: 16px;
`;

export const NoTaskText = styled.Text`
    color: #6B6572;
    font-family: 'Inter-SemiBold';

`

export const NoTasksContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding-top:20%;
   

`

export const ButtonView = styled.View`
    flex: 1;
    align-items: flex-end;
    justify-content: flex-end;
    max-height: 100px;
    width: 100%;
    padding: 8px;
`;

export const Button = styled.Pressable` 
    display: flex;
    flex-direction: row; 
    align-items: center; 
    justify-content: center; 
    width: 110px;
    height: 52px;
    background-color: #8A5ED1;
    border-radius: 8px;
`;

export const ButtonText = styled.Text` 
    color: #FCFCFC;
    font-size: 14px;
    font-family: 'Inter-Bold';
    margin-right: 8px; 
`;

export const ButtonIcon = styled.View`
    padding: 4px;
`;
