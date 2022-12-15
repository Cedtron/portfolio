import React, { useEffect } from "react";
import { Circles } from  'react-loader-spinner'
import $ from 'jquery'

export default function Loader  () {
   
    useEffect(function mount() {

            $('.loader').delay(3500).fadeOut('slow'); // will fade out the white DIV that covers the website.
          
    
    setTimeout(()=> {
$('.loader').remove();

} , 5000);
    
      });


   
    return (
        <div>

<div className="loader">
<Circles
  height="80"
  width="80"
  color="#3f64e0"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
</div>

        </div>
    );
}

