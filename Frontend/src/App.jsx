import { useState,useEffect } from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import Customers from './Customers'
import Inventory from './Inventory'


function App() {

    const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
    const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  const [currentSection, setCurrentSection] = useState(() => {
    // Retrieve the current section from localStorage or default to 'home'
    return localStorage.getItem('currentSection') || 'home';
  });

  useEffect(() => {
    // Save the current section to localStorage
    localStorage.setItem('currentSection', currentSection);
  }, [currentSection]);

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar 
          openSidebarToggle={openSidebarToggle} 
          OpenSidebar={OpenSidebar} 
          handleSectionChange={handleSectionChange}
      />
      {currentSection === 'home' && <Home />}
      {currentSection === 'customers' && <Customers />}
      {currentSection === 'inventory' && <Inventory />}
    </div>
  )
}

export default App
