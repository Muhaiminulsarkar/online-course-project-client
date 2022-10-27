import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const CourseDetails = () => {
  const data = useLoaderData();
  const { price, description, instructor, duration, assignment, name, img, videoes, _id } = data;
  console.log(price);

  return (
    <div className="container mx-auto mt-5">
      <Card>
        <Card.Img height="500px" variant="top" src={img} />
        <Card.Body className="course-name">
          <Card.Title>course nmae:{name}</Card.Title>
          <Card.Text>details:{description}</Card.Text>
          <p>instructor:{instructor}</p>
          <p>duration:{duration}</p>
          <p>assignment:{assignment}</p>
          <p>videos:{videoes}</p>
          <Button variant="primary">
            <Link to={`/checkout/${_id}`}>Get premium access</Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseDetails;

//https://course-hub-platform-server.vercel.app/course-details/${_id}
