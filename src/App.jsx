import {createBrowserRouter,RouterProvider,} from "react-router-dom"

import { Home,About, StorageLuggage,Footer,LoginPage,LoginForm,Navbar,PaymentPage,ProductStorage,RegisterPage,Location,Luggage,Reviews,Delivery } from "../pages"

export default function App(){

  const router=createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/about",
      element:<About/>

    },
    {
      path:"/delivery",
      element:<Delivery/>

    },
    {
      path:"/footer",
      element:<Footer/>

    },
    {
      path:"/login",
      element:<LoginPage/>

    },
    {
      path:"/loginForm",
      element:<LoginForm/>

    },
    {
      path:"/navbar",
      element:<Navbar/>

    },
    {
      path:"/paymentPage",
      element:<PaymentPage/>

    },
    {
      path:"/productStorage",
      element:<ProductStorage/>

    },
    {
      path:"/registerPage",
      element:<RegisterPage/>

    },
    {
      path:"/location",
      element:<Location/>

    },
    {
      path:"/reviews",
      element:<Reviews/>

    },
    {
      path:"/paymentpage",
      element:<PaymentPage/>

    },
    {
      path:"/storageLuggage",
      element:<StorageLuggage/>

    },
    {
      path:"/delivery",
      element:<Delivery/>

    },
    {
      path:"/Luggage",
      element:<Luggage/>

    },
  ])
  return(
<RouterProvider router={router}/>
  )
}