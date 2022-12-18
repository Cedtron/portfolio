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
        <div className="col-lg-5" >
        
            <Image  width={500}
      height={500} src="/images/pics.jpg" alt="Free HTML Template by Untree.co" className="img-fluid rounded-20"/>
       
        </div>
        <div className="col-lg-7 pl-lg-5 ml-auto neu pad">
          <h2 className="section-title mb-4">About My Self</h2>
      <p>Hello! I’m Ssegirinya Cedric a self-taught &  Web Developer & Digital Designer  with over five years work experience.

Love the Web and the work we do.I work closely with my clients to deliver the best possible solutions for their needs</p>
        <p>Well-organised person, problem solver, independent employee with high attention to detail. Fan of outdoor activities, TV series.</p>
        <h3>Education</h3>
        <p>I have a certificate in Computer Science and soon pursuing for a dipolam in Computer Science</p>
        <h3>Education and skill set</h3>
         <ul className="list-unstyled two-col clearfix">
            <li>Certificate in Computer Science</li>
            <li>Worked at Climaxx Microfinance as IT manager</li>
            <li>MFI as implementation engineer</li>
            
          </ul>
        </div>
      </div>
    </div>
  </div>

  <Skills />



        </div>
       
    );
}

