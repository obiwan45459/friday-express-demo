const express = require('express')
const router = express.Router()




router.post('/:username/:email', (req, res) => {
    res.send('SUCCESS: you added '+req.params.username +'Grades: '+req.params.email)
  })



module.exports = router