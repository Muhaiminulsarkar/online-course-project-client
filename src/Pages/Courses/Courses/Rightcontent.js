import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Rightcontent.css'
const Rightcontent = ({rightside}) => {

    const {_id,img,name}=rightside;
    console.log(_id)
    return (
        <div>
        <Card style={{ width: '18rem'}}>
      <Card.Img className='img-resizes' variant="top" src={img} />
      <Card.Body className='course-name'>
        <Card.Title>{name}</Card.Title>
        
        <Button variant="primary"> <Link to ={`/courses/${_id}`}> Go Details</Link> </Button>
      </Card.Body>
    </Card>
        </div>
    );
};

export default Rightcontent;