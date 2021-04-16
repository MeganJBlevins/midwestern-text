import Header from './header'
import Footer from './footer'
import * as React from "react";

export interface LayoutProps  { 
  children: React.ReactNode
}

const Layout = (props: LayoutProps) => {
  return (
  <>
    <Header />
    {props.children}
    <Footer />
  </>
  )
}

export default Layout