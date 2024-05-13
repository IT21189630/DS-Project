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
    addContentToCourse,
    updateContent,
    deleteContent,
    deleteCourse
    
} = require("../controllers/course.controller");

router.post("/create-course", createCourse);
router.get("/get-all-courses",getAllCourses);
router.get("/get-all-contents",getAllContents);
router.get("/get-content/:id", getContentDetailsById);
router.get("/get-course/:id", getCoursById);
router.get("/get-all-course-ids", getAllCourseIds);
router.patch("/update-course/:id", updateQuestionWithOptions);
router.post("/add-content/:id", addContentToCourse);
router.patch("/update-content/:id", updateContent);
router.delete("/getcourse/:courseId/content/:id", deleteContent);
router.delete("/delete-courses/:courseId", deleteCourse);

// router.get("/get-option/:id", getOptionById);

module.exports = router;