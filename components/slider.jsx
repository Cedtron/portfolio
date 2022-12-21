import {React , useEffect } from "react";
import Image from 'next/image'
import Link from 'next/link'
import Carousel from 'react-multi-carousel';
import Typed from 'typed.js';

import Client from "./client";
import { BsGithub,BsLinkedin} from "react-icons/bs";
import { HiOutlineMail} from "react-icons/hi";

export default function Slider () {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 2000, min: 1020 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 5024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 4640, min: 0 },
          items: 1
        }
      };


	

	
	useEffect(() => {
  var typed = new Typed('.typed-words', {
		strings: ["Ssegirinya Cedric.","Web Developer."],
		typeSpeed: 80,
		backSpeed: 80,
		backDelay: 4000,
		startDelay: 1000,
		loop: true,
		showCursor: false,

		})

	
	  }, [])

    return (
        <div>

<div className="hero" id="lazy-image">
		<div className="container">
			<div className="row ">
				<div className="col-md-4">
					<div className="intro-wrap">
						<h1 className="mb-5"><span className="d-block">I am</span>
						<div className="tall"><span className="typed-words" ></span></div></h1>
						<h4>You can use the below links to contact me</h4>
<ul className="slider-list">
	<li><Link href="http://www.linkedin.com/in/cedric-allan-38817a221">  <span className="display-4 bu"><BsLinkedin/></span></Link> </li>
	<li><Link href="mailto:cedricallan16@gmail.com"> <span className="display-4 text-primary"><HiOutlineMail/></span></Link></li>
	<li><Link href="http://www.linkedin.com/in/cedric-allan-38817a221">  <span className="display-4 wh"><BsGithub/></span></Link> </li>

</ul>
					</div>
				</div>
				<div className="col-md-8">
					

				<Carousel responsive={responsive} arrows={false} focusOnSelect={true} infinite={true} autoPlay={true}>   
					 <Image  width={500}
      height={500} src="/images/s2.jpg" alt="Picture of the author" className="col-lg-10 rad"  />
					<Image  width={500}
      height={500} src="/images/s1.jpg" alt="Picture of the author" className="col-lg-10 rad"  />
					<Image  width={500}
      height={500} src="/images/s3.jpg" alt="Picture of the author" className="col-lg-10 rad"   />
			
					</Carousel>
				</div>
			</div>
		</div>
	</div>
<Client />
        </div>
    );
}


