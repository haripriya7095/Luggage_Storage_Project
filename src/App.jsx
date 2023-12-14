import { createBrowserRouter, RouterProvider, } from "react-router-dom"

import { Home, About, StorageLuggage,Storage, Footer, LoginPage, LoginForm, Navbar, PaymentPage, ProductStorage, RegisterPage, RegisterForm, Luggage, Reviews, Delivery, Header } from "../pages"

export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children:[
        {
          path:"/",
          element:<Home/>,
          children:[
            {
              path:"/",
              element:<Storage/>
            },
            {
              path:"/delivery",
              element:<Delivery/>
            }
          ]
        },
        {
          path:"/singlestore/:id",
          element:<StorageLuggage/>
        }
      ]
    },
    {
      path: "/about",
      element: <About />

    },
    {
      path: "/deliveryluggage",
      element: <Delivery />

    },
    {
      path: "/footer",
      element: <Footer />

    },
    {
      path: "/login",
      element: <LoginPage />

    },
    {
      path: "/loginForm",
      element: <LoginForm />

    },
    {
      path: "/navbar",
      element: <Navbar />

    },
    {
      path: "/paymentPage",
      element: <PaymentPage />

    },
    {
      path: "/productStorage",
      element: <ProductStorage />

    },
    {
      path: "/register",
      element: <RegisterPage />

    },
    {
      path: "/registerform",
      element: <RegisterForm />

    },
    {
      path: "/reviews",
      element: <Reviews />

    },
    {
      path: "/paymentpage",
      element: <PaymentPage />

    },
    {
      path: "/storageLuggage",
      element: <StorageLuggage />

    },
  
    {
      path: "/Luggage",
      element: <Luggage />

    },
  ])
  return (
    <RouterProvider router={router} />
  )
}