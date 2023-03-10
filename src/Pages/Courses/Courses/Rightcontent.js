import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Rightcontent.css'
const Rightcontent = ({ rightside }) => {

  const { _id, img, name } = rightside;
  console.log(_id)
  return (
    <div>
      <Card style={{ width: '18rem' }} className='border-success my-3'>
        <Card.Img className='img-resizes' variant="top" src={img} />
        <Card.Body className='course-name'>
          <Card.Title>{name}</Card.Title>

          <Button variant="success"> <Link className='text-light text-decoration-none fw-bold' to={`/courses/${_id}`}>Read Details</Link> </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Rightcontent;