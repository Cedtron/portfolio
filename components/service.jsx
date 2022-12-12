import React from 'react';
import Image from 'next/image'
import { SiHtml5 } from "react-icons/si";
import {MdDesignServices } from "react-icons/md";

export default function Service  () {

    return (
       
      <div>
      <div class="untree_co-section bg-p2">
      <div class="container">
        <div class="row mb-5 justify-content-center">
          <div class="col-lg-6 text-center">
            <h2 class="section-title text-center mb-3">Services</h2>
            <p>Here are the services i provide</p>
          </div>
        </div>
        <div class="row align-items-stretch">
          
  
          <div class="col-6 col-sm-6 col-lg-4 feature-1-wrap d-md-flex flex-md-column order-lg-1" >
  
            <div class="feature-1 d-md-flex bg-p4">
              <div class="align-self-center">
                <span class="display-4 text-primary">
                  <SiHtml5/>
                </span>
                <h3>Web Development</h3>
                <p class="mb-0">Even the all-powerful Pointing has no control about the blind texts.</p>
              </div>
            </div>

          </div>

          <div class="col-lg-4 order-lg-1">
            <div class="h-100"><div class="frame h-100"> 
               <Image
      // loader={myLoader}
      src="/images/s1.png"
      alt="Picture of the author"
      width={300}
      height={250}
    /></div></div>
          </div>
  
          <div class="col-6 col-sm-6 col-lg-4 feature-1-wrap d-md-flex flex-md-column order-lg-3" >
  
            <div class="feature-1 d-md-flex bg-p3">
              <div class="align-self-center">
                <span class="display-4 text-primary">
                  <MdDesignServices />
                </span>
                <h3>Graphic Desgining</h3>
                <p class="mb-0">Even the all-powerful Pointing has no control about the blind texts.</p>
              </div>
            </div>
  
         
  
          </div>
  
        </div>
      </div>
    </div>
          </div>

    );
}

