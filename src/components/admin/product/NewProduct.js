import React, { Fragment, Component } from 'react';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import FirebaseService from '../../../services/firebase';

class NewProduct extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            value: '',
            categorie: '',
            description: '',
            categories: [],
            provider: 'A'
        }
    }

    componentDidMount() {
        FirebaseService.getCategories((dataReceived) => {
            this.setState({
                categories: dataReceived
            })
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleChangeCategorie = (e) => {
        this.setState({
            categorie: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let product = {
            name: this.state.name,
            value: this.state.value,
            categorie: this.state.categorie,
            description: this.state.description,
            provider: this.state.provider
        }

        let newId = FirebaseService.insertProduct({product});

        this.props.history.push('/admin');

    }

    render() {
        return(
            <Fragment>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col xs={6}>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control name="name" placeholder="Name new product" onChange={this.handleChange}/>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridValue">
                                        <Form.Label>R$</Form.Label>
                                        <Form.Control name="value" placeholder="value" onChange={this.handleChange}/>
                                    </Form.Group>
                                </Form.Row>
                              
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Select the categorie</Form.Label>
                                    <Form.Control 
                                        as="select" 
                                        onChange={this.handleChangeCategorie}
                                    >
                                        {this.state.categories.map((categorie, key) => {
                                            return <option value={categorie} key={key}>{categorie}</option>
                                        })}
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control name="description" as="textarea" rows="3" onChange={this.handleChange}/>
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>    
                </Container>
            </Fragment>
    
        );
    }
    
}

export default NewProduct;