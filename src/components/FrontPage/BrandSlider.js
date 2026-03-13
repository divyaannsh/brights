import React from "react";
import Slider from "react-slick";
import Img1 from "../../assets/images/slider1.jpg";
import Img2 from "../../assets/images/slider2.jpg";
import Img3 from "../../assets/images/slider3.jpg";
import Img4 from "../../assets/images/slider4.jpg";
import Img5 from "../../assets/images/slider5.jpg";
import Img6 from "../../assets/images/slider6.jpg";
import Img7 from "../../assets/images/slider7.jpg";
import Img8 from "../../assets/images/slider8.jpg";
import Img9 from "../../assets/images/slider9.jpg";
import Img10 from "../../assets/images/slider10.jpg";
// import Img12 from "../../assets/images/slider12.jpg";
import Img13 from "../../assets/images/slider13.jpg";
import Img14 from "../../assets/images/slider14.jpg";
import Img15 from "../../assets/images/slider15.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
  Img10,
  // Img12,
  Img13,
  Img14,
  Img15,
];

export default function BrandSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false, // Add this line to remove arrows
    responsive: [
      {
        breakpoint: 1024, // Medium screens
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Small screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Extra small screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container-fluid mb-5">
      <div
        className="row"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-once="true"
      >
        <div className="col-md-12">
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index}>
                <img
                  src={img}
                  alt={`Slider Image ${index + 1}`}
                  style={{ width: "80%", height: "auto" }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
