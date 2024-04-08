import React from 'react';
import './Compo.css';
import { Container,Row,Col } from 'react-bootstrap';


function Compo() {

  const data = [{
           icon: "fa-solid fa-palette fs-1",
           title:   "Color",
           subtitle: "Mode"

  },
  {
    icon: "fa-brands fa-dribbble fs-1",
           title:   "Play",
           subtitle: "Time"
  },
  {
    icon: "fa-brands fa-codepen fs-1",
           title:   "Code",
           subtitle: "Master"
  },
  {
    icon: "fa-solid fa-hippo fs-1",
           title:   "Activity",
           subtitle: "Power"
  },
  {
    icon: "fa-solid fa-gamepad fs-1",
           title:   "Games",
           subtitle: "Store"
  }
]

  const Column =({data}) =>{
  return(
    <Col className='text-center p-5 shadow border my-3 mx-3  rounded bg-white'>
                    <div className="icon-box py-4 px-3  rounded-circle">
                    <i className={data.icon}></i>
                    </div>
                      <h3>{data.title}</h3>
                      <p className='fw-bold'>{data.subtitle}</p>
                    </Col>
  )}

  return (
    <>
     <section className='comp bg-white'>
     <Container className='container'>
        <Row>
             {
                data.map((data,index)=>{
                    return <Column data= {data} key={index}/>
                })
             }
        </Row>
     </Container>
     </section>
    </>
  )
}

export default Compo
