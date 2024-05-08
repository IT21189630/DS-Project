const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CourseSchema = new Schema({

    courseId: {
        type: String,
        required: true
    },

    courseName: {
        type: String,
        required: true
    },

    specialization: {
        type: String,
        required: true
    },

    courseDescription: {
        type: String,
        required: true
    },

    courseContent: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Content'
    }],

    skills: [{
        type: String,
        required: true
    }]
      
});

module.exports = mongoose.model("Question", CourseSchema);




