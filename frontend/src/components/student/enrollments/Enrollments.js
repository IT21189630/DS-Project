import React, { useState, useEffect } from "react";
import Loading from "../../loading/Loading";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-hot-toast";
import "./enrollments.styles.css";

function Enrollments() {
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user_id } = useSelector((state) => state.user);

  useEffect(() => {
    getEnrollments();
  }, []);

  const getEnrollments = async () => {
    console.log("rendered");
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:4001/learnup/api/course-enrollment/get-enrollments/${user_id}`
      );
      if (response.data) {
        setEnrollments(response.data);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return loading ? (
    <Loading passer={{ message: "Loading Data" }} />
  ) : (
    <div className="enrollments-page-container">
      <div className="enrollments-display-container">
        <span className="partition-heading">My Enrollments</span>
        {enrollments.length < 1 ? (
          <Loading passer={{ message: "No Enrollments Yet!" }} />
        ) : (
          <div className="course-partition-canvas">
            {enrollments.map((enrollmentData) => {
              console.log(enrollmentData);
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Enrollments;
