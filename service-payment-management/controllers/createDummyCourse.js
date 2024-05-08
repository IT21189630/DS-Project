const courseModel = require("../models/course.model");

const createCourse = async (req, res) => {
  const { course_name, course_author, course_price } = req.body;

  if (!course_name || !course_author || !course_price) {
    return res.status(400).json({ error: "course info is missing!" });
  }

  try {
    const createdCourse = await courseModel.create({
      course_name,
      course_author,
      course_price,
    });

    if (createdCourse) {
      res.status(201).json({ message: "course created" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "course could not be created" });
  }
};

const getCourses = async (req, res) => {
  try {
    const courses = await courseModel.find({});

    if (courses) {
      res.status(200).json(courses);
    }
  } catch (error) {
    res.status(400).json({ message: "course could not be fetched" });
  }
};

module.exports = { createCourse, getCourses };
