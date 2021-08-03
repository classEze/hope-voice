import React from 'react'
import { } from 'react-icons/ri'
import { Card, Button, Col, Row } from 'reactstrap'


const LCard = () => {
    return (
            <Card className='w-90 login-sessions mx-auto rounded-0 mb-4 p-4'>
               <span className='fw-bolder'> Login Sessions </span>
               <div className='d-flex justify-content-between mb-2'>
               <span className='text-muted fw-bold fs-10'> Places where you're logged into Cannapendix </span> 
                <Button outline color="primary" size='sm'>Sign Out All Sessions</Button>
                </div>


         <Row className='p-2 bg-grey border'>
                <Col sm='2'>
                <span>Location</span><br />
                </Col>
                <Col sm='2'>
                <span>Device</span>
                </Col>
                <Col sm='2'>
                <span>IP Address</span>
                </Col>
                <Col sm='2'>
                <span>Time</span>
                </Col>
        </Row>
         <Row className='px-2 border'>
         <Col sm='2'>
                <span>Accra</span><br />
                </Col>
                <Col sm='2'>
                <span>Safari Mac Os</span>
                </Col>
                <Col sm='2'>
                <span>154.160.21.106</span>
                </Col>
                <Col sm='2'>
                <span>May, 21st, 2021, 12:23 AM</span>
                </Col>
                <Col sm='2'>
                <Button outline color="primary" size='sm'>Sign Out Session</Button>
                </Col>
        </Row>

         <Row className='px-2 border'>
         <Col sm='2'>
                <span>Accra</span><br />
                </Col>
                <Col sm='2'>
                <span>Safari Mac Os</span>
                </Col>
                <Col sm='2'>
                <span>154.160.21.106</span>
                </Col>
                <Col sm='2'>
                <span>May, 21st, 2021, 12:23 AM</span>
                </Col>
                <Col sm='2'>
                <Button outline color="primary" size='sm'>Sign Out Session</Button>
                </Col>
        </Row>
            </Card>
         )
}

export default LCard
