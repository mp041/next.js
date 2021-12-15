// import React from 'react'
import Navbar from '../../pages/Components/Navbar';

const Layout = ({children}) => {
  return (
    <div>
      <Navbar />
      { children }
    </div>
  )
}

export default Layout
