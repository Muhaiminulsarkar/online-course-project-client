import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';


const Checkout = () => {

  const data = useLoaderData();
  console.log(data);
  const { name, price } = data;
  return (
    <div className='container mx-auto w-50 mt-5'>
      <h4 className="mb-2">"{name}" has been added.</h4>
      <h2 className='text-center text-success'>Add your information</h2>
      <>



        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Your Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label>Phone number</Form.Label>
          <Form.Control name="number" type="number" placeholder="Enter your phone number" required />
        </Form.Group>



        <Card className='mx-auto mt-5' border="success" style={{ width: '70%' }}>
          <Card.Header className='text-center'>{name}</Card.Header>
          <Card.Body>
            <Card.Text>
              bKash "Send Money" fee will be added with net price.You need to send us <span className='text-success fw-bold'>{price}</span> <br />
              Account Type: Personal <br />
              Account Number: 01911607786 <br />

              <Form.Group className="mb-3" controlId="formBasicNumber">
                <Form.Label>Bkash number</Form.Label>
                <Form.Control name="number" type="number" placeholder="Enter your Bkash number" />
              </Form.Group>
              <div className='text-center'>
                <Button variant='success' className="px-5 py-2 fw-bold fs-5">Place order</Button>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    </div>
  );
};

export default Checkout;