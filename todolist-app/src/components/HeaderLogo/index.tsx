
import {Container} from './styles'
import { useFonts,Inter_700Bold} from '@expo-google-fonts/inter';
import { Text, StyleSheet } from 'react-native';
import SvgLogoMini from '../SvgLogoMini/Index';


export function HeaderLogo(){

    //Font configuration
let [fontsLoaded] = useFonts({
    Inter_700Bold,
  });

  if (!fontsLoaded) {

  }


    return (
        <Container>
            <SvgLogoMini></SvgLogoMini>
            <Text style={styles.text}>To do List</Text>            
        </Container>   
        
    );
}

const styles = StyleSheet.create({
    text: {
      color: '#8A5ED1',
      fontFamily: 'Inter_700Bold',
      fontSize: 22
    }
});