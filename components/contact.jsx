import React from 'react';
import Image from 'next/image'
import Button from '@mui/material/Button';
import { BsPhone,BsWhatsapp,BsLinkedin} from "react-icons/bs";
import { HiOutlineMail} from "react-icons/hi";

export default function Contact () {
    return (
      <div>
   <div className="untree_co-section" id="contact">
    <div className="container">
      <div className="row">
     
        <div className="col-lg-5">
         
        <Image
      // loader={myLoader}
      src="/images/pic1.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />  
        </div>
        <div className="col-lg-7 pl-lg-5 ml-auto neu pad">
          <h2 className="section-title mb-4">Contant me</h2>
          <div className="row">

<div className="col-6">
  <div className="align-self-center">
    <span className="display-4 wh"><BsPhone/></span>
    <h3>Phone</h3>
   <Button variant="contained" href="tel:256705465643">
  Call
</Button>
  </div>
</div>

<div className="col-6">
  <div className="align-self-center">
    <span className="display-4 text-primary"><HiOutlineMail/></span>
    <h3>Email</h3>
   <Button variant="contained" href="mailto:cedricallan16@gmail.com">
  Mail
</Button>
  </div>
</div>


<div className="col-6">
  <div className="align-self-center">
    <span className="display-4 gr"><BsWhatsapp/></span>
    <h3>Whats app</h3>
   <Button variant="contained" href="https://wa.me/256705465643">
  Chat
</Button>
  </div>
</div>

<div className="col-6">
  <div className="align-self-center">
    <span className="display-4 bu"><BsLinkedin/></span>
    <h3>Linked in</h3>
   <Button variant="contained" href="http://www.linkedin.com/in/cedric-allan-38817a221">
  Chat
</Button>
  </div>
</div>


</div>
        </div>
      </div>
    </div>
  </div>



          </div>








    );
}

