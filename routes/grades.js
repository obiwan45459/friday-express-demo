const express = require('express')
const router = express.Router()

const gradesInfo = [
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



router.post('/:', (req, res) => {
    res.send('SUCCESS: you added '+req.params.id)
  })

  router.post('/register', (req, res) => {
    res.send('SUCCESS: ')
  })

// router.post('/', (req, res) => {
//   res.send('your basket has been uploaded')
// })

module.exports = router