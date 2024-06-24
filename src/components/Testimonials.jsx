import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import drminh from '../assets/drminh.jpg';
import subin from '../assets/subin.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Dr. Minh Huynh",
      feedback:
        "I see much potential in Niraj. He started with limited knowledge. Yet, he learned well. In a short amount of time, he was able to catch up and contribute to the project. His role was work on the PDF reader. He contributed his part timely to the overall project. He was a responsible and competent team member as he interacted and collaborated with other team members. One of his strengths is his collaborative spirit in teamwork. He worked hard himself but he also contributed to the work of others. Niraj is highly motivated and can learn quickly. I enjoy having him on the team.",
      position: "Department Head, Supply Chain and Management, Southeastern Louisiana University",
      image: drminh,
    },
    {
      id: 2,
      name: "Subin Bista",
      feedback:
        "Niraj's ability to work well in a team, coupled with his technical acumen, makes him a valuable asset to any project or organization. I highly recommend him for any role that requires strong technical skills and a collaborative spirit.",
      position: " Computer Science Junior, Southeastern Louisiana University",
      image: subin,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: true,
  };

  return (
    <div
      name="testimonials"
      className="bg-gradient-to-b from-black  to-gray-800  w-full text-white pt-16 pb-16"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-teal-500">
            Testimonials
          </p>
          <p className="py-6 text-2xl italic">What people say:</p>
        </div>
        <Slider {...settings}>
          {testimonials.map(({ id, name, feedback, position, image }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg overflow-hidden transform transition duration-200 hover:scale-105 hover:shadow-teal-800 p-4"
            >
              <div className="text-center mt-4 px-4">
                <img
                  src={image}
                  alt={name}
                  className="rounded-full w-24 h-24 mx-auto object-cover"
                />
                <p className="text-xl font-bold mt-4">{name}</p>
                <p className="text-sm italic text-gray-400">{position}</p>
              </div>
              <div className="text-center mb-4 px-4 pt-2">
                <p>"{feedback}"</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
