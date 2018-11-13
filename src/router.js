
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})
//adding the customer page
router.get('/customer', (req, res) => {
  res.render('customer', {
    data: {},
    errors: {}
  })
})

router.post('/customer', (req, res) => {
  res.render('customer', {
    data: req.body, // { fromAddress, toAddress, carDetails, customerNumber, operatorID, callID }
    errors: {
      fromAddress: {
        msg: 'An address is required'
      },
      toAddress: {
        msg: 'An address is required'
      },
      carDetails: {
        msg: 'Car details is required'
      },
      customerNumber: {
        msg: 'Customer number is required'
      },
      operatorID: {
        msg: 'Operator ID is required'
      },
      callID: {
        msg: 'Call ID is required'
      }
    }
  })
})

module.exports = router
