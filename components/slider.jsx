import {React , useEffect } from "react";
import Image from 'next/image'
import Link from 'next/link'
import Carousel from 'react-multi-carousel';
import Typed from 'typed.js';
import $ from "jquery"
import Client from "./client";
import { BsGithub,BsLinkedin} from "react-icons/bs";
import { HiOutlineMail} from "react-icons/hi";

export default function Slider () {

	// const myLoader = ({ src, width, quality }) => {
	// 	return `https://example.com/${src}?w=${width}&q=${quality || 75}`
	//   }

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


	//   var typed = new Typed('.typed-words', {
	// 	strings: ["Cedric.","Web Developer."," Graphic Desginer."],
	// 	typeSpeed: 80,
	// 	backSpeed: 80,
	// 	backDelay: 4000,
	// 	startDelay: 1000,
	// 	loop: true,
	// 	showCursor: false,
	// 	preStringTyped: (arrayPos, self) => {
	// 		arrayPos++;
	// 		console.log(arrayPos);
	// 		$('.slides img').removeClass('active');
	// 		$('.slides img[data-id="'+arrayPos+'"]').addClass('active');
	// 	}

	// });
	  

    return (
        <div>

<div className="hero">
		<div className="container">
			<div className="row ">
				<div className="col-md-4">
					<div className="intro-wrap">
						<h1 className="mb-5"><span className="d-block">I am</span> <span className="typed-words"></span></h1>
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
      height={500} src="/images/s3.png" alt="Picture of the author" className="col-lg-12"  />
					<Image  width={500}
      height={500} src="/images/s1.png" alt="Picture of the author" className="col-lg-12"  />
					<Image  width={500}
      height={500} src="/images/s2.png" alt="Picture of the author" className="col-lg-12"   />
			
					</Carousel>
				</div>
			</div>
		</div>
	</div>
<Client />
        </div>
    );
}


