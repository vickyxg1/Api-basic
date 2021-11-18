const cors = require('cors')
const express = require('express')
const app = express()

app.use(cors())

app.get('/', (req, res) => {
  return res.json([
    { name: 'vicky' },
    { name: 'max' }
  ])
})

app.listen('6666')