import React from 'react'
import Header from './Components/Header'
import Sidemenu from './Components/Sidemenu'
import Videos from './Components/Videos'
import Menucontext from './Context/Menucontext'
import Searchcontext from './Context/Searchcontext'
import './Header.css'
import './Sidemenu.css'
import './Videos.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Searchresults from './Components/Searchresults'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Searchcontext>
        <Menucontext>
          <Header />
          <div className='main-page'>
            <Sidemenu />
            <Videos />
          </div>
        </Menucontext>
        </Searchcontext>
      )
    },
    {
      path: "/search",
      element: (
      <Searchcontext>
      <Menucontext>
        <Header />
        <div className='main-page'>
          <Sidemenu />
          <Searchresults />
        </div>
      </Menucontext>
      </Searchcontext>)
    },
    {
      path: "/playvideo",
      element:(
      <Menucontext>
        <Header />
        <div className='main-page'>
          <Sidemenu />
          <Videos/>
        </div>
      </Menucontext>
)
    }
  ]);
  return (
    <div className='App' >
      <RouterProvider router={router} />
    </div >
  )
}

export default App