const express = require('express')
const router = express.Router()

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

router.get('/', (req, res) => {
  res.send('basket route root rite?')
})

router.get('/:id', (req, res) => {
  const studentId = parseInt(req.params.id)
  console.log(req.params)
  const student = studentInfo.find(student => student.id === studentId)
  
  res.json(student)
})

router.get('grades/:id', (req, res) => {
    const studentId = parseInt(req.params.id)
    console.log(req.params)
    const student = studentInfo.find(student => student.id === studentId)
    
    res.json(student.grades)
})

router.post('/grades', (req, res) => {
    res.send('SUCCESS: you added '+req.params.id)
  })

  router.post('/register', (req, res) => {
    res.send('SUCCESS: ')
  })

// router.post('/', (req, res) => {
//   res.send('your basket has been uploaded')
// })

module.exports = router