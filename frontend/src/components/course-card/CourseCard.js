import React from "react";
import { useDispatch } from "react-redux";
import { addCourse } from "../../features/Cart.slice";
import "./course-card.styles.css";

function CourseCard({ course }) {
  const { course_name, course_price, course_author } = course;
  const dispatch = useDispatch();

  return (
    <div className="course-card-container">
      <span className="course-name">{course_name}</span>
      <span className="course-author">{course_author}</span>
      <span className="course-price">${course_price.toFixed(2)}</span>
      <button onClick={() => dispatch(addCourse(course))}>Add To Cart</button>
    </div>
  );
}

export default CourseCard;
