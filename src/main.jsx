import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbars from './components/Navbars.jsx'
import Footers from './components/Footers.jsx'
import { RouterProvider } from 'react-router-dom'
import Events from './Events.jsx'
import Team from './Team.jsx'
import Dotslash from './Dotslash.jsx'
import Contact from './Contact.jsx'

import './index.css'
import { createBrowserRouter } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: "/",
    element : <App />
  }
  ,
  {
    path: "/events",
    element : <Events />
  }
  ,
  {
    path: "/team",
    element : <Team />
  }
  ,
  {
    path: "/dotslash",
    element : <Dotslash />
  },
 
  
  {
    path: "/contact",
    element : <Contact />
  }
  
]);
  
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <div className='min-h-screen'>
    <Navbars />
    
    
    <RouterProvider router={router} />

     
    <Footers />
    </div>
  </React.StrictMode>,
)
