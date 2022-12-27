import React from 'react';
import AOS from  "aos"
import Skills from '../components/skills'
import Image from 'next/image'

export default function About ()  {

    return (
     
        <div>
  
  <div className="untree_co-section" id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-6" >
        
            <Image  width={500}
      height={500} src="/images/pic1.png" alt="image" className="img-fluid rounded-20"/>
       
        </div>
        <div className="col-lg-6 pl-lg-5 ml-auto neu pad">
          <h2 className="section-title mb-4">About My Self</h2>
      <p>Hello! I’m Ssegirinya Cedric a self-taught &  Web Developer & Digital Designer  with over three years plus work experience.

Love the Web and the work we do.I work closely with my clients to deliver the best possible solutions for their needs</p>
        <p>Well-organised person, problem solver, independent employee with high attention to detail. Fan of outdoor activities, TV series.</p>
        <h3>Education</h3>
        <p>I have a certificate in Computer Science and soon pursuing for a dipolam in Computer Science</p>
        <h3>Work experience</h3>
         <ul className="list-unstyled two-col clearfix">
            <li>Climaxx Microfinance as IT manager 2021 -2022</li>
            <li>MFI as implementation engineer 2022</li>
            
          </ul>
        </div>
      </div>
    </div>
  </div>

  <Skills />



        </div>
       
    );
}

