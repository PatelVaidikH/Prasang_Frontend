import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './css/main.css'
import './css/montserrat.css'
import { BrowserRouter } from 'react-router-dom'
import MainContextProvider from './Context/MainContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MainContextProvider>
      <App />  
    </MainContextProvider>    
  </BrowserRouter>
)
