import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/router/About.jsx'
import Store from './components/router/store.jsx'
import Error from './components/router/Error.jsx'
import Products from './components/Products.jsx'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children : [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/store",
        element: <Store />
      }
    ],
    errorElement: <Error />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>,
)
