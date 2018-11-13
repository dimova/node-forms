
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
        msg: 'Required field'
      },
      customerNumber: {
        msg: 'Required field'
      },
      operatorID: {
        msg: 'Required field'
      },
      callID: {
        msg: 'Required field'
      }
    }
  })
})

module.exports = router
