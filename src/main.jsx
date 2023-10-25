import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar.jsx'
import './index.css'
import Section1 from './Section1.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <div id="background"></div>
    
    <Section1/>
  </React.StrictMode>,
)
