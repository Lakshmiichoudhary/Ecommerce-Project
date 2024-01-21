import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/router/About.jsx'
import Error from './components/router/Error.jsx'
import Products from './components/Products.jsx'
import Home from './components/router/Home.jsx'
import Contact from './components/router/Contact.jsx'
import Login from './components/router/Login.jsx'
import { Provider } from 'react-redux'
import appStore from './store/AppStore.jsx'

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
        path: "/home",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <Error />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={appStore}>
    <RouterProvider router={appRouter} />
    </Provider>
  </React.StrictMode>,
)
