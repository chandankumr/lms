const router = require("express").Router();
const Course = require("../../models/courses.model");
const Classroom = require("../../models/classrooms.model");

router.get("/", async (req, res) => {
  const classrooms = await Classroom.find();
  res.send(classrooms);
});

router.get("/:id", async (req, res) => {
  const classroom = await Classroom.findOne({ where: { id: req.params.id } });
  if (!classroom) return res.status(400).send("Invalid Classroom");
  res.send(classroom);
});

router.post("/", async (req, res) => {
  let classroom = await Classroom.findOne({ where: { name: req.body.name } });
  if (classroom) return res.status(400).send("Classroom already registered");

  classroom = await Classroom.create({
    name: req.body.name,
    status: req.body.status,
  });

  await classroom.save();
  console.log(classroom);
  res.send(classroom);
});

router.put("/addCourse/:id", async (req, res) => {
  let classroom = await Classroom.findOne({ _id: req.params.id });
  if (!classroom) return res.status(404).send("Given ID was not found");
  console.log(req.body);

  let course = await Course.findOne({ _id: req.body.course_id });
  if (!course) return res.status(400).send("This course id is not found in db");
  // console.log(course);
  // console.log(classroom);
  classroom.courses[req.body.course_id] = course;
  // console.log(classroom);
  classroom.markModified("courses");
  await classroom.save();
  // console.log(classroom);
  res.send(classroom);
});

router.delete("/delete/:id", async (req, res) => {
  const classroom = await Classroom.deleteOne({ _id: req.params.id });
  if (!classroom) return res.status(404).send("Given ID was not found"); //404 is error not found
  res.send(classroom);
});

module.exports = router;
