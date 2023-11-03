import React from 'react'

function Sidelistmenu({selected,Icon,title}) {
  return (
    <div className={`sidelistmenu ${selected && "selected"}`}>
      <Icon className='sidelistmenu-icon' />
      <div className='sidelistmenu-title' >{title}</div>   
    </div>
    
  )
}

export default Sidelistmenu