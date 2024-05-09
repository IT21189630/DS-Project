const mongoose = require("mongoose");

const dummyCourseSchema = mongoose.Schema(
  {
    course_name: {
      type: String,
      required: true,
    },
    course_author: {
      type: String,
      required: true,
    },
    course_price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Dummy_Course", dummyCourseSchema);
