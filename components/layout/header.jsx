import React from 'react';
import Head from 'next/head';
import Link from 'next/link'
import Script from 'next/script'

export default function Header  (){



    return (
        <div>
            <Head>
            <meta charset="utf-8"/>
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
	<meta name="author" content="Untree.co"/>
	<link rel="shortcut icon" href="favicon.png"/>
	<Script src="../../styles/typed.js"  strategy="beforeInteractive"/>
	<meta name="description" content="" />
	<meta name="keywords" content="bootstrap, bootstrap4" />
    <title>Cedo Developer</title>
            </Head>
      

			<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#">Cedo</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             <li className="nav-item">
             <Link className="nav-link"  href="#">Home</Link>
              </li>
        
			  <li className="nav-item">
             <Link className="nav-link"  href="#">About us</Link>
              </li>

			  <li className="nav-item">
             <Link className="nav-link"  href="#">Services</Link>
              </li>

			  <li className="nav-item">
             <Link className="nav-link"  href="#">Contact us</Link>
              </li>

      </ul>
    
    </div>
  </div>
</nav>


        </div>
    );
}

