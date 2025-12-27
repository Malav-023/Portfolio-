import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './navbar.jsx'
import Main from './mainbody.jsx'
import Form from './contact.jsx'

createRoot(document.getElementById('navbar')).render(
  <StrictMode>
    <NavBar />
  </StrictMode>
)  

createRoot(document.getElementById('main')).render(
  <StrictMode>
    <>
    <Main/>
    <Form />
    </>
  </StrictMode>
)
