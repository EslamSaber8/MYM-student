const { check} = require('express-validator');
const validatorMiddleware = require('../../middlewares/validatorMiddleware');
const student = require('../../model/studentModel');

exports.createStudentValidator = [
  check('fullName')
    .notEmpty()
    .withMessage('student fullName required')
    .isLength({ min: 6 })
    .withMessage('Too short fullName')
    .isLength({ max: 32 })
    .withMessage('Too long fullName'),

   check("age")
   .notEmpty() .withMessage('student age required').isNumeric().withMessage("age must be a number between 6 and 25") 
   .custom((value) => {
    // Custom validation to check the minimum and maximum values
    if (value < 6 || value > 25) {
      throw new Error('age must be between 6 and 25');
    }
    return true;}),

   check('level')
   .notEmpty().withMessage('student level required').isNumeric().withMessage("level must be a number between 6 and 25")
    .custom((value) => {
    if (value < 1 || value > 12) {
       throw new Error('level must be between 1 and 12');
    }
  return true;
}),

  
   check('techers')
   .notEmpty()
   .withMessage('student must be belong to teacher'),
  //  .isMongoId()
  //  .withMessage('Invalid teacher id format'),
   check('parentPhone')
    .notEmpty()
    .withMessage('parentPhone required')
    .isMobilePhone(['ar-EG', 'ar-SA'])
    .withMessage('Invalid phone number only accepted Egypt and SaudiArabia Phone numbers'),

    check('attendand').optional(),
    check('grades').optional(),
    check('expenses').optional(),

  validatorMiddleware,
];

exports.getStudentValidator = [
  check('id').isMongoId().withMessage('Invalid Student id format'),
  validatorMiddleware,
];

exports.updateStudentValidator = [
  check('id').isMongoId().withMessage('Invalid Student id format'),
  check('fullName').optional()
  .isLength({ min: 6 })
  .withMessage('Too short fullName')
  .isLength({ max: 32 })
  .withMessage('Too long fullName'),

check("age").optional()
.notEmpty() .withMessage('student age required')
.isLength({ min: 6 }).withMessage("please enter age from 6 to 25 ")
.isLength({ max: 25 }).withMessage("please enter age from 6 to 25 "),

check('level').optional()
.notEmpty().withMessage('student level required')
.isLength({ min: 1 }).withMessage("please enter level from 1 to 12 ")
.isLength({ max: 12 }).withMessage("please enter level from 1 to 12 "),

check('techers').optional()
 .isMongoId()
 .withMessage('Invalid teacher id format'),
 check('parentPhone').optional()
  .notEmpty()
  .withMessage('parentPhone required')
  .isMobilePhone(['ar-EG', 'ar-SA'])
  .withMessage('Invalid phone number only accepted Egypt and SaudiArabia Phone numbers'),

    check('attendand').optional(),
    check('grades').optional(),
    check('expenses').optional(),
  validatorMiddleware,
];

exports.deleteStudentValidator = [
  check('id').isMongoId().withMessage('Invalid Student id format'),
  validatorMiddleware,
];