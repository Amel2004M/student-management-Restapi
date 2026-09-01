const express = require ('express')
const router = express.Router()
const {
    getStudent,getStudents,postStudent,putStudent,patchStudent,deleteStudent
}=require('../Controllers/studentController')

router.get('/',getStudents)
router.get('/:id',getStudent)
router.post('/',postStudent)
router.put('/:id',putStudent)
router.patch('/:id',patchStudent)
router.delete('/:id',deleteStudent)

module.exports=router



