import React from 'react';
import Header from './header';
import Navs from './nav'
import Footer from './footer';

export default function Layout ({children}) {
    return (
        <div>
            <Header/>
            <Navs/>
{children}
            <Footer/>
        
        </div>
    );
}

