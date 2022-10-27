import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="img-resize d-block w-100 bg-light"
            src="https://cache.careers360.mobi/media/article_images/2021/8/9/Online-courses-after-10th.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-resize d-block w-100 bg-light"
            src="http://www.hubopportunities.com/wp-content/uploads/2022/09/online-course-blog-header.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-resize d-block w-100 bg-light"
            src="https://iwantonlineclasshelp.com/wp-content/uploads/2020/10/Tips-To-Succeed-An-Online-Course.jpeg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      
    </div>
  );
};

export default Home;
