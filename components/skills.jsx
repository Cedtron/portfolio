import React from 'react';
import { SiHtml5 ,SiPhp,SiReact,SiNextdotjs,SiAdobephotoshop,SiAdobeillustrator} from "react-icons/si";
import { FaNodeJs} from "react-icons/fa";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import Carousel from 'react-multi-carousel';

export default function Skills  () {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 3000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 2000, min: 1024 },
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



      const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
          borderRadius: 5,
          backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
        },
      }));


    return (
    


      
<div>
<div className="untree_co-section" id="skill">
<div className="container">
  <div className="row mb-5 justify-content-center">
    <div className="col-lg-6 text-center">
      <h2 className="section-title text-center mb-3">Skills</h2>
      <p>Since beginning my journey as a freelance developer nearly 5 years ago, I’ve done remote work for agencies, consulted for startups, and collaborated with talented people to create web products for both business and consumer use.</p>
    </div>
  </div>
  <div className="row align-items-stretch neu pad">
  {/* <div className="owl-single dots-absolute owl-carousel"> */}
    

    <div className="col-12 col-md-12 col-lg-12 feature-1-wrap d-md-flex flex-md-column order-lg-1" >
  
    <Carousel responsive={responsive} focusOnSelect={true} infinite={true} autoPlay={true}>    
      <div className="col-6">
        <div className="align-self-center cent ">
          <span className="display-4 text-primary">
            <SiHtml5 />
          </span>
          <h3>HTML</h3>
          100%
          <BorderLinearProgress variant="determinate" value={100} />
        </div>
      </div>

      <div className="col-6">
        <div className="align-self-center cent ">
          <span className="display-4 pu">
            <SiPhp />
          </span>
          <h3>PHP</h3>
          70%
          <BorderLinearProgress variant="determinate" value={70} />
        </div>
      </div>

      <div className="col-6">
        <div className="align-self-center cent ">
          <span className="display-4 re">
            <SiReact />
          </span>
          <h3>React</h3>
          60%
          <BorderLinearProgress variant="determinate" value={60} />
        </div>
      </div>


      <div className="col-6">
        <div className="align-self-center cent ">
          <span className="display-4 wh">
          <SiNextdotjs/>
          </span>
          <h3>Next Js</h3>
          50%
          <BorderLinearProgress variant="determinate" value={50} />
        </div>
      </div>

      <div className="col-6">
        <div className="align-self-center cent ">
          <span className="display-4 gr">
            <FaNodeJs />
          </span>
          <h3>Node JS</h3>
          60%
          <BorderLinearProgress variant="determinate" value={60} />
        </div>
      </div>

      <div className="col-6">
        <div className="align-self-center cent ">
          <span className="display-4 bu">
            <SiAdobephotoshop />
          </span>
          <h3>Photoshop</h3>
          70%
          <BorderLinearProgress variant="determinate" value={70} />
        </div>
      </div>

      <div className="col-6">
        <div className="align-self-center cent ">
          <span className="display-4 or">
            <SiAdobeillustrator />
          </span>
          <h3>Illustrator</h3>
          90%
          <BorderLinearProgress variant="determinate" value={90} />
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

