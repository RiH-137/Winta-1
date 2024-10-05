import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(document.getElementById('root')).reder(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
