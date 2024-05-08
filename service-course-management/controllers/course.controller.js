const { model } = require('mongoose');
const CourseModel = require('../models/Course.model');
const ContentModel = require('../models/Content.model');
const asyncHandler = require('express-async-handler');


const createCourse = asyncHandler(async (req, res) => {
    const { courseId, courseName, specialization , courseDescription , courseContent , skills } = req.body;

    try {
        // Create Options first
        const createdContents = await CourseModel.insertMany(courseContent);

        // Extract IDs of created options
        const contentIds = createdContents.map(option => option._id);

        // Create Question and associate Option IDs
        const newCourse = await CourseModel.create({
            courseId,
            courseName,
            specialization,
            courseDescription,
            courseContent: contentIds, // Assign option IDs to the question
            skills
        });

        // Update the question field in each option to reference the new question
        await CourseModel.updateMany({ _id: { $in: contentIds } }, { $set: { courseId: newCourse._id } });

        res.status(201).json({
            message: 'Course created successfully',
            question: newCourse
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});




// Fetch all data

const getAllCourses = asyncHandler(async (req,res) => {
    const courses = await CourseModel.find().populate('courseContent');

    if (courses.length > 0) {
        res.status(200).json(courses);
    } else {
        res.status(404).json({ message: "No course found" });
    }
 
});
const getAllCourseIds = asyncHandler(async (req, res) => {
    try {
        const courseIds = await CourseModel.find({}, '_id');

        if (courseIds.length > 0) {
            res.status(200).json(courseIds);
        } else {
            res.status(404).json({ message: "No content IDs found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


const getCoursById = asyncHandler(async (req, res) => {
    try {
        const id = req.params.id;

        // Find the question by ID and populate the options
        const course = await CourseModel.findById(id).populate('courseContent');

        if (course) {
            res.status(200).json(course);
        } else {
            res.status(404).json({ error: 'Course not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


 const getAllContents = asyncHandler (async (req,res) => {
    
    const response2 = await CourseModel.find({});

   if(response2) {
       res.status(201).json(response2);
   } else {
       res.status(200).json("no question found");
   }
 });


const getContentDetailsById = asyncHandler(async (req, res) => {
    try {
        const id = req.params.id;

        // Find the option by ID
        const content = await CourseModel.findById(id);

        if (content) {
            res.status(200).json(content);
        } else {
            res.status(404).json({ error: 'Content not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

const updateQuestionWithOptions = asyncHandler(async (req, res) => {
    const id = req.params.id; // Extract courseId from URL parameters
    const { courseId, courseName, specialization, courseDescription, skills } = req.body;

    try {
        // Update the course
        const updatedCourse = await CourseModel.findByIdAndUpdate(
            id,
            {
                courseId,
                courseName,
                specialization,
                courseDescription,
                skills
            },
            { new: true } // Return the updated document
        );

        if (!updatedCourse) {
            return res.status(404).json({ error: "Course not found" });
        }

        res.status(200).json(updatedCourse);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const addContentToCourse = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { lectureVideo, lectureName, lectureNote } = req.body;

    try {
        // Find the existing course
        const existingCourse = await CourseModel.findById(id);

        if (!existingCourse) {
            return res.status(404).json({ error: "Course not found" });
        }

        // Create the new content
        const newContent = await ContentModel.create({
            lectureVideo,
            lectureName,
            lectureNote
        });

        // Associate the new content with the existing course
        existingCourse.courseContent.push(newContent._id);

        // Save the course with the updated content
        await existingCourse.save();

        res.status(200).json({
            message: 'Content added to course successfully',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});




module.exports = {
    createCourse,
    getAllCourses,
    getAllContents,
    getContentDetailsById,
    getCoursById,
    getAllCourseIds,
    updateQuestionWithOptions,
    addContentToCourse
};
