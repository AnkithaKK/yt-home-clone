import React from 'react'
import { createContext,useState } from 'react'

export const showcont = createContext();

function Menucontext({children}) {
  const [showmenu,setShowmenu] = useState(false);
  const show=()=>{
    setShowmenu(!showmenu);
  };
  return (
    <showcont.Provider value={{showmenu,show}}>
      {children}
    </showcont.Provider>
  )
}

export default Menucontext