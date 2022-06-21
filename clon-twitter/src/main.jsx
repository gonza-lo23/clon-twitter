import React from 'react'
import { ChakraProvider, ColorModeScript} from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import theme from "./components/theme.jsx"
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
    <BrowserRouter>
    <ChakraProvider theme={theme}>
     <App />
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
)
