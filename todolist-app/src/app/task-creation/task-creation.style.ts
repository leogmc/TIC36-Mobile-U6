import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  padding: 16px;
  gap: 16px;
  
`;

export const Text = styled.Text`
  color: #6B6572;
  font-family: 'Inter-SemiBold'; 
`;

export const NoTasks = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-top: 20%;
`;

export const ButtonContainer = styled.View`
  align-items: flex-end;
  justify-content: center;
  padding: 8px;
`;

export const Button = styled.Pressable` 
    display: flex;
    flex-direction: row; 
    align-items: center; 
    justify-content: center; 
    width: 110px;
    height: 52px;
    background-color: #F2F2F2;
    border-radius: 8px;
`;

export const ButtonText = styled.Text` 
    color: #479C6E;
    font-size: 14px;
    font-family: 'Inter-Bold';
    margin-right: 8px; 
`;

export const ButtonIcon = styled.View`
    padding: 4px;
`;

export const ViewInput = styled.View`
    flex: 1;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    
`;



