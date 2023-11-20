import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { FetchDataProvider } from './context/FetchDataContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <FetchDataProvider>
        {' '}
        <App />
      </FetchDataProvider>
    </ChakraProvider>
  </React.StrictMode>
)
