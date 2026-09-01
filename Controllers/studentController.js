const studentService = require("../Services/studentService")

const getStudents = async(req,res)=>{
    try {
        const students = await studentService.readAllStudents()
        if(students.length===0){
            return res.status(404).json({message : "no student found"})
        }
        res.status(200).json({data : students})
    } catch (error) {
        res.status(400).json({message : error.message})
    }
}

const getStudent = async (req,res)=>{
    try {
        const student = await studentService.readUniqueStudent(req.params.id)
        if(!student){
            return res.status(404).json({message : "no student found"})
        }
        res.status(200).json({data:student})

    } catch (error) {
        res.status(400).json({message : error.message})
    }
}

const postStudent = async (req,res)=>{
    
    try {
        const {name,email,age,speciality} = req.body
        if(!name || !email || !speciality){
            return res.status(400).json({message : "name , email,and speciality are required"})
        }
        if(age && age <18){
            return res.status(400).json({message :"the age should be minimum 18"})
        }
        const student = await studentService.createStudent({name,email,age,speciality})
        res.status(201).json({message : "Student created", data : student})

    } catch (error) {
        res.status(400).json({message : error.message})
    }
    
}

const putStudent= async (req,res)=>{
    try {
    const {name,email,age,speciality} = req.body
     if(!name || !email || !speciality){
            return res.status(400).json({message : "name , email,and speciality are required"})
        }
        if(age && age <18){
            return res.status(400).json({message :"the age should be minimum 18"})}
        const student = await studentService.UpdateStudent(req.params.id,{name,email,age,speciality})
        if(!student){
            return res.status(404).json({message : "student not found"})
        }
        res.status(200).json({message : "Student updated",data :student})    
    } catch (error) {
        res.status(400).json({message : error.message})
    
    }
}

const patchStudent = async (req,res)=>{
    try {
        const {name,email,age,speciality} = req.body
        if(!name && !email && !speciality){
            return res.status(400).json({message : "name,email and speciality are required"})
        }
        if(age && age<18){
            return res.status(400).json({message : "age should be minimum 18"})
        }
        const student = await studentService.UpdateStudent(req.params.id,{name,email,age,speciality})
        if(!student){
            return res.status(404).json({message : "student not found"})
        }
        res.status(200).json({message : "Student updated",data :student})

    } catch (error) {
        res.status(400).json({message : error.message})
    }
}

const deleteStudent = async (req,res)=>{
    try {
        const student = await studentService.deleteStudent(req.params.id)
        if(!student) {
            return res.status(404).json({message : "student not found"})
        }
        res.status(204).json({message : "Student deleted",data :student})
    } catch (error) {
        res.status(400).json({message : error.message})
    }
}

module.exports={
    getStudent,getStudents,postStudent,putStudent,patchStudent,deleteStudent
}