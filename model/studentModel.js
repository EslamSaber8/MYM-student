const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Please tell us your name!']
  },
  age:{
    type:Number ,
  },
  level:{
    type:Number,

  },
  techers:{
     type:[String],
  },
  parentPhone:String,
  attendand:{
    type:[String], 
    default:"NewStudent"
  },
  grades:{
    type:[String],
    default:"NewStudent"
  },
  expenses:{
    type:[Boolean],
    default:false
  }
});



const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
