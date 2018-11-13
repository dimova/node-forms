
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})
//adding the customer page
router.get('/customer', (req, res) => {
  res.render('customer')
})

module.exports = router
