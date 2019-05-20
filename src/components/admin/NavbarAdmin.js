import React, { Fragment, Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

import { LinkContainer } from 'react-router-bootstrap';



class NavbarAdmin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        }
    }
    
    render() {
        return(
            <Fragment>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Hodierno</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <LinkContainer to="admin/new_product" >
                                <Nav.Link eventKey={1}>New Product</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="admin/remove_product">
                                <Nav.Link eventKey={2}>Remove Product</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="admin/clients">
                                <Nav.Link eventKey={3}>Clients</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="admin/providers">
                                <Nav.Link eventKey={4}>Providers</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="admin/to_accept">
                                <Nav.Link eventKey={5}>To accept</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        {/* <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav> */}
                    </Navbar.Collapse>
                </Navbar>
               
            </Fragment>
        );
    }
    
}

export default NavbarAdmin;