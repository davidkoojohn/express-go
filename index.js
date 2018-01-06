
const express = require('express')
const app = express()

const path = require('path')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


const IndexRoute = require('./routes/index')
const UsersRoute = require('./routes/users')

app.use('/', IndexRoute)
app.use('/users', UsersRoute)


app.listen(7777)

