import React from 'react'
import '../../App.css'
import '../ButtonStyle.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Row, Col, Form } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Button } from 'react-bootstrap';
import hobby from '../../assets/hobby.svg'
import SignIn from '../Auth/SignIn';
import JoinIn from '../Auth/JoinIn';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
const LandingPage = () => {
    return (
        <>
            <Container style={{ padding: "2em" }} className=' bg-light-purple-color'>
                <Row>
                    <Col md={6} lg={6} sm={12} className='p-4'>

                        <i><h1>Explore your <i style={{ color: '#0096C8' }} >hobby</i> or <i style={{ color: '#8064A2' }}>passion</i></h1></i>
                        <br />
                        <p>
                            Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
                            <br />
                            <br />
                            If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.
                        </p>
                        <img className='hobby-img' width='90%' src={hobby} />
                    </Col>

                    <Col md={6} lg={6} sm={12} className='p-4'>
                        {/* <Col md={3}>
                            <Nav fill variant="underline" defaultActiveKey="/signin">
                                <Nav.Item>
                                    <Nav.Link eventKey="/signin">Sign In</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="joinin">Join In</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col> */}

                        <Tabs
                            defaultActiveKey="signin"
                            transition={false}
                            className="tbstyle mb-3 underline"
                        >
                            <br />
                            <br />
                            <Tab eventKey="signin" title="Sign In">
                                {/* Sign In Form */}
                                <SignIn />
                            </Tab>
                            <Tab eventKey="joinin" title="Join In">
                                {/* Join In Form */}
                                <JoinIn />
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default LandingPage
