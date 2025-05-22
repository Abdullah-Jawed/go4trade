import React from 'react'
import { Header, Footer } from '../components/common'
import ScrollTriggerRefresher from '../components/ScrollTriggerRefresher'
const Layout = ({ children }) => {
  return (
    <div>
      <ScrollTriggerRefresher />
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
