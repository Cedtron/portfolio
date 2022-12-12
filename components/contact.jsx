import React from 'react';
import Image from 'next/image'
import { BsPhone,BsWhatsapp,BsLinkedin} from "react-icons/bs";
import { HiOutlineMail} from "react-icons/hi";

export default function Contact () {
    return (
      <div>
      <div class="untree_co-section bg">
      <div class="container">
        <div class="row mb-5 justify-content-center">
          <div class="col-lg-6 text-center">
            <h2 class="section-title text-center mb-3">Contact Me</h2>
            <p>I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the link below.</p>
         </div>
        </div>
        <div class="row align-items-stretch">
          <div class="col-lg-4 order-lg-1">
            
         
            <Image
      // loader={myLoader}
      src="/images/pic1.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
    
          </div>
  
          <div class="col-6 col-sm-6 col-lg-4 feature-1-wrap d-md-flex flex-md-column order-lg-1" >
  
            <div class="feature-1 d-md-flex">
              <div class="align-self-center">
                <span class="display-4 text-primary"><BsPhone/></span>
                <h3>Phone</h3>
                <p class="mb-0">Even the all-powerful Pointing has no control about the blind texts.</p>
              </div>
            </div>
  
            <div class="feature-1 ">
              <div class="align-self-center">
                <span class="display-4 text-primary"><HiOutlineMail/></span>
                <h3>Email</h3>
                <p class="mb-0">Even the all-powerful Pointing has no control about the blind texts.</p>
              </div>
            </div>
  
          </div>
  
          <div class="col-6 col-sm-6 col-lg-4 feature-1-wrap d-md-flex flex-md-column order-lg-3" >
  
            <div class="feature-1 d-md-flex">
              <div class="align-self-center">
                <span class="display-4 text-primary"><BsWhatsapp/></span>
                <h3>Whats app</h3>
                <p class="mb-0">Even the all-powerful Pointing has no control about the blind texts.</p>
              </div>
            </div>
  
            <div class="feature-1 d-md-flex">
              <div class="align-self-center">
                <span class="display-4 text-primary"><BsLinkedin/></span>
                <h3>Linked in</h3>
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

