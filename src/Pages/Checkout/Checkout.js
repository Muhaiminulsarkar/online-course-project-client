import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

const Checkout = () => {

    const data=useLoaderData();
    const {price,instructor,name}=data;
    return (
        <div className='container mx-auto w-50 mt-5'>
             <Card border="info">
        <Card.Header className='fw-bold text-center fs-3'>{name}</Card.Header>
        <Card.Body className='course-name mx-2'>
          <Card.Title className='text-primary fw-bold'>course price:{price}</Card.Title>
            <p>instructor:{instructor}</p>
            <p>payment method: <span className='text-primary fw-bold'> 01982312123 </span> </p>
            <li>Bkash</li>
            <li>Nagad</li>
            <li>Paypal</li>

            <div className='mt-3'>
            <Button className='mx-2' variant="primary">submit</Button>
            <Button variant="danger"> <Link to="/courses" >cancel</Link></Button>
            </div>
        </Card.Body>
      </Card>
        </div>
    );
};

export default Checkout;