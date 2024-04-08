import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import './Benefis.css';


const data = [
                    {
                        title: '100% project based learnings',
                        subtitle:"We can built more than two real world projects in each language and don't worry that the project development"
                    },
                    {
                        title: 'Live Call Supports',
                        subtitle:'We can built more than two real world projects in each language'
                    },
                    {
                        title: 'High Chance of Selection',
                        subtitle:'We can built more than two real world projects in each language'
                    },
                    {
                        title: 'Video Access Timing',
                        subtitle:'We can built more than two real world projects in each language'
                    }
]


function Benefit ({demo}) {

    return(

        
        <div className="d-flex">
          <div>
              <div className="me-4 mt-1">
              <i class="fa-solid fa-check p-3 bg-dark  text-white rounded-circle"></i>
              </div>
          </div>
          <div className="me-2 mt-1">
              <h5>{demo.title} </h5>
        
              <p>{demo.subtitle}</p>
          </div>
        </div>
       
        
  )
}


function Benefits() {

  return (
    <section className='bg-dark bg-opacity-10 py-5'>
        <Container>
            <Row className='bg-white rounded'>
                <Col md>
                <h3 className='my-4'>Benefits of Learnings</h3>
                {
                    data.map((item, index)=>{
                        return (
                            <Benefit demo={item} key={index} />
                        )
                    })
                }
                </Col>
                <Col md>
                <img src="2.jpg" alt="learn" className='rounded-circle img-fluid w-75 d-block mx-auto py-5' />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Benefits
