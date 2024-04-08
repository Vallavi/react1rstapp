import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

function Carrer() {
    return (
        <section className='py-5'>
            <Container>
                <Row>
                    <Col>
                        <img src="3.jpg" alt="carrer" className='img-fluid w-95  d-block mx-auto ' />
                    </Col>
    
                    <Col className=' bg-light opacity-70 shadow my-2 mx-2 py-4 rounded'>
                       <div>
                       <i className="fa-solid fa-chart-simple fs-3 mx-2 py-2"></i>
                       </div>
                        <h1>We'll help perfect your career in IT sector</h1>
                        <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam in nobis voluptatibus neque molestiae a! Accusamus nemo pariatur dolor sequi ipsum. Voluptates maxime, eos at adipisci vero mollitia quis nobis a tenetur commodi eveniet repellat ab itaque quidem accusantium distinctio.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Carrer
