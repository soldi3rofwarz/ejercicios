import React from 'react'
import Footer from './footer'
import Header from './header'
const Layout =(props) =>
{
    return (
        <> 
        <Header/>
        <section className="layout">
            {props.children}
        </section>
        <Footer/>
        </>
    )
}
export default Layout;