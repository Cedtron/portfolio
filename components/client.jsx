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
<div className="untree_co-section" id="client">
<div className="container">
  <div className="row mb-5 justify-content-center">
    <div className="col-lg-6 text-center">
      <h2 className="section-title text-center mb-3">Projects</h2>
   
    </div>
  </div>
  <div className="row align-items-stretch " id="projects">
  {/* <div className="owl-single dots-absolute owl-carousel"> */}
    

    <div className="col-12 col-md-12 col-lg-12 feature-1-wrap d-md-flex flex-md-column order-lg-1 ">
  
    <Carousel responsive={responsive} focusOnSelect={true} infinite={true} autoPlay={true}>    
     
      <div className="feature-1 d-md-flex cent">
        <Link href="https://anfieldsafaris.com/"><div className="align-self-center">
        <Image
      // loader={myLoader}
      src="/images/anfield.png"
      alt="Picture of the cedo"
      width={200}
      height={100}
    />
          <h3>Anfield Safari</h3>
       
        </div></Link>
      </div>

      <div className="feature-1 d-md-flex cent">
      <Link href="http://seagatefreightservices.com/">
          <div className="align-self-center">
        <Image
      // loader={myLoader}
      src="/images/seagate.png"
      alt="Picture of the cedo"
      width={200}
      height={100}
    />
          <h3>Seagate Freight Services</h3>
       
        </div></Link>
      </div>


      {/* <div className="feature-1 d-md-flex cent">
        <div className="align-self-center">
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

      <div className="feature-1 d-md-flex cent">
      <Link href="https://whitesandssafaris.com/">
         <div className="align-self-center">
        <Image
      // loader={myLoader}
      src="/images/white.jpeg"
      alt="Picture of the cedo"
      width={200}
      height={100}
    />
          <h3>White Sands Safari</h3>
       
        </div></Link>
      </div>

      <div className="feature-1 d-md-flex cent">
      <Link href="http://gatewaymineral.com/">
        <div className="align-self-center">
        <Image
      // loader={myLoader}
      src="/images/gateway.png"
      alt="Picture of the cedo"
      width={200}
      height={100}
    />
          <h3>Gateway Minerals</h3>
        </div></Link>
      </div>

      {/* <div className="feature-1 d-md-flex cent">
      <Link href="http://www.claverapartment.com">
         <div className="align-self-center">
        <Image
      // loader={myLoader}
      src="/images/logos.png"
      alt="Picture of the cedo"
      width={200}
      height={100}
    />
          <h3>Claver Apartments</h3>
       
        </div></Link>
      </div> */}
      

      <div className="feature-1 d-md-flex cent">
      <Link href="http://adzakspiritual.com/">
        <div className="align-self-center">
        <Image
      // loader={myLoader}
      src="/images/spell.png"
      alt="Picture of the cedo"
      width={200}
      height={100}
    />
          <h3>Adzakspiritual</h3>
       
        </div></Link>
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

