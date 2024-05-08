const mongoose = require("mongoose");

const ContentSchema = mongoose.Schema(
{
    lectureVideo: {
        type: String,
        required: true
    },

    lectureName: {
        type: String,
        required: true
    },

    lectureNote: {
        type: String,
        required: true
    }
    
});

module.exports = mongoose.model("Content", ContentSchema);