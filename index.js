const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('I am serving from 3000 port number and you see me')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})