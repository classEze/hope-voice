import React from 'react'
import {} from 'react-icons/ri'
import { Card, Col, Row } from 'reactstrap'


const ACard = () => {
    return (
            <Card className='w-90 account mx-auto rounded-0 mb-4 p-4'>
               <span className='fw-bolder'> Account </span>
               <p className='text-muted fw-bold fs-10'> The list of accounts or stores to which you are a member </p>

         <Row className='p-2 bg-grey border'>
                <Col sm='8'>
                <span>Store</span><br />
                </Col>
                <Col sm='4'>
                <span>Role</span>
                </Col>
        </Row>
         <Row className='px-2 border'>
                <Col sm='8' className='d-flex align-items-center py-1'>
                <img src='image.png' alt='profile'/>
                <span>Hiatt Hardware <br />Address</span>
                </Col>
                <Col sm='4' className='d-flex align-items-center'>
                <span>Warehouse manager</span>
                </Col>
        </Row>

         <Row className='px-2 border'>
                <Col sm='8' className='d-flex align-items-center py-1'>
                <img src='image.png' alt='profile'/>
                <span>The hardware City<br/> Address </span>
                </Col>
                <Col sm='4' className='d-flex align-items-center'>
                <span>Administrator</span>
                </Col>
        </Row>
            </Card>
         )
}

export default ACard
