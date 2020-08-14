const express = require('express')
const router = express.Router()
const students = require('./students')

const studentInfo = [
  { 
    id: 1,
    name: 'student1',
    details: 'details on student1',
    grades: 75
  },
  { 
    id: 2,
    name: 'student2',
    details: 'details on student2',
    grades: 85

  },
  { 
    id: 3,
    name: 'student3',
    details: 'details on student3',
    grades: 95

  }
]


router.get('/:id', (req, res) => {
  const studentId = parseInt(req.params.id)
  console.log(req.params)
  const student = students.studentInfo.find(student => students.studentInfo.id === studentId)
  
  res.json(students.grades)
})


router.post('/:id/:grades', (req, res) => {
 //   res.send('SUCCESS: you added '+req.params.id +'Grades: '+req.params.grades)
    const grade = req.body
    if (!grade.studentId)
    res.status(422).send(() => {

      return new Error('please include student ID in your request')
    })
    res.status(201).json(grade)
  })


module.exports = router