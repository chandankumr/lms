const route = require("express").Router();
const ClassroomRoutes = require("../routes/classrooms.api");
const CourseSectionRoutes = require("../routes/course.sections.api");
const CoursesRoutes = require("../routes/courses.api");
const LectureRoutes = require("../routes/lectures.api");
const StudentsRoutes = require("../routes/students.api");
const TeacherRoutes = require("../routes/teachers.api");
const AttendanceRoutes = require("../routes/attendance.api");
const AuthChecker = require("../middlewares/authTokenVerifyForTeacher");
const QuizRoutes = require("../routes/quiz.api");
const QuizQuestionRoutes = require("../routes/quiz.question.api");
const AssignmentRoutes = require("../routes/assignment.api");
const NotesRoutes = require("../routes/notes.api");
const QuizSubmissionRoutes = require("../routes/quiz.submission.api");
// ============ Teachers ================
route.use(TeacherRoutes);
// ======================================


// ============ Quiz Submission Routes ================
route.use(QuizSubmissionRoutes);
// ======================================

// ============ Quiz Question Routes ================
route.use(QuizQuestionRoutes);
// ======================================

// ============ Quiz Routes ================
route.use(QuizRoutes);
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

//======================ATTENDANCE=========================
route.use(AttendanceRoutes);
//======================ATTENDANCE=========================

//======================ASSIGNMENT=========================
route.use(AssignmentRoutes);
//======================ASSIGNMENT=========================

//======================ASSIGNMENT=========================
route.use(NotesRoutes);
//======================ASSIGNMENT=========================

module.exports = route;
