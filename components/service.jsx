import React from 'react';
import Image from 'next/image'
import { SiHtml5 } from "react-icons/si";
import {MdDesignServices } from "react-icons/md";

export default function Service  () {

    return (
       
      <div>
      <div className="untree_co-section bg-p2" id="service">
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <div className="col-lg-6 text-center">
            <h2 className="section-title text-center mb-3">Services</h2>
            <p>Here are the services i provide</p>
          </div>
        </div>
        <div className="row">
          
  
          <div className="col-5 " >
  
            <div className="feature-1 d-md-flex bg-p4">
              <div className="align-self-center">
                <span className="display-4 wh">
                  <SiHtml5/>
                </span>
                <h3>Web Development</h3>
            
              </div>
            </div>

          </div>

          {/* <div className="col-2">
            <div className="h-100"><div className="frame h-100"> 
               <Image
      // loader={myLoader}
      src="/images/s1.png"
      alt="Picture of the author"
      width={300}
      height={250}
    /></div></div>
          </div> */}
  
          <div className="col-5 " >
  
            <div className="feature-1 d-md-flex bg-p3">
              <div className="align-self-center">
                <span className="display-4 bl">
                  <MdDesignServices />
                </span>
                <h3>Graphic Desgining</h3>
           
              </div>
            </div>
  
         
  
          </div>
  
        </div>
      </div>
    </div>
          </div>

    );
}

