import React from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import Leftside from './Leftside';
import Rightside from './Rightside';

const Courses = () => {
    
    return (
        <div>
            <Container className='mt-5'>
                <Row>
                    <Col lg="2">
                        <Leftside></Leftside>
                    </Col>
                    <Col lg="1">
                        
                    </Col>
                   
                    <Col lg="9">
                        <Rightside></Rightside>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;