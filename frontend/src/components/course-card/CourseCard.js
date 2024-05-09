import React from "react";
import { useDispatch } from "react-redux";
import { addCourse } from "../../features/Cart.slice";
import { MdVerified } from "react-icons/md";
import "./course-card.styles.css";

function CourseCard({ course }) {
  const { courseName, coursePrice, courseImage } = course;
  const dispatch = useDispatch();

  return (
    <div className="course-card-container">
      <img
        src={courseImage}
        alt="thumbnail"
        className="course-thumbnail-placeholder"
      />
      <div className="card-content-area">
        <span className="card-course-name">{courseName}</span>
        <span className="card-course-verification">
          <MdVerified /> Verified
        </span>
        <span className="card-course-price">${coursePrice.toFixed(2)}</span>
        <button
          className="card-btn"
          onClick={() => dispatch(addCourse(course))}
        >
          Add To Cart
        </button>
        <button className="card-btn">View Details</button>
      </div>
    </div>
  );
}

export default CourseCard;
