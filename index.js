
const express = require('express')
const app = express()

const IndexRoute = require('./routes/index')
const UsersRoute = require('./routes/users')

app.use('/', IndexRoute)
app.use('/users', UsersRoute)


app.listen(7777)

