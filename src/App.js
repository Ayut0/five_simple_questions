import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline } from '@mui/material';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Content from './Contents/Content';
import Header from './UI/Header';

const darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#FFE3D8",
    },
    secondary: {
      main: "#fc5185",
    },
    background: {
      paper: "#BBBBBB",
      default: "#03506F",
    },
  },
});

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
