const express = require('express')
const router = express.Router()
const students = require('./students')


router.get('/:id', (req, res) => {
  const studentId = parseInt(req.params.id)
  console.log(req.params)
  const student = students.studentInfo.find(student => students.studentInfo.id === studentId)
  
  res.json(students.grades)
})


router.post('/:id/:grades', (req, res) => {
    res.send('SUCCESS: you added '+req.params.id +'Grades: '+req.params.grades)
  })


module.exports = router