import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GhostProtocolApp from './App.jsx' // Updated name

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GhostProtocolApp /> 
  </StrictMode>,
)