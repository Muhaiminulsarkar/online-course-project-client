import React, { useState } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";


const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Container className='mt-5'>
        <Row >
          <Col lg="5" className="mt-5">

            <h1 className=" text-success fw-bold mt-5">Enhance Your
              Learning</h1> <br />
            <p className="fs-4 fw-bold">Here You Find Most Trending Courses</p>
            <p>CourseNetwork is an One Stop Virtual Edutech Platform for Creating Employability Through Courses, Career Paths & Learning Paths.Join number of people learning on CourseNetwork. Find online courses and degrees from leading organizations and start learning online today.Search for a comprehensive selection of Online courses 2022/2023. We have all online lecturers, online certificates, and online associate degrees.
            </p>
            <Button variant="success">
              <Link className='text-light text-decoration-none fw-bold' to={`/courses`}>Get Started</Link>
            </Button>
          </Col>

          <Col lg="3"></Col>
          <Col lg="4">
            <img src="https://media.istockphoto.com/vectors/online-library-and-knowledge-vector-id943117712?k=20&m=943117712&s=612x612&w=0&h=xDdblIz4Fc9RWqQMAqMEC2oFX5maRXbjXazGkniheAI=" alt="" />
          </Col>
        </Row>
      </Container>

    </div>
  );
};

export default Home;
