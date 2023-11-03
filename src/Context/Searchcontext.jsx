import React, { Children } from 'react'
import { createContext,useState } from 'react'

export const searchcont = createContext();

function Searchcontext({children}) {
    const [searchres,setSearchres] = useState([]);
  return (
    <searchcont.Provider value={{searchres,setSearchres}}>
        {children}
    </searchcont.Provider>
  )
}

export default Searchcontext