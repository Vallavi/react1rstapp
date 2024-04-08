import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';
import menu from '../../menu-json-api/menu.json';
import company from '../../Company-Details/company.json';



function Mainmenu ({demo}) {
  return (
    <div>
      <Link to={demo.link}  className={demo.isButton?"btn btn-outline-dark":"nav-link"}
        >{demo.label}</Link>
    </div>
  )
}

function DropdownMenu ({demo})
{
    return(
        <NavDropdown title={demo.label} id="navbarScrollingDropdown">
        {
            demo.dropDownMenu.map((data, index)=>{
                return <Mainmenu demo ={data} key={index}/>
            })
        }
      </NavDropdown>
    )
}


function Header() {
    // console.log(menu);
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Link to="/" className='navbar-brand'>
                        <img src={company.logo} alt="logo" width={35} />&nbsp;
                        {company.name}
                    </Link>
                     <Form className="d-flex">
                            <Form.Control type="search" placeholder="Search"className="me-2" aria-label="Search"
                            />
                            {/* <Button variant="outline-success">Search</Button> */}
                        </Form>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                           
                           
                            {
                                menu.map((item,index)=>{
                                
                                    if (item.isDropDown){
                                        return <DropdownMenu demo={item} key={index}/>
                                    }
                                    return <Mainmenu demo={item} key={index}/>
                                
                                })
                            }


                            
                        </Nav>
                       
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
