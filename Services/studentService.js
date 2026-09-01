const Student = require("../Models/studentModel")

const readAllStudents = ()=>{
    return Student.find()
}

const readUniqueStudent= (id)=>{
    return Student.findById(id)
}

const createStudent = (data)=>{
    return Student.create(data)
}

const UpdateStudent = (id,data)=>{
    return Student.findByIdAndUpdate(id,data,{ new: true, runValidators: true })
}

const deleteStudent = (id)=>{
    return Student.findByIdAndDelete(id)
}


module.exports={
    readAllStudents,
    readUniqueStudent,
    createStudent,
    UpdateStudent,
    deleteStudent
}