import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rightcontent from "./Rightcontent";

const Rightside = () => {
  const [rightsides, setRightside] = useState([]);

  useEffect(() => {
    fetch("https://course-network-server.vercel.app/course-details")
      .then((res) => res.json())
      .then((data) => setRightside(data));
  }, []);

  return (
    <div className="row row-cols-1 row-cols-lg-3  d-flex justify-content-center align-items-center">
      {rightsides.map((rightside) => (
        <Rightcontent rightside={rightside} key={rightside._id}></Rightcontent>
      ))}
    </div>
  );
};

export default Rightside;
