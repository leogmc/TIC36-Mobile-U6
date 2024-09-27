import * as React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { Link } from 'expo-router';
import SvgLogo from '../components/SvgLogo';
import { useFonts, Inter_900Black, Inter_700Bold, Inter_400Regular} from '@expo-google-fonts/inter';


export default function App() {

  //Font configuration
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_700Bold,
    Inter_400Regular
  });

  if (!fontsLoaded) {
  }

  return (

    // Background Linear Gradient
    <View
    style={styles.background}
    >
    <View style={styles.container}>


      <SvgLogo></SvgLogo>
      <Text style={styles.logoName}> To Do List</Text>
      <Text style={styles.subtitle}> Comece a escrever suas ideias e tarefas!</Text>
      <Link style={styles.btn} href={"/screens/HomeTasks"}>{""}Entrar</Link>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    color: '#ccc', 
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  logoName:{
    color: '#8A5ED1',
    fontFamily: 'Inter_900Black',
    fontSize: 36, 
  },
  subtitle:{
    color: '#6B6572',
    fontFamily: 'Inter_400Regular',
    fontSize: 14, 
  },
  btn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: 300,
    height: 52,
    color: '#FCFCFC',
    backgroundColor: '#6F3CC3',
    fontFamily: 'Inter_700Bold',
    borderRadius: 8,
    padding: 16,
    marginTop: '50%'
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent:"center",
    padding: 24

  }

});
