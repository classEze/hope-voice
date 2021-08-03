import React from 'react'
import { Col, Row, Container } from 'reactstrap'
import Content from '../components/Content'
import SideNav from '../components/SideNav'

const Home = () => {
    return (
        <Container fluid className='bg-grey'>
            <Row>
            <Col className='pt-4 rounded-0 card' id='side-nav' sm="auto">
                <SideNav />
            </Col>
            <Col>
            <Content />
            </Col>
            </Row>
        </Container>
    )
}

export default Home
