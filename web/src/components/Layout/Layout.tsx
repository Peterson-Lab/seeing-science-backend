import React from 'react'
import { Footer } from './Footer'
import Navbar from './Navbar'

// interface LayoutProps {}

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
