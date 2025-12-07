import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RootNavigator from './src/RootNavigator';
import { ThemeProvider } from './src/context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
