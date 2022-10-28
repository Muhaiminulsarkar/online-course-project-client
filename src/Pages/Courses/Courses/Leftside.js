import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Leftside = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/courses-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h4 className=" fw-bold text-success fs-3">Total Course: {categories.length}</h4>
      <div>
        {categories.map((category) => (
          <p key={category.id}>
            <Link className="text-decoration-none fw-bold text-black" to={`/courses/${category.id}`}>{category.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Leftside;
