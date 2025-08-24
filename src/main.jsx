import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './Components/Home'
import Login from './Components/Login'
import Register from './Components/Register'
import ErrorPage from './Components/ErrorPage'
import Profile from './Components/Profile'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home></Home>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/profile',
          element: <Profile></Profile>
        }
      ]
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </StrictMode>,
)
