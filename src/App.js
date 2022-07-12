import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline } from '@mui/material';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Content from './Contents/Content';
import Header from './UI/Header';

const darkTheme = createTheme({
    palette:{
      type: "dark",
      primary:{
        main: "#3FC1C9"
      },
      secondary: {
        main: "#fc5185"
      },
      background:{
        paper: "#364F6B",
        default: "#364F6B"
      }
    }
})

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
        <Router>
          <Header />
          <Content />
        </Router>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
