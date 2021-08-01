import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from './routes'
import { ResetCss } from './styles/reset-css'
import { GlobalStyles } from './styles/global'
import { Header } from './Components/Header'


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <ResetCss />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
