import React from 'react'
import {BsJustify} from 'react-icons/bs'

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <p className='title'>Dashboard</p>
        </div>
    </header>
  )
}

export default Header