const route = require("express").Router();
const ClassroomRoutes = require("../routes/classrooms.api");
const CourseSectionRoutes = require("../routes/course.sections.api");
const CoursesRoutes = require("../routes/courses.api");
const LectureRoutes = require("../routes/lectures.api");
const StudentsRoutes = require("../routes/students.api");
const QuizRoutes = require("../routes/quiz.api");
const QuizSubmissionRoutes = require("../routes/quiz.submission.api");
const AssignmentRoutes = require("../routes/assignment.api");

// ============ Quiz Routes ================
route.use(QuizRoutes);
// ======================================

// ============ Quiz Submission Routes ================
route.use(QuizSubmissionRoutes);
// ======================================

// ============ Students ================
route.use(StudentsRoutes);
// ======================================

//============= COURSES==================
route.use(CoursesRoutes);
//============= COURSES==================

//============= COURSE SECTION==================
route.use(CourseSectionRoutes);
//============= COURSE SECTION==================

//==================== CLASSROOM================
route.use(ClassroomRoutes);
//==================== CLASSROOM================

//======================= LECTURE=====================
route.use(LectureRoutes);
//======================= LECTURE====================
//======================= LECTURE=====================
route.use(LectureRoutes);
//======================= LECTURE====================
//======================= LECTURE=====================
route.use(LectureRoutes);
//======================= LECTURE====================

//======================ASSIGNMENT=========================
route.use(AssignmentRoutes);
//======================ASSIGNMENT=========================

module.exports = route;
