import React from 'react';
import './Service.css';
import { Container, Row, Col } from 'react-bootstrap';




function Service () {

    const data =[
        {
            icon: "fa-solid fa-user-secret fs-2",
            title:"Business Model",
            subtitle:"Lorem, ipsum dolor sit amet consectetur adipisicing elit.Ab debitis, aliquam repellat maiores quo dolores "
        },
        {
            icon: "fa-solid fa-building fs-2",
            title:"Business Excution",
            subtitle:"Lorem, ipsum dolor sit amet consectetur adipisicing elit.Ab debitis, aliquam repellat maiores quo dolores "
        },
        {
            icon: "fa-brands fa-intercom fs-2",
            title:"Business Monitoring",
            subtitle:"Lorem, ipsum dolor sit amet consectetur adipisicing elit.Ab debitis, aliquam repellat maiores quo dolores "
        }
    ]



    function Servi ({data}) {
        return(
            <Col className='bg-dark bg-opacity-10 text-center p-5 shadow border my-2 mx-2  rounded service'>
                        <div className="icon-box py-4 px-3 border-dark">
                        <i className={data.icon}></i>
                        </div>
                          <h3>{data.title}</h3>
                          <p>{data.subtitle}</p>
                        </Col>
        )
    }




    return (
        <>
            <section className='bg-dark bg-opacity-10 py-5 '>
                <Container>
                    <Row>
                        <Col>
                            <h1> Our Service</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                Ab debitis, aliquam repellat maiores quo dolores 
                                ratione quidem necessitatibus aspernatur reprehenderit
                                 assumenda optio architecto eum cumque soluta qui. 
                            </p>
                           
                        </Col>
                        </Row>
                        <Row>
                        {
                                data.map((data,index)=>{
                                    return(
                                        <Servi data={data} key={index}/>
                                    )
                                })
                             }
                        </Row>

                        
                   
                </Container>
            </section>

        </>


    )
}

export default Service
