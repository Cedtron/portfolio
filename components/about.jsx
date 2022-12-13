import React from 'react';

import Image from 'next/image'

export default function About ()  {
  
    return (
     
        <div>
  
  <div class="untree_co-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-7">
         
            <Image  width={500}
      height={500} src="/images/pic1.png" alt="Free HTML Template by Untree.co" class="img-fluid rounded-20"/>
       
        </div>
        <div class="col-lg-5 pl-lg-5 ml-auto neu">
          <h2 class="section-title mb-4">About My Self</h2>
      <p>Hello! I’m Ssegirinya Cedric a self-taught &  Web Developer & Digital Designer  with over five years work experience.

Love the Web and the work we do.I work closely with my clients to deliver the best possible solutions for their needs</p>
        <p>Well-organised person, problem solver, independent employee with high attention to detail. Fan of outdoor activities, TV series.</p>
        <h3>Education</h3>
        <p>I have a certificate in Computer Science and soon pursuing for a dipolam in Computer Science</p>
        <h3>Education and skill set</h3>
         <ul class="list-unstyled two-col clearfix">
            <li>Certificate in Computer Science</li>
            <li>Worked at Climax microfinace as IT manager</li>
            <li>MFI as implimentnal engier</li>
            
          </ul>
        </div>
      </div>
    </div>
  </div>

  



        </div>
       
    );
}

