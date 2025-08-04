import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import AuthContextProvider from './ContextApi/AuthContexzt/AuthContextProvider';
import { ColorModeProvider, ThemeProvider } from "@chakra-ui/react"

export const AppContext = createContext();
const ThemeContext = (props) => {
  const [state, setState] = useState("dark")

  const ChangeState = () => {
    setState(state === "light" ? "dark" : "light")
  }
  console.log(props)

  return (
    <AppContext.Provider value={[state, ChangeState]}>
      {props.children}
    </AppContext.Provider>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
  <ThemeContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeContext>
  </AuthContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
