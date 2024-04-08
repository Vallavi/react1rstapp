import React from 'react';
import { Button } from 'react-bootstrap';
import './Banner.css';

function Banner() {
  return (
    <>
       <div className="banner position-relative">
       <video width="100%"  autoPlay loop muted className='position-reltive'>
        <source src='1.mp4' type='video/mp4' width="100%" />
       </video>  
       <div className='banner text-center  position-absolute start-0 w-100' style={{top:"25%"}}>
         <img src="logo192.png" alt="logo" width={100} className='logorotate'/>
       <h1>Bonjoure;)</h1>
       <h2>Welcome you All</h2>
       <Button variant="light" className='me-3'>Learn</Button>
       <Button variant="dark">Apply</Button>
       </div>
       </div>
    </>
  )
}

export default Banner
