import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Products from './components/Products/Products.jsx'
import MoreInfo from './components/MoreInfo/MoreInfo.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/home',
        element: <Home></Home>,
      },
      {
        path: '/products',
        loader: () => fetch('https://fakestoreapi.com/products'),
        element: <Products></Products>
      },
      {
        path: '/products/:productID',
        loader: ({ params }) => fetch(`https://fakestoreapi.com/products/${params.productID}`),
        element: <MoreInfo></MoreInfo>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
