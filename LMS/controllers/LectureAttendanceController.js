const LectureAttendance = require("../../models/lecture.attendances.model");
const Lecture = require("../../models/lectures.model");
const Student = require("../../models/students.model");

exports.createLecAttendance = async function (req, res) {
  let lectureAttendance = await LectureAttendance.findOne({
    lecture_id: req.body.lecture_id,
    student_id: req.body.student_id,
  });
  if (lectureAttendance) return res.status(400).send("Attendance Marked");

  let student = await Student.findOne({ _id: req.body.student_id });
  if (!student) return res.status(404).send("This student is not available");

  let lecture = await Lecture.findOne({ _id: req.body.lecture_id });
  if (!lecture) return res.status(404).send("This lecture is not available");

  lectureAttendance = await LectureAttendance.create({
    lecture_id: req.body.lecture_id,
    student_id: req.body.student_id,
  });

  await lectureAttendance.save();
  console.log(lectureAttendance);
  res.send(lectureAttendance);
};
