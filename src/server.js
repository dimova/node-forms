
const path = require('path')
const express = require('express')
const layout = require('express-layout')
const router = require('./router')
const app = express()
const bodyParser = require('body-parser')
const validator = require('express-validator')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const flash = require('express-flash')
const helmet = require('helmet')
const csrf = require('csurf')
const middlewares = [
  helmet(),
  layout(),
  express.static(path.join(__dirname, 'public')),
  bodyParser.urlencoded(),
  validator(),
  cookieParser(),
  session({
    secret: 'super-secret-key',
    key: 'super-secret-cookie',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }
  }),
  flash(),
  csrf({ cookie: true })
]
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(middlewares)
app.use('/', router)
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!")
})
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
app.listen(3000, () => {
  console.log(`App running at http://localhost:3000`)
})
