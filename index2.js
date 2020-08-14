const express = require('express')
const app = express()

const studentsRouter = require('./routes/students')
const gradesRouter = require('./routes/grades')
const registerRouter = require('./routes/register')

const PORT = 8080

app.use(express.json())

app.get('/', (req, res) => {
  res.send('welcome to the application')
})

app.use('/students', studentsRouter)
app.use('/grades', gradesRouter)
app.use('/register', registerRouter)

app.listen(PORT)

module.exports = app