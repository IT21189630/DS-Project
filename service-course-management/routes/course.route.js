const express = require("express");
const router = express.Router();

const{
    createCourse,
    getAllCourses,
    getAllContents,
    getContentDetailsById,
    getCoursById,
    getAllCourseIds,
    updateQuestionWithOptions,
    addContentToCourse
    
} = require("../controllers/course.controller");

router.post("/create-course", createCourse);
router.get("/get-all-courses",getAllCourses);
router.get("/get-all-contents",getAllContents);
router.get("/get-content/:id", getContentDetailsById);
router.get("/get-course/:id", getCoursById);
router.get("/get-all-course-ids", getAllCourseIds);
router.patch("/update-course/:id", updateQuestionWithOptions);
router.post("/add-content/:id", addContentToCourse);

// router.get("/get-option/:id", getOptionById);

module.exports = router;