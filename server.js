const cors = require('cors')
const express = require('express')
const app = express()
const axios = require('axios')

app.use(cors())

app.get('/', async (req, res) => {

  try {
    const response = await axios('https://jsonplaceholder.typecode.com/users')

    return res.json(data)
  } catch (error) {
    console.error(error)
  }
})
app.listen('6666')