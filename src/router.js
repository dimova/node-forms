
const express = require('express')
const router = express.Router()

const { check, validationResult } = require('express-validator/check')
const { matchedData } = require('express-validator/filter')

router.get('/', (req, res) => {
  res.render('index')
})
//adding the customer page
router.get('/customer', (req, res) => {
  res.render('customer', {
    data: {},
    errors: {},
    csrfToken: req.csrfToken()
  })
})

router.post('/customer',[
  check('fromAddress')
    .isLength({ min: 1 })
    .withMessage('An address is required')
    .trim(),
  check('toAddress')
    .isLength({ min: 1 })
    .withMessage('An address is required')
    .trim(),
  check('time')
    .isAfter()
    .withMessage('Date and Time are required'),
  check('carDetails')
    .isLength({ min: 1 })
    .withMessage('Car details is required')
    .trim(),
  check('customerNumber')
    .isLength({ min: 1 })
    .withMessage('Customer number is required')
    .trim(),
  check('operatorID')
    .isLength({ min: 1 })
    .withMessage('Operator ID is required')
    .trim(),
  check('callID')
    .isLength({ min: 1 })
    .withMessage('Call ID is required')
    .trim()
], (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.render('customer', {
      data: req.body,
      errors: errors.mapped(),
      csrfToken: req.csrfToken()
    })
  }
  const data = matchedData(req)
  console.log('Form Data:', data)
   // To do: send sanitized data in an email or persist in a db
   
   req.flash('success', 'Thanks for submitting the form! :)')
   res.redirect('/')
})

module.exports = router
