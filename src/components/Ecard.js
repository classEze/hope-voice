import React from 'react'
import { } from 'react-icons/ri'
import { Card, Col, Row } from 'reactstrap'


const ECard = () => {
    return (
            <Card className='w-90 account mx-auto rounded-0 mb-4 p-4'>
               <span className='fw-bolder'> Email And Notification Settings </span>
               <p className='text-muted fw-bold fs-10'> Choose which messages you'd like to receive for your Hope Voice accounts </p>

         <Row className='p-2  border-bottom border-top'>
                <Col className='d-flex align-items-center'>
                <input type='checkbox' className='me-2'/>
                <span className='fw-bold'>Successful Payments <br />
                <mark className='text-muted'>Receive a notification for every Successful payment</mark>
                </span>
                </Col>
        </Row>
         <Row className='p-2  border-bottom border-top'>
                <Col className='d-flex align-items-center'>
                    <input type='checkbox' className='me-2'/>
                    <span className='fw-bold'>New Orders <br />
                <mark className='text-muted'>Receive a notification for every order made</mark>
                </span>
                </Col>
        </Row>
         <Row className='p-2  border-bottom border-top'>
                <Col className='d-flex align-items-center'>
                    <input type='checkbox' className='me-2'/>
                    <span className='fw-bold'>New Customers <br />
                <mark className='text-muted'>Receive a notification when customers are added</mark>
                </span>
                </Col>
        </Row>
         <Row className='p-2  border-bottom border-top'>
                <Col className='d-flex align-items-center'>
                    <input type='checkbox' className='me-2'/>
                    <span className='fw-bold'>Inventory Date <br />
                <mark className='text-muted'>Receive a notification when orders are added to inventory</mark>
                </span>
                </Col>
        </Row>

            </Card>
         )
}

export default ECard
