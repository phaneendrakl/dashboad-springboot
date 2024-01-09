import React from 'react'
import 
{BsPersonCircle, BsPeopleFill, BsListCheck, BsHouse}
 from 'react-icons/bs'

function Sidebar({openSidebarToggle, OpenSidebar, handleSectionChange}) {


  return (
    <aside id="sidebar" className={openSidebarToggle? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsPersonCircle  className='icon_header'/> Admin
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item' onClick={() => handleSectionChange('home')}>
                <a href="#" >
                    <BsHouse className='icon'/> Home
                </a>
            </li>
            <li className='sidebar-list-item' onClick={() => handleSectionChange('customers')}>
                <a href="#" >
                    <BsPeopleFill className='icon'/> Customers
                </a>
            </li>
            <li className='sidebar-list-item' onClick={() => handleSectionChange('inventory')}>
                <a href="#">
                    <BsListCheck className='icon'/> Inventory
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar