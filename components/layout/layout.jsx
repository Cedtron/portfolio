import React from 'react';
import Header from './header';
import Navs from './nav'
import Footer from './footer';
import Loader from './loader'

// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";



export default function Layout ({children}) {
    
    

    return (
        <div>
            <Header/>
      <Loader />
            <Navs/>
          
{children}
            <Footer/>
        
        </div>
    );
}

