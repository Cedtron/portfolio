import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Carousel from 'react-multi-carousel';

export default function Client  () {




    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


    return (
    


      
<div>
<div class="untree_co-section">
<div class="container">
  <div class="row mb-5 justify-content-center">
    <div class="col-lg-6 text-center">
      <h2 class="section-title text-center mb-3">Clients</h2>
   
    </div>
  </div>
  <div class="row align-items-stretch ">
  {/* <div class="owl-single dots-absolute owl-carousel"> */}
    

    <div class="col-12 col-md-12 col-lg-12 feature-1-wrap d-md-flex flex-md-column order-lg-1" >
  
    <Carousel responsive={responsive} focusOnSelect={true} infinite={true} autoPlay={true}>    
      <div class="feature-1 d-md-flex">
        <div class="align-self-center">
        <Image
      // loader={myLoader}
      src="/images/anfield.png"
      alt="Picture of the cedo"
      width={200}
      height={100}
    />
          <h3><Link href="https://anfieldsafaris.com/">Anfield Safari</Link></h3>
       
        </div>
      </div>

      <div class="feature-1 d-md-flex">
        <div class="align-self-center">
        <Image
      // loader={myLoader}
      src="/images/seagate.png"
      alt="Picture of the cedo"
      width={200}
      height={100}
    />
          <h3><Link href="http://seagatefreightservices.com/">Seagate Freight Services</Link></h3>
       
        </div>
      </div>


      {/* <div class="feature-1 d-md-flex">
        <div class="align-self-center">
        <Image
      // loader={myLoader}
      src="/images/pic1.png"
      alt="Picture of the cedo"
      width={200}
      height={100}
    />
          <h3><Link href="https://anfieldsafaris.com/">GateWay Minerals</Link></h3>
       
        </div>
      </div> */}

      <div class="feature-1 d-md-flex">
        <div class="align-self-center">
        <Image
      // loader={myLoader}
      src="/images/white.jpeg"
      alt="Picture of the cedo"
      width={200}
      height={100}
    />
          <h3><Link href="https://whitesandssafaris.com/">White Sands Safari</Link></h3>
       
        </div>
      </div>

      <div class="feature-1 d-md-flex">
        <div class="align-self-center">
        <Image
      // loader={myLoader}
      src="/images/gateway.png"
      alt="Picture of the cedo"
      width={200}
      height={100}
    />
          <h3><Link href="http://gatewaymineral.com/">Gateway Minerals</Link></h3>
       
        </div>
      </div>

      <div class="feature-1 d-md-flex">
        <div class="align-self-center">
        <Image
      // loader={myLoader}
      src="/images/logos.png"
      alt="Picture of the cedo"
      width={200}
      height={100}
    />
          <h3><Link href="http://www.claverapartment.com">Claver Apartments</Link></h3>
       
        </div>
      </div>
      

      <div class="feature-1 d-md-flex">
        <div class="align-self-center">
        <Image
      // loader={myLoader}
      src="/images/spell.png"
      alt="Picture of the cedo"
      width={200}
      height={100}
    />
          <h3><Link href="http://adzakspiritual.com/">Adzakspiritual</Link></h3>
       
        </div>
      </div>

      </Carousel>
    </div>

 


 
  </div>
  </div>
</div>
</div>
    // </div>      
      
 
       

    );
}

