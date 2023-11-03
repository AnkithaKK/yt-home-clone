import React from 'react'

function Sidelist({selected,Icon,title}) {
  return (
    <div className={`sidelist ${selected && "selected"}`}>
      <Icon className='sidelist-icon' />
      <div className='sidelist-title' >{title}</div>   
    </div>
    
  )
}

export default Sidelist