import React from "react";
import { useDispatch } from "react-redux";
import { removeCourse } from "../../features/Cart.slice";
import "./cart-item.styles.css";

function CartItem({ item }) {
  const dispatch = useDispatch();
  const { _id, course_name, course_author, course_price } = item;

  return (
    <div className="cart-item-container">
      <img src="" alt="" className="thumbnail-placeholder" />
      <div className="course-details-section">
        <span>{course_name}</span>
        <span>{course_author}</span>
        <span>{course_price.toFixed(2)}</span>
      </div>
      <div className="cart-item-options">
        <button onClick={() => dispatch(removeCourse(_id))}>remove</button>
      </div>
    </div>
  );
}

export default CartItem;
