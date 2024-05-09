const enrollmentModel = require("../models/enrollment.model");
const emailService = require('../services/emailService');
const smsService = require('../services/smsService');

// create enrollment
const enrollToCourse = async (req, res) => {
  const { course_id, user_id } = req.body;
  if (!course_id || !user_id) {
    return res.status(400).json({ message: "course_id and user_id required!" });
  }

  try {
    const response = await enrollmentModel.create({
      purchased_by: user_id,
      course_id: course_id,
    });

    await emailService.sendConfirmationEmail(course_id, user_id);
    await smsService.sendConfirmationSMS(course_id);

    if (response) {
      return res.status(201).json({ message: "enrollment record created" });
    } else {
      return res
        .status(400)
        .json({ message: "enrollment record can not be created" });
    }
  } catch (error) {
    return res.status(400).json({ message: "enrollment failed" });
  }
};

// delete enrollment
const unenrollFromCourse = async (req, res) => {
  const { enrollment_id } = req.params;

  if (!enrollment_id) {
    return res.status(400).json({ message: "enrollment id cant be found!" });
  }

  try {
    const deletedEnrollment = await enrollmentModel.findByIdAndDelete(id);

    if (deletedEnrollment) {
      return res.status(200).json({ message: "enrollment deleted!" });
    }
  } catch (error) {
    return res.status(400).json({ message: "enrollment deletion failed!" });
  }
};

// get enrollments by user id
const getEnrolledCoursesFromUserId = async (req, res) => {
  const { user_id } = req.params;

  if (!user_id) {
    return res.status(400).json({ message: "user id could not be found!" });
  }

  try {
    const enrollments = await enrollmentModel.find({ purchased_by: user_id });

    if (enrollments) {
      return res.status(200).json(enrollments);
    } else {
      return res
        .status(400)
        .json({ message: "enrollments can not be fetched!" });
    }
  } catch (error) {
    return res.status(400).json({ message: "enrollments listing failed!" });
  }
};

module.exports = {
  enrollToCourse,
  unenrollFromCourse,
  getEnrolledCoursesFromUserId,
};
