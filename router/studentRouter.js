const express = require('express');
const {
  getStudentValidator,
  createStudentValidator,
  updateStudentValidator,
  deleteStudentValidator,
} = require('../utils/validator/studentValidate');
const studentController = require('./../controllers/studentController');
const router = express.Router();

router
  .route('/')
  .get(studentController.getStudents)
  .post(createStudentValidator,studentController.createStudent);

router
  .route('/:id')
  .get(getStudentValidator,studentController.getStudent)
  .patch(updateStudentValidator,studentController.updateStudent)
  .delete(deleteStudentValidator,studentController.deleteStudent);

module.exports = router;
