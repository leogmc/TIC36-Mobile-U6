import {Container, Text} from './styles'
import SvgLogoMini from '../SvgLogoMini/Index';

export function HeaderLogo(){
    return (
        <Container>
            <SvgLogoMini></SvgLogoMini>
            <Text>To do List</Text>            
        </Container>   
        
    );
}

