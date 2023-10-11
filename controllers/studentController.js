const asyncHandler = require('express-async-handler');
const ApiError = require('../utils/apiError');
const Student = require('../model/studentModel');

//  Get list of student
// route   GET /api/v1/student

exports.getStudents = asyncHandler(async (req, res, next) => {
    const student = await Student.find();
    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: student.length,
      data: {
        student
      }
    });
  });

// @desc    Get specific student by id
// @route   GET /api/v1/student/:id
exports.getStudent = asyncHandler(async (req, res, next) => {
    const student = await Student.findById(req.params.id);
  
    if (!student) {
      return next(new AppError('No student found with that ID', 404));
    }
  
    res.status(200).json({
      status: 'success',
      data: {
        student
      }
    });
  });
// @desc    Create user
// @route   POST  /api/v1/student
exports.createStudent = asyncHandler(async (req, res, next) => {
    const newStudent = await Student.create(req.body);
  
    res.status(201).json({
      status: 'success',
      student: newStudent
    });
  });
  

// @desc    Update specific user
// @route   PUT /api/v1/student/:id
exports.updateStudent = asyncHandler(async (req, res, next) => {
  const document = await Student.findByIdAndUpdate(
    req.params.id,
    {
        fullName:req.body.fullName,
        age:req.body.age,
        level: req.body.level,
        techers:req.body.techers,
        parentPhone:req.body.parentPhone,
        attendand:req.body.attendand,
        grades: req.body. grades,
        expenses:req.body. expenses,
    },
    {
      new: true,
    }
  );

  if (!document) {
    return next(new ApiError(`No document for this id ${req.params.id}`, 404));
  }
  res.status(200).json({ data: document });
});


// @desc    Delete specific student
// @route   DELETE /api/v1/student/:id
exports.deleteStudent =  asyncHandler(async (req, res, next) => {
    const student = await Student.findByIdAndDelete(req.params.id);
  
    if (!student) {
      return next(new AppError('No student found with that ID', 404));
    }
  
    res.status(204).json({
      status: 'success',
      data: null
    });
  });

