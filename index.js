
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('hello, express')
})

app.get('/users', function (req, res) {
  // req.params
  // console.log(req.params)
  // res.send('hello, ' + req.params.name)

  // req.query
  console.log(req.query)
  res.send('hello, ' + req.query.name)

})


app.listen(7777)

