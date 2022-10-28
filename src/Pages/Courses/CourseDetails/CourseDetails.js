import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const CourseDetails = () => {
  const data = useLoaderData();
  const { price, description, level, lecture, classes, name, img, feature, _id } = data;
  console.log(price);

  return (
    <div className="container mx-auto mt-5">
      <Card>
        <Card.Img height="500px" variant="top" src={img} />

        <Card.Body className="course-name">
          <Button variant="success" className="mb-2">
            <Link className='text-light text-decoration-none fw-bold w-25 ' to={``}>Download pdf</Link>
          </Button>
          <Card.Title>Course Title:{name}</Card.Title>
          <Card.Text>details:{description}</Card.Text>
          <p className="fw-bold">Level:{level}</p>
          <p className="fw-bold">Lecture:{lecture}</p>
          <p className="fw-bold">Class:{classes}</p>
          <p className="fw-bold">Feature:{feature}</p>
          <p className="fs-3 fw-bold text-success">Price:{price}</p>
          <Button variant="success">
            <Link className='text-light text-decoration-none fw-bold' to={`/checkout/${_id}`}>Enroll Now</Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseDetails;

//https://course-hub-platform-server.vercel.app/course-details/${_id}
