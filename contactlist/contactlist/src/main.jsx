import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { ListProvider } from './context/PostContext.jsx'
import { ContactList } from './routes/ContactList.jsx'





const router = createBrowserRouter([
  {
    path: "/",
    element: <ListProvider><ContactList/></ListProvider>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
