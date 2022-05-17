import { Poppins_400Regular, Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins';
import React from 'react';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import Routes from './src/routes';
import AppRoutes from './src/routes/app.routes';
import Detalhes from './src/screens/Detalhes';
import Home from './src/screens/Home';
import theme from './src/styles/theme';



export default function App() {  
  let [fontsLoaded] = useFonts ({
    Poppins_700Bold,
    Poppins_400Regular
  });

  if(!fontsLoaded){
    return (
      <View/>
    )
  }
  return (
    
    <ThemeProvider theme={theme}>
      <Routes/>
    </ThemeProvider>
  
  );
}

